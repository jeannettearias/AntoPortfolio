import '../../../styles/_groupProjects.scss';
import ContactUS from './ContactUs';
import GroupProjects from './GroupProjects';
import PropTypes from 'prop-types';

function GroupContactUs({ projectsData }) {

    return (
        < section className='Section-projects-contactus'>

            <GroupProjects projectsData={projectsData} />

            <ContactUS />

        </section >

    );
}

GroupContactUs.propTypes = {
    projectsData: PropTypes.array.isRequired,

};

export default GroupContactUs;
