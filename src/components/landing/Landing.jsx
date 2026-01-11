import PropTypes from 'prop-types';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';

import Skills from './Skills';
import GroupTools from './Group-sections/GroupTools';
import GroupExperience from './Group-sections/GroupExperience';
import GroupProjectsContactUs from './Group-sections/GroupProjectsContactUs';
import GroupTestimony from './Group-sections/GroupTestimony';


function Landing({ heroData, SkillsData, ExpData, StudyData, activeProjects, contactData, contactCountryData, contactForm }) {

    return (
        <>
            <section className='landing'>
                <Hero heroData={heroData} />
                <Bar SkillsData={SkillsData} />

                <Skills SkillsData={SkillsData} />

                <section className='group-sections'>
                    <GroupTools />
                    <GroupExperience ExpData={ExpData}
                        StudyData={StudyData} />

                    <GroupProjectsContactUs
                        projectsData={activeProjects}  // Pass activeProjects as projectsData

                        contactData={contactData}
                        contactCountryData={contactCountryData}
                        contactForm={contactForm} />

                    <GroupTestimony />
                </section>
            </section>
        </>
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

