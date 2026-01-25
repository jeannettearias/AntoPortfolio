import '../../../styles/_groupSections.scss';
import { useState } from 'react';


function GroupTools({ }) {
    const [showMoreTools, setShowMoreTools] = useState(false);

    // Sample list of tools with their icons
    const toolList = [
        { id: 1, icon: "images/icons/figma-Icon.svg", name: "Figma" },
        { id: 2, icon: "images/icons/VSCode_Icon.svg", name: "Visual Studio Code" },
        { id: 3, icon: "images/icons/AfterEffects_Icon.svg", name: "After Effects" },
        { id: 4, icon: "images/icons/AdobePhotoshop_Icon.svg", name: "Adobe Photoshop" },
        { id: 5, icon: "images/icons/AdobeIlustrator_Icon.svg", name: "Adobe Illustrator" },
        { id: 6, icon: "images/icons/3DSMax_Icon.svg", name: "3DS Max" },
        { id: 7, icon: "images/icons/Spline_Icon.svg", name: "Spline" },
    ];

    // Limit the initial number of items displayed
    const initialDisplayCount = 6;
    const displayedTools = showMoreTools ? toolList : toolList.slice(0, initialDisplayCount);


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
                    {displayedTools.map((tool) => (
                        <div key={tool.id} className="item-label">
                            {/* The icon */}
                            <img src={`${import.meta.env.BASE_URL}${tool.icon}`} alt={`${tool.name} Icon`} />
                            <label className="label-item">{tool.name}</label>
                        </div>
                    ))}
                </div>
                <div className="button_tools">
                    <div
                        className="load_more_button"
                        onClick={() => setShowMoreTools(!showMoreTools)}
                    >
                        {showMoreTools ? "Cargar menos" : "Cargar más"}

                    </div>
                </div>
            </section>
        </>
    );
}

export default GroupTools;