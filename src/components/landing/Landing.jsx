import PropTypes from 'prop-types';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import Footer from '../layout/Footer';
import '../../styles/_landing.scss';

import Services from './Services';
import GroupSections from './Group-sections/GroupSections';
import AboutMe from './Group-sections/AboutMe';

function Landing({ heroData, services, activeExp, activeStudy, activeProjects, activeTestimony, activeContact }) {

    return (
        <section className='landing'>
            <Hero heroData={heroData} />
            <Bar services={services} />
            <Services services={services} />
            <AboutMe />

            <GroupSections
                activeExp={activeExp}
                activeStudy={activeStudy}

                activeProjects={activeProjects}
                activeTestimony={activeTestimony}

                servicesData={services}
            />

            <Footer
                activeContact={activeContact} />

        </section>
    );
}

Landing.propTypes = {
    heroData: PropTypes.array.isRequired,
    services: PropTypes.array.isRequired,
    activeExp: PropTypes.array.isRequired,
    activeStudy: PropTypes.array.isRequired,
    activeProjects: PropTypes.array.isRequired,
    activeTestimony: PropTypes.array.isRequired,
    activeContact: PropTypes.array.isRequired,
};

export default Landing;

