import React from 'react';
import GroupTools from './GroupTools';
import GroupExperience from './GroupExperience';
import GroupProjectsContactUs from './GroupProjectsContactUs';
import GroupTestimony from './GroupTestimony';

import '../../../styles/_groupSections.scss';
import PropTypes from 'prop-types';


function GroupSections({ ExpData, StudyData, activeProjects }) {

    return (
        <section id='GroupHero' className='group-sections'>
            <GroupTools />

            <GroupExperience
                StudyData={StudyData}
                ExpData={ExpData} />

            <GroupProjectsContactUs
                projectsData={activeProjects}  // Pass activeProjects as activeProjects
            />

            <GroupTestimony />
        </section>
    );
}
GroupSections.propTypes = {
    ExpData: PropTypes.array,
    StudyData: PropTypes.array,
    projectsData: PropTypes.array,
};

export default GroupSections;