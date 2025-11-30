import React from 'react';
import Hero from '../landing/Hero';
import Bar from '../landing/Bar';
import '../../styles/_landing.scss';
import propTypes from 'prop-types';

import heroData from '../../data/heroData.json';
import SkillsData from '../../data/SkillsData.json';
import GroupHeroData from '../../data/GroupHeroData.json';
import GroupHeroChips from '../../data/GroupHeroChips.json';
import ExpData from '../../data/GroupExp.json';
import StudyData from '../../data/GroupStudy.json';
import ProjecsData from '../../data/Projects.json';

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

                <section className='group-sections'>
                    <GroupHero GroupHeroData={GroupHeroData}
                        GroupHeroChips={GroupHeroChips} />

                    <GroupTools />
                    <GroupExperience ExpData={ExpData}
                        StudyData={StudyData} />

                    <GroupContactUs
                        projectsData={ProjecsData} />

                    <GroupTestimony />
                </section>
            </section>
        </>
    );
}

Landing.propTypes = {
    heroData: propTypes.array.isRequired,
    SkillsData: propTypes.array.isRequired,
    GroupHeroData: propTypes.array.isRequired,
    GroupHeroChips: propTypes.array.isRequired,
    ExpData: propTypes.array.isRequired,
    StudyData: propTypes.array.isRequired,
    projectsData: propTypes.array.isRequired,

};

export default Landing;

