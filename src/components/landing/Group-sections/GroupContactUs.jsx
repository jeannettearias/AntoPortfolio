import '../../../styles/_barGroupContactUs.scss';
import GroupProjects from './GroupProjects';
import propTypes from 'prop-types';

function GroupContactUs({ projectsData }) {
    return (
        <>


            <section id="GroupContactUs" className="contact-us-section">

                <GroupProjects projectsData={projectsData} />

                <section className='Contact-Us'>

                </section>

            </section>
        </>
    );
}

GroupContactUs.propTypes = {
    projectsData: propTypes.array.isRequired,

};

export default GroupContactUs;
