import '../../styles/_skills.scss';
import { useState } from 'react';


function Skills({ skillsData }) {
    const [activeSkills, setActiveSkills] = useState(skillsData.filter(skill => skill.status === 'active'));

    return (
        <>
            <section id="Skills" className="skills-section">
                <section className="skills__hero">
                    <div className='Detail2__info'></div>
                    <div className='vector'></div>
                    <div className='Detail1_hero'></div>
                    <div className='Detail2_hero'></div>
                    <div className="info__hero">
                        <div className='Data__hero'>
                            <div className='Content__data'>
                                <h3 className='content__title'>Barcelona</h3>
                                <label className='content__label'>España</label>
                            </div>
                            <div className='Content__data'>
                                <h3 className='content__title'>+64</h3>
                                <label className='content__label'>Clientes satisfechos</label>
                            </div>
                            <div className='Content__data'>
                                <h3 className='content__title'>+30</h3>
                                <label className='content__label'>Proyectos completados</label>
                            </div>
                        </div>
                        <div className='Detail1__info'>
                            <div className="rectangle_3_info"></div>
                            <div className="rectangle_4_info"></div>
                        </div>

                    </div>
                    <div className='Content_tag'>
                        <div className='text__tag'>
                            <div className='bag__skills'>
                                <img className='bag__img' alt="" />
                                <label className='bag__label'>Sobre mí</label>
                            </div>
                            <div className='Content__skills'>
                                <h3 className='title__content'>¿Quién es <span className='title__antoniamendoza'>Antonia Mendoza?</span></h3>
                                <p className='label__content'>Diseñadora Industrial especializada en UX/UI y metodologías ágiles, con más de 4 años de experiencia en investigación, diseño y gestión de sistemas. Combino accesibilidad, diseño atómico y métricas para crear soluciones que equilibran usuario y negocio. Manejo Figma, After Effects y modelado 3D, aplicando enfoques como Scrum, Kanban y Design Thinking.</p>
                            </div>
                        </div>

                        <div className="Group-tags">
                            <ul className='group-items'>
                                {activeSkills.map(skill => (
                                    <li key={skill.id} className='item-skill'>
                                        <h3 className='label__tag'>{skill.title}</h3>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className='Vector1_skills'>
                            <img src="/images/Vector 1.png" alt="" />
                        </div> */}
                    </div>

                </section>

            </section>
        </>
    );
}

export default Skills;

// --- IGNORE ---
// hero
/// -- vector
/// -- detail 1
/// -- detail 2
/// -- info
//// ---- detail 1
//// ---- detail 2
//// ---- data sections
////// -------- title
////// -------- label
/// -- Content+tag
// Vector 1


// --- IGNORE ---