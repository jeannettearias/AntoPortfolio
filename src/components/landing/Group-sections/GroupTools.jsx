import '../../../styles/_groupSections.scss';
import React from 'react';


function GroupTools() {
    return (
        <>
            <section className='Section-tools'>
                <div className="text-tools">
                    <div className="Badge-text">
                        <div className="Tag-badge"></div>
                        <label className="label-badge">Sobre mi</label>
                    </div>
                    <div className="Content-text">
                        <h1 className="title-text">Las herramientas detrás de mis  <span className="span_title_text">diseños</span></h1>
                    </div>
                    <div className="Group-tag"></div>
                </div>
                <div className="Group-info-tools">
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="figma-icon">Figma</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="after-effects-icon">After Effects</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="visual-studio-code-icon">Visual Studio Code</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="adobe-photoshop-icon">Adobe Photoshop</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="adobe-illustrator-icon">Adobe Illustrator</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="3ds-max-icon">3DS Max</label>
                    </div>
                    <div className="item-label">
                        <img src={`${import.meta.env.BASE_URL}images/icons/figma-Icon.svg`} alt="Bullet" />
                        <label className="label-item" htmlFor="spline-icon">Spline</label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GroupTools;