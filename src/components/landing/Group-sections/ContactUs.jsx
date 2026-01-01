
import "../../../styles/_groupContactUs.scss";
import propTypes from "prop-types";

function ContactUs({ contactData, contactCountryData, contactForm }) {


    return (

        <section id="GroupContactUs" className="contactUs-section">
            <section className='item-contacUs'>

                <div className='info__item'>
                    <img className='Detail__info' />
                    <ul className='data__info'>
                        {contactData.map((info, index) => {
                            const key = info.icon ?? info.phone ?? info.behance ?? info.linkedin ?? `contact-${index}`;
                            return (
                                <li key={key} className='content__data'>
                                    <img src={`${import.meta.env.BASE_URL}${info.icon}`} alt="" className="icon_contactUs" />
                                    <div className='text__data'>{info.phone}</div>
                                    <img src={`${import.meta.env.BASE_URL}${info.icon}`} alt="" className="icon_contactUs" />
                                    <div className='text__data'><a href={info.behance}>Mi Behance</a></div>
                                    <img src={`${import.meta.env.BASE_URL}${info.icon}`} alt="" className="icon_contactUs" />
                                    <div className='text__data'>{' '}
                                        <a href={info.linkedin} target="_blank" rel="noopener noreferrer">Mi LinkedIn</a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <img className='image__info' />
                </div>
            </section>

            <section className='Group-interactions'>
                <div className="text_interactions">
                    <div className="info_text">
                        <div className="badge_info">
                            <label className="label_badge">Sobre mi</label>
                        </div>
                        <div className="content_info"></div>
                    </div>
                    <p className="label_text">Recuerda que también me encuentro en los siguientes portales</p>
                </div>
                <div className="Textfield_interactions"></div>
                <div className="Select_interactions"></div>
            </section>
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