import '../../../styles/_groupExperience.scss';

function GroupExperience() {
    return (
        <section id="GroupExperience" className="experience-section">
            <div className='Content-exp'>
                <div className='Badge'>
                    <img className="badge__tag" src="" alt="" />
                    <label className='badge__label' >Sobre mí</label>
                </div>
                <p className="content-text">Mis <span className="green-text">Estudios y Experiencia</span></p>
            </div>
            <div className='group-exp-card'>
                <div className='card__1'>
                    <div className='head-exp'>
                        <img className="icon__exp" alt="" />
                        <label className='label__exp'>Educación</label>
                    </div>
                    <div className='divider'></div>
                </div>
                <div className='card__2'>
                    <div className='head-exp'></div>
                </div>
            </div>
        </section>
    );
}

export default GroupExperience;
