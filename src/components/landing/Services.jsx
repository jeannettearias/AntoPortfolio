import '../../styles/_services.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';


function Services({ services }) {

    const [activeServices, setActiveServices] = useState(services.filter(item => item.active === true));

    return (
        <section id="Services" className="Section-services">
            <div className='area-content'>
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
            </div>

            <div className="area_box">
                {activeServices.map(card => (
                    <div key={card.id} className="cards_services">
                        <div className="card_frame">
                            <img className="card_icon" alt="" src={`${import.meta.env.BASE_URL}${card.icon}`} />
                        </div>
                        <label className="card_label" htmlFor="">{card.title}</label>
                        <p className="card_description">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;

Services.propTypes = {
    services: PropTypes.array.isRequired,
};  