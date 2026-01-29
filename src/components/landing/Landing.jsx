import PropTypes from 'prop-types';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';

import Skills from './Skills';
import GroupSections from './Group-sections/GroupSections';
import Margin from './Margin';

function Landing({ heroData, SkillsData, activeExp, activeStudy, activeProjects }) {

    return (
        <>

            <section className='landing'>
                <Hero heroData={heroData} />
                <Bar SkillsData={SkillsData} />
                <Skills SkillsData={SkillsData} />
                <section className='margin'>
                    <Margin />
                </section>
                <GroupSections
                    activeExp={activeExp}
                    activeStudy={activeStudy}

                    activeProjects={activeProjects} />

            </section>
        </>
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

