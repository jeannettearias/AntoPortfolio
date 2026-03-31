import "../../styles/_modal.scss";
import { useEffect } from 'react';
import PropTypes from 'prop-types';


function ChipsContainer({ activeExp = [] }) {
    // onClick on the chips, sort the experience by date descending according years.end
    const sortedChip = [...activeExp].sort((a, b) => (a.years.end < b.years.end ? 1 : -1));



    return (
        <section className="chips_container_header">

            <div className="Chips_modal">
                {sortedChip.map((year) => (
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