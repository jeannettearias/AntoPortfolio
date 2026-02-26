
import GroupTools from './GroupTools';
import GroupExperience from './GroupExperience';
import GroupProjectsContactUs from './GroupProjectsContactUs';
import GroupTestimony from './GroupTestimony';

import '../../../styles/_groupSections.scss';
import PropTypes from 'prop-types';


function GroupSections({ expData, studyData, ProjectsData, testimony, services }) {

    return (
        <section id='GroupHero' className='group-sections'>
            <GroupTools />

            <GroupExperience
                expData={expData}
                studyData={studyData} />

            <GroupProjectsContactUs
                ProjectsData={ProjectsData}
                services={services}
            />

            <GroupTestimony
                testimony={testimony} />

        </section>
    );
}
GroupSections.propTypes = {
    expData: PropTypes.array.isRequired,
    studyData: PropTypes.array.isRequired,
    ProjectsData: PropTypes.array.isRequired,
    testimony: PropTypes.array.isRequired,
    services: PropTypes.array.isRequired
};

export default GroupSections;