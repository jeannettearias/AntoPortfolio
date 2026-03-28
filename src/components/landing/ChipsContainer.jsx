import "../../styles/_modal.scss";
import { useEffect } from 'react';
import PropTypes from 'prop-types';


function ChipsContainer({ activeExp = [] }) {


    return (
        <section className="chips_container_header">

            <div className="Chips_modal">
                {activeExp.map((year) => (
                    <div className="chip_modal" key={year.id}>
                        <label className="label_chip">{year.years.end}</label>
                    </div>
                ))}

            </div>

        </section>
    );
}

ChipsContainer.propTypes = {
    activeExp: PropTypes.array.isRequired,
};

export default ChipsContainer;