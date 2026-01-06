import '../../styles/_skills.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


function Skills({ SkillsData }) {

    const [activeCards, setActiveCards] = useState(SkillsData.filter(card => card.status === 'active'));

    return (
        <section id="Skills" className="Section-skills">
            <section className='area-content'>
                <div className="content-area">
                    <div className="Badge">Sobre mí</div>
                    <p className="content-text"
                    >¿Por qué<span className="green-text">elegirme</span> para tu próximo proyecto?</p>
                </div>

                <div className="button-area">
                    <div className='btn-me'>Háblame</div>
                </div>

            </section>

            <section className="area-box">
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
    );
}

export default Skills;

Skills.propTypes = {
    SkillsData: PropTypes.array.isRequired,
    activeCards: PropTypes.array,
};  