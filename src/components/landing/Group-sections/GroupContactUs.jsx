import '../../../styles/_barGroupContactUs.scss';
import GroupProjects from './GroupProjects';

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

export default GroupContactUs;
