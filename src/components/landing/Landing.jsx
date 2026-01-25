import PropTypes from 'prop-types';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';

import Skills from './Skills';
import GroupSections from './Group-sections/GroupSections';


function Landing({ heroData, SkillsData, ExpData, StudyData, activeProjects, contactData, contactCountryData, contactForm }) {

    return (
        <section className='landing'>
            <Hero heroData={heroData} />
            <Bar SkillsData={SkillsData} />

            <Skills SkillsData={SkillsData} />

            <GroupSections
                ExpData={ExpData}
                StudyData={StudyData}
                activeProjects={activeProjects}
                contactData={contactData}
                contactCountryData={contactCountryData}
                contactForm={contactForm} />

            <section className='section-footer'>

            </section>
        </section>
    );
}

Landing.propTypes = {
    heroData: PropTypes.array.isRequired,
    SkillsData: PropTypes.array.isRequired,
    ExpData: PropTypes.array.isRequired,
    StudyData: PropTypes.array.isRequired,
    activeProjects: PropTypes.array.isRequired,
    contactData: PropTypes.array.isRequired,
    contactCountryData: PropTypes.array,
    contactForm: PropTypes.array,
};

export default Landing;

