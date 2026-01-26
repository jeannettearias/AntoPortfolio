
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/_groupExperience.scss';

function GroupExperience({ ExpData, StudyData }) {
    // state to experience from JSON data
    const [activeExp, setActiveExp] = useState(
        ExpData ? ExpData.filter((experience) => experience.active === true) : []
    );
    // state to study from JSON data
    const [activeStudy, setActiveStudy] = useState(
        StudyData ? StudyData.filter(education => education.active === true) : []);
    return (
        <section id="GroupExperience" className="experience-section">
            <div className='Content-exp'>
                <div className='Badge'>
                    <label className='badge__label'>Background</label>
                </div>
                <label className="content-text">Mis <span className="color-text">estudios y experiencia</span></label>
            </div>
            <div className="group-card">
                {/* Education Card */}
                <div className="educ__card">
                    <div className="head-educ">
                        <img className="icon__educ" alt="" />
                        <label className="label__educ">Educación</label>
                    </div>
                    <div className="divider"></div>
                    <div className="items__educ">
                        {activeStudy.map((education) => (
                            <ul key={education.id} className="education__item">
                                <li className="date__label">{education.date}</li>
                                <li className="degree__label">{education.degree}</li>
                                <li className="institution__label">
                                    {education.institution}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="exp__card">
                    <div className="head-exp">
                        <img className="icon__exp" alt="" />
                        <label className="label__exp">Experiencia laboral</label>
                    </div>
                    <div className="divider"></div>
                    <div className="items__exp">
                        {activeExp.map((experience, idx) => (
                            <ul key={experience.id} className="experience__item">
                                <li className="date__label">{experience.date}</li>
                                <li className="position__label">{experience.jobtitle} &nbsp;-&nbsp;
                                    {experience.modality} &nbsp;-&nbsp;
                                    {experience.company}</li>
                                <li className="description__label">{experience.description}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GroupExperience;

GroupExperience.propTypes = {
    ExpData: PropTypes.array.isRequired,
    StudyData: PropTypes.array.isRequired,
};