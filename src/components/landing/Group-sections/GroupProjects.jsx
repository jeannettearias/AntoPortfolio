import '../../../styles/_groupProjects.scss';
import { useState } from 'react';
import propTypes from 'prop-types';


function GroupProjects({ projectsData }) {
    const [activeProjects, setActiveProjects] = useState(projectsData.filter(project => project.active === true));

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
                            <label className='title__tag'>Algunos de mis<span className='title__span' >proyectos</span></label>
                            <div className='group__tag'></div>
                        </div>
                    </div>
                    <div className='btn__text'>
                        <div className='button__text'>Ver todos los proyectos</div>
                    </div>
                </section>

                <section className='Group-cards'>
                    {activeProjects.map(project => (
                        <div key={project.Cardid} className='Card-project'>
                            <div className='Image-cards'>
                                <img src={`${import.meta.env.BASE_URL}${project.image}`} className="image-card" alt="" />

                                <ul className=' Group-pills'>
                                    {project.pills.map((pill, index) => (
                                        <li key={index} className='pill'>{pill}</li>
                                    ))}
                                </ul>

                            </div>
                            <div className='Content-card'>
                                <h3 className='card-title'>{project.title}</h3>
                                <p className='card-description'>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </section>

            </section>
        </>
    );
}

GroupProjects.propTypes = {
    projectsData: propTypes.array.isRequired,

};

export default GroupProjects;

