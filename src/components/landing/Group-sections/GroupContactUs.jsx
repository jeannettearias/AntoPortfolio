import '../../../styles/_barGroupContactUs.scss';
import GroupProjects from './GroupProjects';
import propTypes from 'prop-types';

function GroupContactUs({ projectsData }) {
    return (
        <>

            <section className='Bar_contactUs'>
                <div className='Detail_contactUs'></div>
            </section>
            <GroupProjects projectsData={projectsData} />

            <section id="GroupContactUs" className="contact-us-section">
                <div className='item-contacUs'>

                </div>
                <div className='Group-interactions'>

                </div>
                <div className='frame-17'>

                </div>
            </section>

        </>
    );
}

GroupContactUs.propTypes = {
    projectsData: propTypes.array.isRequired,

};

export default GroupContactUs;
