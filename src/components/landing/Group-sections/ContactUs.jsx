
import "../../../styles/_groupContactUs.scss";
import propTypes from "prop-types";

function ContactUs({ contactData }) {

    return (

        <section id="GroupContactUs" className="contactUs-section">
            <div className='item-contacUs'>

                <div className='info__item'>
                    <img className='Detail__info' />
                    <ul className='data__info'>
                        {contactData.map((info, index) => {
                            const key = info.phone ?? info.email ?? info.linkedin ?? `contact-${index}`;
                            return (
                                <li key={key} className='content__data'>
                                    <div className='text__data'>{info.phone}</div>
                                    <div className='text__data'><a href={info.behance}>Mi Behance</a></div>
                                    <div className='text__data'>{' '}
                                        <a href={info.linkedin} target="_blank" rel="noopener noreferrer">Mi LinkedIn</a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <img className='image__info' />
                </div>
            </div>

            <div className='Group-interactions'>

            </div>

            <div className='frame-17'>
                <img alt="" className="frame-detail" />
            </div>
        </section>

    );
}

ContactUs.propTypes = {
    contactData: propTypes.array.isRequired,
};

export default ContactUs;