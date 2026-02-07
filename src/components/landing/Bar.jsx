import '../../styles/_bar.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Bar({ services }) {
    const [labels, setLabels] = useState(services.filter(label => label.active === true));

    return (

        <section className="bar">
            <div className="detail_bar" aria-hidden="true"></div>
            <div className="bar-info" role="group" aria-label="Skills">
                <ul className='Group-card'>
                    {labels.map(label => (
                        <li key={label.id}>
                            <label className='label' >{label.title}  </label>
                            <img src={`${import.meta.env.BASE_URL}images/icons/Bullet.svg`} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Bar;

Bar.propTypes = {
    services: PropTypes.array.isRequired
};
