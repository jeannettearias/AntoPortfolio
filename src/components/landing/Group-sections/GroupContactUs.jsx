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
                <div className='item-contacUs'>
                    <img className='Detail__item' />

                    <div className='info__item'>
                        <ul className='data__info'>
                            {contactData.map((info, index) => {
                                const key = info.phone ?? info.email ?? info.linkedin ?? `contact-${index}`;
                                return (
                                    <li key={key} className='content__item'>
                                        <div>Phone: {info.phone}</div>
                                        <div>Email: <a href={`mailto:${info.email}`}>{info.email}</a></div>
                                        <div>LinkedIn:{' '}
                                            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
                                                {info.linkedin}
                                            </a></div>
                                    </li>
                                );
                            })}
                        </ul>
                        <img className='image__item' />
                    </div>

                </div>
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
