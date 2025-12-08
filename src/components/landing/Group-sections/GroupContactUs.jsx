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
                <section className='item-contacUs'>
                    <div className='info__item'>
                        <img className='Detail__item' />
                        <div className='data__item'>

                        </div>
                        <div className='image__item'>

                        </div>
                    </div>
                </section>
                <section className='Group-interactions'>

                </section>
                <section className='frame-17'>
                </section>
            </section>

        </>
    );
}

GroupContactUs.propTypes = {
    projectsData: propTypes.array.isRequired,

};

export default GroupContactUs;
