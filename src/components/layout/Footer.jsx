import '../../styles/_footer.scss';

function Footer() {
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
                        <div className='item_footer'></div>
                        <div className='info_footer'></div>
                        <div className='group_icon_footer'></div>
                    </div>
                </div>
                <div className="bar-info">

                </div>
            </div>

        </section>
    );

}


export default Footer;