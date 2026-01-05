
import "../../../styles/_groupContactUs.scss";
import PropTypes from "prop-types";
import { useState } from "react";

function ContactUs({ contactData, contactCountryData, contactForm }) {

    // Form state and input data handling
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        country: "",
        subject: "",
    });

    const handleinputChange = (ev) => {
        const { name, value } = ev.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    // Select country state
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleCountryChange = (ev) => {
        setSelectedCountry(ev.target.value);
    };

    return (

        <section id="GroupContactUs" className="contactUs-section">
            <section className='item-contacUs'>

                <div className='info__item'>
                    <img className='Detail__info' />
                    <ul className='data__info'>
                        {contactData && contactData.map((info, index) => {
                            const key = info.icon || info.phone || info.behance || info.linkedin || `contact-${index}`;
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
                        <div className="content_info">
                            <h3 className="title_content">Hablemos para el siguiente <span className="bold_title">proyecto</span></h3>
                        </div>
                    </div>
                    <label className="label_description">Recuerda que también me encuentro en los siguientes portales</label>

                </div>

                <div className="form_interactions">

                    <fieldset className="Textfield_intetactions">
                        <legend className="label_interactions">Nombre y Apellido</legend>
                        <input
                            type="text"
                            className="textfield_subtitle"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleinputChange}
                            maxLength={500}
                            required
                            placeholder="Escribe aquí." />
                    </fieldset>

                    <fieldset className="Textfield_intetactions">
                        <legend className="label_interactions">Correo Electrónico</legend>
                        <input
                            type="email"
                            className="textfield_subtitle"
                            name="email"
                            value={formData.email}
                            onChange={handleinputChange}
                            maxLength={100}
                            required
                            placeholder="Escribe aquí." />
                    </fieldset>

                    <select
                        className="Select_interactions"
                        name="country"
                        value={formData.country}
                        onChange={handleCountryChange}
                    >
                        <option value="">Selecciona un país</option>
                        {contactCountryData && contactCountryData.map((country, index) => (
                            <option
                                key={country.id || country.countryName || `country-${index}`}
                                value={country.countryName}
                                className="subtitle_select"
                            >
                                {country.countryName}
                            </option>
                        ))}
                    </select>
                    <fieldset className="TextArea_Default">
                        <legend className="label_interactions">Tu mensaje</legend>
                        <input
                            className="textArea_subtitle"
                            name="subject"
                            value={formData.subject}
                            onChange={handleinputChange}
                            placeholder="Escribe aquí."
                            rows={5}
                        />
                    </fieldset>

                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </div>
            </section>
            <div className='frame-17'>
                <img alt="" className="frame-detail" />
            </div>
        </section >

    );
}

ContactUs.propTypes = {
    contactData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            phone: PropTypes.string,
            behance: PropTypes.string,
            linkedin: PropTypes.string,
            icon: PropTypes.string,
            iconPhone: PropTypes.string,
            iconBehance: PropTypes.string,
            iconLinkedin: PropTypes.string,
        })
    ),
    contactCountryData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            countryName: PropTypes.string.isRequired,
        })
    ),
    contactForm: PropTypes.array,
};

ContactUs.defaultProps = {
    contactData: [],
    contactCountryData: [],
    contactForm: [],
};

export default ContactUs;