import '../../../styles/_groupSections.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function GroupHero({ GroupHeroData, GroupHeroChips }) {
    const [activeSkills, setActiveSkills] = useState(GroupHeroData.filter(skill => skill.active === true));
    const [chipsSkills, setChipsSkills] = useState(GroupHeroChips.filter(chip => chip.active === true));

    return (
        <>
            <section id="GroupHero" className="skills-section">
                <section className="skills__hero">
                    <div className='Detail2__info'></div>
                    <div className='vector'></div>
                    <div className='Detail1_hero'></div>
                    <div className='Detail2_hero'></div>
                    <div className="info__hero">
                        <div className='Data__hero'>
                            {activeSkills.map(skill => (
                                <div key={skill.id} className='Content__data'>
                                    <h3 className='content__title'>{skill.title}</h3>
                                    <label className='content__label'>{skill.description}</label>
                                </div>
                            ))}
                        </div>
                        <div className='Detail1__info'>
                            <div className="rectangle_3_info"></div>
                            <div className="rectangle_4_info"></div>
                        </div>
                        <div className='Vector_1'>
                            <img src="/images/Vector_1.png" alt="" />
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
                            <div className='group-items'>
                                {chipsSkills.map(chips => (
                                    <div key={chips.id} className='Tag'>
                                        <label className='label__tag'>{chips.title}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

            </section >
        </>
    );
}

export default GroupHero;

GroupHero.propTypes = {
    GroupHeroData: PropTypes.array.isRequired,
    GroupHeroChips: PropTypes.array.isRequired
};