import PropTypes from 'prop-types';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';

import AboutMe from './AboutMe';
import GroupSections from './Group-sections/GroupSections';
import Margin from './Margin';

function Landing({ heroData, aboutMe, activeExp, activeStudy, activeProjects, activeTestimony }) {

    return (
        <>

            <section className='landing'>
                <Hero heroData={heroData} />
                <Bar aboutMe={aboutMe} />
                <AboutMe aboutMe={aboutMe} />
                <section className='margin'>
                    <Margin />
                </section>
                <GroupSections
                    activeExp={activeExp}
                    activeStudy={activeStudy}

                    activeProjects={activeProjects}
                    activeTestimony={activeTestimony}
                />

            </section>
        </>
    );
}

Landing.propTypes = {
    heroData: PropTypes.array.isRequired,
    aboutMe: PropTypes.array.isRequired,
    activeExp: PropTypes.array.isRequired,
    activeStudy: PropTypes.array.isRequired,
    activeProjects: PropTypes.array.isRequired,
    activeTestimony: PropTypes.array.isRequired,
};

export default Landing;

