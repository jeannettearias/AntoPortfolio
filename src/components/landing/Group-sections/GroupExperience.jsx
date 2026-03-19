
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/_groupExperience.scss';
import Description from "./Description";
import Modal from '../Modal';

function GroupExperience({ expData = [], studyData = [] }) {
    // state to experience from JSON data
    const activeExp = useMemo(() => expData.filter((experience) => experience.active === true),
        [expData]);

    // state to study from JSON data
    const activeStudy = useMemo(() => studyData.filter(education => education.active === true),
        [studyData]);

    // ordered list by date descending
    const sortedStudy = [...activeStudy].sort((a, b) => (a.date < b.date ? 1 : -1));
    const sortedExp = [...activeExp].sort((a, b) => (a.date < b.date ? 1 : -1));

    // Open experience button
    const [openExp, setOpenExp] = useState(false);

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
                    <div className="divider_exp">
                        <img
                            src='images/experiences/Divider.svg' />
                    </div>
                    <div>
                        {activeStudy.map((education) => (
                            <div key={education.id} className="education__item">
                                <div
                                    className="date__label">
                                    {education.date} </div>
                                <div
                                    className="degree__label">
                                    {education.degree}</div>
                                <div
                                    className="institution__label">
                                    {education.institution}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="exp__card">
                    <div className='head'>
                        <div className="head-exp">
                            <img
                                className="icon__exp"
                                src="images/experiences/moon2_icon.svg"
                                alt="" />
                            <label className="label__exp">Experiencia laboral</label>
                        </div>
                        <button
                            className='button-head' onClick={() => setOpenExp(true)}>Ver Experiencia
                        </button>

                        <Modal
                            Open={openExp}
                            activeExp={activeExp}
                            onClose={() => setOpenExp(false)}
                        />
                    </div>

                    <div className="divider_exp">
                        <img src="images/experiences/Divider.svg" alt="" />
                    </div>
                    <div className="exp__list">
                        {activeExp.map((experience) => (
                            <div key={experience.id} className="experience__item">
                                <div className="date__label">{experience.date}</div>
                                <div className="position__label">{experience.jobtitle}</div>
                                <div className="description__label">
                                    <Description text={experience.description} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GroupExperience;

GroupExperience.propTypes = {
    expData: PropTypes.array.isRequired,
    studyData: PropTypes.array.isRequired,
};