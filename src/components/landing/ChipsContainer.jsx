import "../../styles/_modal.scss";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function ChipsContainer({ activeExp = [] }) {

    //useState to store the years that should be shown in the chips
    const [shownYear, setShownYear] = useState([]);

    // useEffect only if chip is clicked
    useEffect(() => {
        // get the years of the activeExp and sort them by end date descending
        const years = activeExp
            .map(exp => exp.years)
            .sort((a, b) => (a.end < b.end ? 1 : -1));

        setShownYear(years);

    }, [activeExp]);


    return (
        <section className="chips_container_header">
            <div className="Chips_modal">
                {shownYear.map(year => (
                    <button
                        key={`${year.start}-${year.end}-${year.title ?? ""}`}  // prefer a real unique id if you have it
                        onClick={() => setShownYear([year])}
                        className="chip_modal"
                    >

                        <label className="label_chip">{year.end}</label>
                    </button>
                ))}
            </div>
        </section>
    );
}

ChipsContainer.propTypes = {
    activeExp: PropTypes.array.isRequired,

};

export default ChipsContainer;