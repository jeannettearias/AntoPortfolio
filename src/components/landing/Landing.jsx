import React from 'react';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';
import heroData from '../../data/heroData.json';
import SkillsData from '../../data/SkillsData.json';
import GroupHeroData from '../../data/GroupHeroData.json';
import GroupHeroChips from '../../data/GroupHeroChips.json';
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
                <Bar SkillsData={SkillsData} />

                <Skills SkillsData={SkillsData} />
                <GroupHero GroupHeroData={GroupHeroData}
                    GroupHeroChips={GroupHeroChips} />

                <GroupTools />
                <GroupExperience />
                <GroupContactUs />
                <GroupTestimony />
            </section>
        </>
    );
}

export default Landing;

