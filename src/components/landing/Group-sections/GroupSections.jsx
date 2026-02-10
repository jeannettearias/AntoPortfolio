import React from 'react';
import GroupTools from './GroupTools';
import Bar from '../Bar';
import GroupExperience from './GroupExperience';
import GroupProjectsContactUs from './GroupProjectsContactUs';
import GroupTestimony from './GroupTestimony';

import '../../../styles/_groupSections.scss';
import PropTypes from 'prop-types';


function GroupSections({ activeExp, activeStudy, activeProjects, activeTestimony, servicesData }) {

    return (
        <section id='GroupHero' className='group-sections'>
            <GroupTools />

            <GroupExperience
                StudyData={activeStudy}
                ExpData={activeExp} />

            <GroupProjectsContactUs
                projectsData={activeProjects}
                services={servicesData}
            />

            <GroupTestimony
                activeTestimony={activeTestimony} />

        </section>
    );
}
GroupSections.propTypes = {
    activeExp: PropTypes.array.isRequired, // Change to match new prop names
    activeStudy: PropTypes.array.isRequired,
    activeProjects: PropTypes.array.isRequired,
    activeTestimony: PropTypes.array.isRequired,
    services: PropTypes.array.isRequired
};

export default GroupSections;