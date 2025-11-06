import '../../styles/_skills.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


function Skills({ skillsData, skillsChips }) {
    const [activeSkills, setActiveSkills] = useState(skillsData.filter(skill => skill.active === true));
    const [chipsSkills, setChipsSkills] = useState(skillsChips.filter(chip => chip.active === true));

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
                            <ul className='Content__data'>
                                {activeSkills.map(skill => (
                                    <li key={skill.id} >
                                        <p className='content__title'>{skill.title}</p>
                                        <p className='content__label'>{skill.description}</p>
                                    </li>
                                ))}
                            </ul>
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
                                {chipsSkills.map(chips => (
                                    <li key={chips.id} className='item-skill'>
                                        <h3 className='label__tag'>{chips.title}</h3>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </section >
        </>
    );
}

export default Skills;

Skills.propTypes = {
    skillsData: PropTypes.array.isRequired,
    skillsChips: PropTypes.array.isRequired
};