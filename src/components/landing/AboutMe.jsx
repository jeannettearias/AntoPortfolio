import '../../styles/_aboutMe.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


function AboutMe({ aboutMe }) {

    const [activeCards, setActiveCards] = useState(aboutMe.filter(card => card.active === true));

    return (
        <>
            <section id="aboutMe" className="Section-aboutMe">
                <section className='area-content'>
                    <div className="content-area">
                        <div className="Badge">
                            <span className="badge-text">Servicios</span>
                        </div>
                        <p className="content-text"
                        >¿Por qué <span className="purple-text">elegirme </span> para tu próximo proyecto?</p>
                    </div>
                    <div className="button-area">
                        <div className='btn-me'>Háblame</div>
                    </div>
                </section>

                <section className="area_box">
                    {activeCards.map(card => (
                        <div key={card.id} className="cards_aboutMe">
                            <div className="card_frame">
                                <img className="card_icon" alt="" src={`${import.meta.env.BASE_URL}${card.icon}`} />
                            </div>
                            <label className="card_label" htmlFor="">{card.title}</label>
                            <p className="card_description">{card.description}</p>
                        </div>
                    ))}
                </section>
            </section>

        </>
    );
}

export default AboutMe;

AboutMe.propTypes = {
    aboutMe: PropTypes.array.isRequired,
    activeCards: PropTypes.array,
};  