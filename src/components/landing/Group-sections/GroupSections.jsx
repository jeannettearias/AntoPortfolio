import React from 'react';
import GroupTools from './GroupTools';
import GroupExperience from './GroupExperience';
import GroupProjectsContactUs from './GroupProjectsContactUs';
import GroupTestimony from './GroupTestimony';

import '../../../styles/_groupSections.scss';
import PropTypes from 'prop-types';


function GroupSections({ ExpData, StudyData, activeProjects, contactData, contactCountryData, contactForm }) {

    return (
        <section id='GroupHero' className='group-sections'>
            <GroupTools
            />

            <GroupExperience ExpData={ExpData}
                StudyData={StudyData} />

            <GroupProjectsContactUs
                projectsData={activeProjects}  // Pass activeProjects as projectsData

                contactData={contactData}
                contactCountryData={contactCountryData}
                contactForm={contactForm} />

            <GroupTestimony />
        </section>
    );
}
GroupSections.propTypes = {
    ExpData: PropTypes.array,
    StudyData: PropTypes.array,
    activeProjects: PropTypes.array,
    contactData: PropTypes.array,
    contactCountryData: PropTypes.array,
    contactForm: PropTypes.array,
};

export default GroupSections;