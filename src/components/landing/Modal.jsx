import "../../styles/_modal.scss";
import { useEffect } from 'react';
import PropTypes from 'prop-types';


function Modal({ activeExp = [], Open, onClose }) {

    //close on ESC 
    useEffect(() => {
        // only add listener if modal is open
        if (!Open) return;

        // handler for ESC key
        const onKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [Open, onClose]);

    // ✅ important: don’t render when closed
    if (!Open) return null;

    // group by company_logo (or use content.company if you prefer)
    const groupedByCompany = activeExp.reduce((acc, item) => {
        const key = item.company_logo; // or item.company
        (acc[key] ||= { logo: item.company_logo, company: item.company, roles: [] }).roles.push(item);
        return acc;
    }, {});
    const companies = Object.values(groupedByCompany);

    // sort roles by date descending according years.end clicked in the modal chips
    companies.forEach(company => {
        company.roles.sort((a, b) => (a.years.end < b.years.end ? 1 : -1));
    });


    return (

        <div
            className="modal-overlay"
            role="presentation"
            onClick={onClose} // click outside closes
        >
            <section
                className="modal-card"
                role='dialog'
                aria-modal="true"
                aria-label="Experiencia laboral"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <div className='modal-head'>
                    <img className="icon__exp"
                        src={`${import.meta.env.BASE_URL}images/experiences/moon2_icon.svg`} alt="" />

                    <label className="label__exp">Experiencia laboral</label>
                    <div className="close-button">
                        <div
                            className="close-button"
                            onClick={onClose}
                            aria-label="Close Modal"
                            type="button">

                            <img className="close_icon"
                                src={`${import.meta.env.BASE_URL}/images/experiences/close_icon.png`}
                                alt="Close"
                            />
                        </div>
                    </div>
                </div>

                <div className="Chips_modal">
                    {activeExp.map((year) => (
                        <div className="chip_modal" key={year.id}>
                            <label className="label_chip">{year.years.end}</label>
                        </div>
                    ))}

                </div>
                <section className="Content_modal">
                    <div className="group_content">
                        {companies.map((companyGroup) => {
                            const twoCols = companyGroup.roles.length > 1;
                            return (

                                <div key={companyGroup.company} className='item_content'>
                                    <img
                                        className="company_logo"
                                        src={companyGroup.logo}
                                        alt={`${companyGroup.company} logo`}
                                    />
                                    <div className={twoCols ? "roles roles--2cols" : "roles"}>
                                        {companyGroup.roles.map((role) => (
                                            <div key={role.id} className="item__item">
                                                <div className="date__label">{role.date}</div>
                                                <div className="position__label">{role.jobtitle}</div>
                                                <li className="description__label">
                                                    {role.description.split("\n").map((rawLine, i) => {
                                                        const line = rawLine.trimEnd();
                                                        const isBullet = /^\s*-\s+/.test(line); // markdown-like "- "
                                                        const text = line.replace(/^\s*-\s+/, "");

                                                        return (
                                                            <span
                                                                key={i}
                                                                className={isBullet ? "desc-line desc-line--bullet" : "desc-line"}
                                                            >
                                                                {text}
                                                                <br />
                                                            </span>
                                                        );
                                                    })}
                                                </li>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </section>
            </section>
        </div>
    );
}

Modal.propTypes = {
    activeExp: PropTypes.array.isRequired,
    Open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;