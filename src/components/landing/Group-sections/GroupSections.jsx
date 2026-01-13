import React from 'react';
import GroupTools from './GroupTools';
import GroupExperience from './GroupExperience';
import GroupProjectsContactUs from './GroupProjectsContactUs';
import GroupTestimony from './GroupTestimony';

import ExpData from '../../../data/GroupExp.json';
import StudyData from '../../../data/GroupStudy.json';

import '../../../styles/_groupSections.scss';

import { useState } from 'react';
import PropTypes from 'prop-types';


function GroupSections() {
    const [activeProjects, setActiveProjects] = useState([]); // Initialize with an empty array or fetch data as needed

    const [contactData, setContactData] = useState([]); // Initialize with an empty array or fetch data as needed
    const [contactCountryData, setContactCountryData] = useState([]); // Initialize with an empty array or fetch data as needed
    const [contactForm, setContactForm] = useState([]); // Initialize with an empty array or fetch data as needed
    return (
        <section id='GroupHero' className='group-sections'>
            <GroupTools />
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