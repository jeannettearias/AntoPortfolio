import React from 'react';
import GroupTools from './GroupTools';
import GroupExperience from './GroupExperience';
import GroupProjectsContactUs from './GroupProjectsContactUs';
import GroupTestimony from './GroupTestimony';

import '../../../styles/_groupSections.scss';
import PropTypes from 'prop-types';


function GroupSections({ activeExp, activeStudy, activeProjects }) {

    return (
        <section id='GroupHero' className='group-sections'>
            <GroupTools />

            <GroupExperience
                StudyData={activeStudy}
                ExpData={activeExp} />

            <GroupProjectsContactUs
                projectsData={activeProjects}  // Pass activeProjects as activeProjects
            />

            <GroupTestimony />
        </section>
    );
}
GroupSections.propTypes = {
    activeExp: PropTypes.array.isRequired, // Change to match new prop names
    activeStudy: PropTypes.array.isRequired,
    activeProjects: PropTypes.array.isRequired,
};

export default GroupSections;