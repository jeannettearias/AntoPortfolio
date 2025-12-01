import '../../styles/_bar.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Bar({ SkillsData }) {
    const [labels, setLabels] = useState(SkillsData.filter(label => label.status === 'active'));

    return (
        <div className="bar">
            <div className="bar-info">
                <ul className='Group-card'>
                    {labels.map(label => (
                        <li key={label.id}>
                            <label className='label' >{label.title}  </label>
                            <img src={`${import.meta.env.BASE_URL}images/icons/Bullet.svg`} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default Bar;

Bar.propTypes = {
    SkillsData: PropTypes.array.isRequired
};
