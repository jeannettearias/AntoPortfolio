import "../../styles/_modal.scss";
import { useState, useEffect, useMemo } from "react";
import PropTypes from 'prop-types';


function ChipsContainer({ activeExp = [] }) {
    const [selectedYear, setSelectedYear] = useState([]);
    const [showAllChips, setShowAllChips] = useState(true);


    // compute unique years from activeExp
    const unique = useMemo(() => {
        const sorted = activeExp
            .map((exp) => exp.years)
            .sort((a, b) => (a.end < b.end ? 1 : -1));

        return Array.from(new Map(sorted.map((y) => [y.end, y])).values());
    }, [activeExp]);

    // initialize / restore list when data changes
    useEffect(() => {
        // if we are in "show all" mode, keep selectedYear as full unique list
        if (showAllChips) setSelectedYear(unique);

        // if data becomes empty, clear
        if (unique.length === 0) setSelectedYear([]);
    }, [unique, showAllChips]);

    return (
        <section className="chips_container_header">
            <div className="Chips_modal">
                {selectedYear.map((year) => (
                    <button
                        className="chip_modal"
                        key={year.end}   // now it's unique because we deduped by end year
                        onClick={() => {
                            // click same chip twice => restore all
                            setSelectedYear((prev) =>
                                prev.length === 1 && prev[0].end === year.end ? unique : [year]
                            );
                            // toggle showAllChips based on whether we're restoring or selecting one
                            setShowAllChips((prevShowAll) => {
                                const isClickingSameSelected =
                                    selectedYear.length === 1 && selectedYear[0].end === year.end;
                                return isClickingSameSelected ? true : false;
                            });
                        }}
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