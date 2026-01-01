import '../../../styles/_groupProjects.scss';
import ContactUs from './ContactUs';
import GroupProjects from './GroupProjects';
import propTypes from 'prop-types';

function GroupContactUs({ projectsData, contactData }) {

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
    projectsData: propTypes.array.isRequired,
    contactData: propTypes.array.isRequired,

};

export default GroupContactUs;
