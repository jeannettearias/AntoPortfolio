
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/_groupExperience.scss';

function GroupExperience({ ExpData, StudyData }) {

    // state to experience from JSON data
    const [activeExp, setActiveExp] = useState(
        ExpData ? ExpData.filter((experience) => experience.active === true) : []);

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

                <div className="educ__card">

                    <div className="head-educ">
                        <img
                            className="icon__educ"
                            src='images/experiences/moon_icon.svg'
                            alt="" />
                        <label className="label__educ">Educación</label>
                    </div>
                    <div className="divider"></div>

                    {activeStudy.map((education) => (
                        <div key={education.id} className="education__item">
                            <div className="date__label">{education.date}</div>
                            <div className="degree__label">{education.degree}</div>
                            <div className="institution__label">
                                {education.institution}
                            </div>
                        </div>
                    ))}

                </div>
                <div className="exp__card">
                    <div className="head-exp">
                        <img
                            className="icon__exp"
                            src="images/experiences/moon2_icon.svg"
                            alt="" />
                        <label className="label__exp">Experiencia laboral</label>
                    </div>
                    <div className="divider"></div>
                    {activeExp.map((experience, idx) => (
                        <div key={experience.id} className="experience__item">
                            <div className="date__label">{experience.date}</div>
                            <div className="position__label">
                                {experience.jobtitle}</div>
                            <div className="description__label">{experience.description}</div>
                        </div>
                    ))}
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