import '../../../styles/_groupProjects.scss';
import PropTypes from 'prop-types';

import GroupProjects from './GroupProjects';
import ContactUS from './ContactUs';
import Bar from '../Bar';


function GroupContactUs({ ProjectsData, services }) {
    // filter services
    const filteredData = services?.filter(item => item.active) || [];

    return (
        <section className='Section-projects-contactus'>

            <GroupProjects ProjectsData={ProjectsData} />

            <ContactUS />

            <Bar services={filteredData} />

        </section>

    );
}

GroupContactUs.propTypes = {
    ProjectsData: PropTypes.array,
    services: PropTypes.array
};
GroupContactUs.defaultProps = {
    ProjectsData: [],
    services: []
};

export default GroupContactUs;