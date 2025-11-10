import '../../styles/_bar.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Bar({ aboutMeData }) {
    const [labels, setLabels] = useState(aboutMeData.filter(label => label.status === 'active'));

    return (
        <div className="bar">
            <div className="bar-info">
                <ul className='Group-card'>
                    {labels.map(label => (
                        <li key={label.id}>
                            <label className='label' >{label.title}  </label>
                            <img className='icon' src={label.icon} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default Bar;

Bar.propTypes = {
    aboutMeData: PropTypes.array.isRequired
};
