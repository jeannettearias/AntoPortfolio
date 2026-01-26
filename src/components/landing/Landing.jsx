import PropTypes from 'prop-types';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';

import Skills from './Skills';
import GroupSections from './Group-sections/GroupSections';

function Landing({ heroData, SkillsData, activeExp, activeStudy, activeProjects }) {

    return (
        <section className='landing'>
            <Hero heroData={heroData} />
            <Bar SkillsData={SkillsData} />
            <Skills SkillsData={SkillsData} />

            <GroupSections
                activeExp={activeExp}
                activeStudy={activeStudy}

                activeProjects={activeProjects} />

            <section className='section-footer'>
            </section>
        </section>
    );
}

Landing.propTypes = {
    heroData: PropTypes.array.isRequired,
    SkillsData: PropTypes.array.isRequired,
    activeExp: PropTypes.array.isRequired,
    activeStudy: PropTypes.array.isRequired,
    activeProjects: PropTypes.array.isRequired,
};

export default Landing;

