import { use, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/_groupExperience.scss';

function GroupExperience({ ExpData, StudyData }) {

    const [activeStudy, setActiveStudy] = useState(StudyData.filter(education => education.active === true));
    const [activeExp, setActiveExp] = useState(ExpData.filter(experience => experience.active === true));

    return (

        <section id="GroupExperience" className="experience-section">

            <div className='Content-exp'>
                <div className='Badge'>
                    <img className="badge__tag" src="" alt="" />
                    <label className='badge__label'>Sobre mí</label>
                </div>
                <p className="content-text">Mis <span className="green-text">Estudios y Experiencia</span></p>
            </div>
            <div className='group-card'>
                <div className='educ__card'>
                    <div className='head-educ'>
                        <img className="icon__educ" alt="" />
                        <label className='label__educ'>Educación</label>
                    </div>
                    <div className='divider'></div>
                    <div className='items__educ'>
                        {activeStudy.map(education => (
                            <ul key={education.id} className='education__item'>
                                <li className='date__label'>{education.Date}</li>
                                <li className='degree__label'>{education.Degree}</li>
                                <li className='institution__label'>{education.Institution}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className='exp__card'>
                    <div className='head-exp'>
                        <img className="icon__exp" alt="" />
                        <label className='label__exp'>Experiencia laboral</label>
                    </div>
                    <div className='divider'></div>
                    <div className='items__exp'>
                        {activeExp.map(experience => (
                            <ul key={experience.id} className='experience__item'>
                                <li className='date__label'>{experience.date}</li>
                                <li className='position__label'>{experience.jobtitle} -
                                    {experience.modality} -
                                    {experience.company}</li>
                                <li className='company__label'>{experience.description}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

        </section>

    );
}

export default GroupExperience;

GroupExperience.popTypes = {
    ExpData: PropTypes.array.isRequired,
    StudyData: PropTypes.array.isRequired,
};