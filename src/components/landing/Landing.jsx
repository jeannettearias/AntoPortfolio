import React from 'react';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';
import heroData from '../../data/heroData.json';
import aboutMeData from '../../data/aboutMeData.json';
import skillsData from '../../data/skillsData.json';
import skillsChips from '../../data/skillsChips.json';
import Skills from './Skills';
import GroupHero from './Group-sections/GroupHero';
import GroupTools from './Group-sections/GroupTools';
import GroupExperience from './Group-sections/GroupExperience';
import GroupContactUs from './Group-sections/GroupContactUs';
import GroupTestimony from './Group-sections/GroupTestimony';


function Landing() {

    return (
        <>
            <section className='landing'>
                <Hero heroData={heroData} />
                <Bar aboutMeData={aboutMeData} />

                <Skills aboutMeData={aboutMeData} />
                <GroupHero skillsData={skillsData}
                    skillsChips={skillsChips} />

                <GroupTools />
                <GroupExperience />
                <GroupContactUs />
                <GroupTestimony />
            </section>
        </>
    );
}

export default Landing;

