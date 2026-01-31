import '../../../styles/_groupProjects.scss';
import PropTypes from 'prop-types';


function GroupProjects({ projectsData }) {

    return (
        <>
            <section id="GroupProjects" className="projects-section">

                <section className='text-projects'>
                    <div className='info__text'>
                        <div className='badge'>
                            <img className='tag__badge' alt="" />
                            <label className='label__badge'>Proyectos</label>
                        </div>
                        <div className='content__text'>
                            <label className='title__tag'>Algunos de mis <span className='title__span'>proyectos</span></label>
                            <div className='group__tag'></div>
                        </div>
                    </div>
                    <div className='btn__text'>
                        <div className='button__text'>Ver todos los proyectos</div>
                    </div>
                </section>

                <section className='Group-cards'>
                    {projectsData.map(project => (
                        <div key={project.Cardid} className='Card-project'>
                            <div className='Image-cards'>
                                <img src={`${import.meta.env.BASE_URL}${project.image}`}
                                    className="image-card" alt="" />
                            </div>

                            <div className='Content-card'>
                                <label className='card-title'>{project.title}</label>
                                <label className='card-description'>{project.description}</label>
                            </div>
                        </div>
                    ))}
                </section>

            </section>
        </>
    );
}

GroupProjects.propTypes = {
    projectsData: PropTypes.array.isRequired,

};

export default GroupProjects;

