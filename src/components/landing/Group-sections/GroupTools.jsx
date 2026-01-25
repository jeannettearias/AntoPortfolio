import '../../../styles/_groupSections.scss';



function GroupTools() {

    return (
        <>
            <section className='Section-tools'>
                <div className="text-tools">
                    <div className="Badge-text">
                        <label className="label_badge">Competencias</label>
                    </div>
                    <div className="Content_text">
                        <label className="title-text">Las herramientas <br /> detrás de mis  <span className="span_title_text">diseños</span></label>
                    </div>
                </div>
                <div className="Group-info-tools">
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="figma-icon">Figma</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/VSCode_Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="visual-studio-code-icon">Visual Studio Code</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/AfterEffects_Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="after-effects-icon">After Effects</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/AdobePhotoshop_Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="adobe-photoshop-icon">Adobe Photoshop</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/AdobeIlustrator_Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="adobe-illustrator-icon">Adobe Illustrator</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/3DSMax_Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="3ds-max-icon">3DS Max</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/Spline_Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="spline-icon">Spline</label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GroupTools;