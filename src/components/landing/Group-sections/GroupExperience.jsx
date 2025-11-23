import { use, useState } from 'react';
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
                            <div key={education.id} className='education__item'>
                                <label className='date__label'>{education.Date}</label>
                                <label className='degree__label'>{education.Degree}</label>
                                <label className='institution__label'>{education.Institution}</label>
                            </div>
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
                            <div key={experience.id} className='experience__item'>
                                <label className='date__label'>{experience.date}</label>
                                <label className='position__label'>{experience.jobtitle}
                                    {experience.modality}
                                    {experience.company}</label>
                                <label className=''></label>
                                <label className='company__label'>{experience.description}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GroupExperience;
