import React from 'react';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';
import heroData from '../../data/heroData.json';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from '../landing/Skills';
import Experience from '../landing/Experience';
import Projects from '../landing/Projects';
import References from '../landing/References';
import ContactMe from '../landing/ContactMe';

function Landing() {
    const [data, setData] = useState(heroData);


    return (
        <>
            <Hero heroData={heroData} />
            <Bar />

            <section className='landing'>
                <AboutMe />
                <Skills />
                <Experience />
                <Projects />
                <References />
                <ContactMe />

            </section>

        </>
    );
}

export default Landing;