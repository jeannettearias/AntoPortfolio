import '../../../styles/_groupProjects.scss';


function GroupProjects({ }) {
    return (
        <>
            <section className='Bar_contactUs'>
                <div className='Detail_contactUs'></div>

            </section>
            <section id="GroupProjects" className="projects-section">

                <section className='text-projects'>
                    <div className='info__text'>
                        <div className='badge'>
                            <img className='tag__badge' alt="" />
                            <label className='label__badge'>Sobre mí</label>
                        </div>
                        <div className='content__text'>
                            <label className='title__tag'>Algunos de mis <span className='title__span' >proyectos</span></label>
                            <div className='group__tag'></div>
                        </div>
                    </div>
                    <div className='btn__text'></div>
                </section>

                <section className='group-project-cards'>

                </section>

            </section>
        </>
    );
}

export default GroupProjects;
GroupProjects.propTypes = {

};
