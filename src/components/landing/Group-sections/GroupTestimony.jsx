import '../../../styles/_testimony.scss';
import PropTypes from 'prop-types';
import Carrousel from '../Carrousel';



function GroupTestimony({ testimony }) {
    const recientTestimony = testimony ? testimony : [];


    return (

        <section id="References" className="references-section">

            <div className='image_testimony'>
                <img src="images/testimony/world.png" alt="" />
            </div>
            <div className='text_testimony'>
                <div className='Badge'>
                    <label className='label_badge'>Referencias</label>
                </div>
                <div className='content_testimony'>
                    <label className='title_testimony_content'>El impacto de mi trabajo</label>
                </div>

            </div>
            {/* Cards are defined here and passed to Carrousel as children */}
            <Carrousel>
                {recientTestimony.map((testimony, index) => (
                    <div key={testimony.id || index} className='margin_card'>
                        <div className='card_testimony'>
                            <div className='item_card'>
                                <label className='label_testimony_card'>
                                    {testimony.testimony}
                                </label>
                            </div>
                            <div className='item_item_card'>
                                <img
                                    className='icono_item_card'
                                    src={testimony.image}
                                    alt={testimony.name} />
                                <div className='content_item'>
                                    <label className='name_label'>{testimony.name}</label>
                                    <label className='position_label'>{testimony.position}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carrousel>

        </section>
    );
}

GroupTestimony.propTypes = {
    testimony: PropTypes.array.isRequired,
};

export default GroupTestimony;