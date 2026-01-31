import "../../../styles/_ContactUS.scss";

function ContactUS() {
    return (

        <section className="section-contact-us">
            <div className="image_contact_us">
                <img
                    className="Saly-16"
                    src="images/contactUs/Saly-16.png" alt="" />
            </div>
            <div className="group-interactions">
                <div className="Text_interaction">
                    <div className="info_text">
                        <div className="Badge_contact">
                            <label className="text_badge">Contacto</label>
                        </div>
                        <div className="content_info">
                            <label className="text_content">Hablemos para el siguiente <span className="content_info_color">proyecto</span></label>
                        </div>
                    </div>
                </div>
                <div className="Data_interaction">
                    <div className="content_data">
                        <div className="icon__data">
                            <img
                                className="icon_img"
                                src="" alt="" />
                        </div>
                        <div className="text_data">
                            <label
                                className="label_text"
                            >Correo electrónico</label>
                            <label
                                className="label_text_data"
                            >antoniamendozaa@icloud.com</label>
                        </div>
                    </div>
                    <div className="content_data">
                        <div className="icon__data">
                            <img
                                className="icon_img"
                                src="" alt="" />
                        </div>
                        <div className="text_data">
                            <label
                                className="label_text"
                            >Linkedin</label>
                            <label
                                className="label_text_data"
                            >Antonia Mendoza</label>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default ContactUS;