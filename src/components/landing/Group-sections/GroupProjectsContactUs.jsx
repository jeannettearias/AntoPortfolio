import '../../../styles/_groupProjects.scss';
import ContactUs from './ContactUs';
import GroupProjects from './GroupProjects';
import PropTypes from 'prop-types';

function GroupContactUs({ contactData, contactCountryData, contactForm, projectsData }) {

    return (
        < section className='Section-projects-contactus'>

            <GroupProjects projectsData={projectsData} />

            <ContactUs contactData={contactData}
                contactCountryData={contactCountryData}
                contactForm={contactForm} />

        </section >

    );
}

GroupContactUs.propTypes = {
    contactData: PropTypes.array.isRequired,
    contactCountryData: PropTypes.array,
    contactForm: PropTypes.array,
    projectsData: PropTypes.array.isRequired,

};

export default GroupContactUs;
