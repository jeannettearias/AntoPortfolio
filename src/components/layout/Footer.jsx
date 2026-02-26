import '../../styles/_footer.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';


function Footer({ contactData }) {
    const [activeContact, setActiveContact] = useState(contactData ? contactData.filter(item => item.active === true) : []);


    return (
        <section className="section-footer">
            <div className="footer">
                <div className="card-testimony">

                    <div className="head-button">
                        <label className="footer_label">Vamos a <span className='footer_italic_label'>conectar</span></label>
                        <div className="logo">
                            <div className='ISO_header_logo'>
                                <img
                                    className='header_logo'
                                    src="images/header/Anto_logo.svg" />
                            </div>
                        </div>
                    </div>
                    <img className="divider"
                        src="images/Divider.png" alt="" />


                    <div className='content_footer'>
                        <div className='item_footer'>
                            <div className='item_item_footer'>
                                <img className='item_icon' src='images/footer/Anto_item.png' />
                                <div className='content_title'>
                                    <label className='name_title'>Antonia Mendoza</label>
                                </div>
                            </div>
                            <label className='item_item_description'>
                                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </label>
                        </div>

                        <div className='info_footer'>
                            <div className='navigation-contact'>

                                <div className='Navigation_navigation_contact'>
                                    <div className='Item_navigation'>
                                        <label className='navigation_label'>Navegación</label>
                                    </div>
                                    <div className='navigation_navigation'>
                                        <div className='trackA'>
                                            <label className='home'>Home</label>
                                            <label className='home'>Home</label>
                                            <label className='home'>Home</label>
                                        </div>
                                        <div className='trackB'>
                                            <label className='home'>Home</label>
                                            <label className='home'>Home</label>
                                            <label className='home'>Home</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='Navigation_navigation_contact'>
                                    {activeContact.map((contact, index) => (
                                        <div key={index} >
                                            <div className='Item_navigation'>
                                                <label className='contact_label'>Contacto</label>
                                            </div>
                                            <div className='navigation_contact'>
                                                <label className='navigation_contact_item'>{contact.phone}</label>
                                                <label className='navigation_contact_item'>{contact.email}</label>
                                                <label className='navigation_contact_item'>{contact.city}, {contact.country}</label>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='group-icons'>
                            <img className='footer_icon' src="images/footer/footer_linkedin_icon.png" alt="" />
                            <img className='footer_icon' src="images/footer/footer_behance_icon.png" alt="" />

                        </div>
                    </div>
                </div>
                <div className="bar-footer-info">
                    <div className='group-cards'>
                        <span className='label_group-cards'>Diseñado por Antonia Mendoza. Desarrollado por Jean</span>
                        <span className='label_group-cards'>Términos y condiciones | Políticas de privacidad</span>
                    </div>
                </div>
            </div>

        </section>
    );

}

Footer.propTypes = {
    activeContact: PropTypes.array
};

export default Footer;