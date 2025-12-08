import '../../../styles/_barGroupContactUs.scss';
import GroupProjects from './GroupProjects';
import propTypes from 'prop-types';

function GroupContactUs({ projectsData, contactData }) {

    return (
        <>
            <section className='Bar_contactUs'>
                <div className='Detail_contactUs'></div>
            </section>
            <GroupProjects projectsData={projectsData} />

            <section id="GroupContactUs" className="contact-us-section">
                <section className='item-contacUs'>
                    {contactData.map((info) => (
                        <div className='info__item'>
                            <img className='Detail__item' />
                            <ul className='data__item'>
                                <li >Phone: {info.phone}</li>
                                <li>Email: {info.email}</li>
                                <li>LinkedIn: <a href={info.linkedin} target="_blank" rel="noopener noreferrer">{info.linkedin}</a></li>
                            </ul>
                            <img className='image__item' />
                        </div>
                    ))}
                </section>
            </section>
            <section className='Group-interactions'>

            </section>
            <section className='frame-17'>
            </section>
        </>
    );
}

GroupContactUs.propTypes = {
    projectsData: propTypes.array.isRequired,
    contactData: propTypes.array.isRequired,

};

export default GroupContactUs;
