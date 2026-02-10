import '../../../styles/_groupProjects.scss';
import Bar from '../Bar';
import ContactUS from './ContactUs';
import GroupProjects from './GroupProjects';
import PropTypes from 'prop-types';

function GroupContactUs({ projectsData, services }) {
    // filter services
    const filteredData = services?.filter(item => item.active) || [];

    return (
        <section className='Section-projects-contactus'>

            <GroupProjects projectsData={projectsData} />

            <ContactUS />

            <Bar services={filteredData} />

        </section>

    );
}

GroupContactUs.propTypes = {
    projectsData: PropTypes.array,
    services: PropTypes.array
};
GroupContactUs.defaultProps = {
    projectsData: [],
    services: []
};

export default GroupContactUs;