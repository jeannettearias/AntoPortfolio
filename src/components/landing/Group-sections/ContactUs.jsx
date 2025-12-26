
import "../../../styles/_groupContactUs.scss";
import propTypes from "prop-types";

function ContactUs({ contactData }) {

    return (
        <>
            <section id="GroupContactUs" className="contact-us-section">
                <div className='item-contacUs'>
                    <img className='Detail__item' />

                    <div className='info__item'>
                        <ul className='data__info'>
                            {contactData.map((info, index) => {
                                const key = info.phone ?? info.email ?? info.linkedin ?? `contact-${index}`;
                                return (
                                    <li key={key} className='content__item'>
                                        <div className='text__item'>{info.phone}</div>
                                        <div className='text__item'><a href={`mailto:${info.email}`}>{info.email}</a></div>
                                        <div className='text__item'>{' '}
                                            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
                                                {info.linkedin}
                                            </a></div>
                                    </li>
                                );
                            })}
                        </ul>
                        <img className='image__item' />
                    </div>

                </div>
            </section>
            <section className='Group-interactions'>

            </section>
            <div className='frame-17'></div>
        </>

    );
}

ContactUs.propTypes = {
    contactData: propTypes.array.isRequired,
};

export default ContactUs;