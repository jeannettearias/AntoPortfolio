import '../../../styles/_groupSections.scss';

function GroupExperience() {
    return (
        <section id="GroupExperience" className="experience-section">
            <div className='Content-exp'>
                <div className="Badge">
                    <label className='Badge-text'>Sobre mí</label>
                </div>

                <p className="content-text">Mis <span className="green-text">Estudios y Experiencia</span></p>

            </div>
            <div className='group-exp-card'>
                <div className='card__1'>
                    <div className='head-exp'>
                        <img className="icon__exp" src="" alt="" />
                        <label className='label__exp'></label>
                    </div>
                </div>
                <div className='card__2'>
                    <div className='head-exp'></div>
                </div>
            </div>
        </section>
    );
}

export default GroupExperience;
