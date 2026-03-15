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
                        src="images/experiences/moon2_icon.svg" alt="" />


                    <label className="label__exp">Experiencia laboral</label>
                    <div className="close-button">
                        <button className="close-button"
                            onClick={onClose}
                            aria-label="Close Modal"
                            type="button"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/experiences/close_icon.png`}
                                alt="Close"
                            />
                        </button>
                    </div>
                </div>

                <div className="Chips_modal">
                    {activeExp.map((year) => (
                        <div className="chip_modal" key={year.id}>
                        </div>
                    ))}
                    <div className="Content_modal">
                        {activeExp.map((content) => (
                            <div key={content.id} className='group_content'>
                                <div className="company_logo">{content.company_logo}</div>
                                <ul
                                    className="experience__item">
                                    <li className="date__label">{content.date}</li>
                                    <li className="position__label">{content.jobtitle}</li>
                                    <li className="description__label">{content.description}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

Modal.propTypes = {
    activeExp: PropTypes.array.isRequired,
    Open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
}

export default Modal;