import "../../styles/_modal.scss";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function ChipsContainer({ activeExp = [] }) {

    //useState to store the years that should be shown in the chips
    const [shownYear, setShownYear] = useState([]);

    useEffect(() => {
        const sorted = activeExp
            .map((exp) => exp.years)
            .sort((a, b) => (a.end < b.end ? 1 : -1));

        // Deduplicate by the displayed label (end year)
        const unique = Array.from(
            new Map(sorted.map((y) => [y.end, y])).values()
        );

        setShownYear(unique);
    }, [activeExp]);


    return (
        <section className="chips_container_header">
            <div className="Chips_modal">
                {shownYear.map((year) => (
                    <button
                        className="chip_modal"
                        key={year.end}   // now it's unique because we deduped by end year
                        onClick={() => setShownYear([year])}
                    >
                        <label className="label_chip">{year.end}</label>
                    </button>
                ))}
            </div>
        </section>
    );
}
©
ChipsContainer.propTypes = {
    activeExp: PropTypes.array.isRequired,

};

export default ChipsContainer;