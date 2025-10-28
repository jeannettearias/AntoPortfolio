import React from 'react';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';
import heroData from '../../data/heroData.json';
import aboutMeData from '../../data/aboutMeData.json';
import skillsData from '../../data/skillsData.json';
import AboutMe from './AboutMe';
import Skills from '../landing/Skills';
import Experience from '../landing/Experience';
import Projects from '../landing/Projects';
import References from '../landing/References';
import ContactMe from '../landing/ContactMe';


function Landing() {

    return (
        <>
            <section className='landing'>
                <Hero heroData={heroData} />
                <Bar />

                <AboutMe aboutMeData={aboutMeData} />
                <Skills skillsData={skillsData} />
                <Experience />
                <Projects />
                <References />
                <ContactMe />
            </section>
        </>
    );
}

export default Landing;