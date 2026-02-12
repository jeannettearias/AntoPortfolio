import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/_carrousel.scss';

function Carrousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Normalize children to an array
    const slides = Array.isArray(children) ? children : [children];
    const total = slides.filter(Boolean).length;

    if (total === 0) return null;

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    return (
        <div className='carrousel'>
            <div className='carrousel-content'>
                <div
                    className='carrousel-track'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((child, idx) => (
                        <div
                            key={idx}
                            className={`carrousel-item ${idx === currentIndex ? 'active' : ''}`}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls under the cards */}
            <div className='carrousel-controls'>
                <button
                    className='left_chevron'
                    onClick={goToPrev}
                    aria-label="Previous testimony">
                    <img src="images/testimony/arrow_left.svg" alt="" />
                </button>

                <div className='carrousel-indicators'>
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to testimony ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    className='right_chevron'
                    onClick={goToNext}
                    aria-label="Next testimony">
                    <img src="images/testimony/arrow_right.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

Carrousel.propTypes = {
    children: PropTypes.node,
};

export default Carrousel;