import '../../styles/_bar.scss';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function Bar({ services, speed = 0.9 }) {
    const [labels] = useState(services.filter(label => label.active === true));
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // Duplicate labels once for seamless reset
    const repeatedLabels = [...labels, ...labels];

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        let rafId;
        let x = 0;

        const step = () => {
            x += speed; // pixels per frame
            container.scrollLeft = x;

            // Reset when we scrolled past half of the track (duplicated content)
            const max = track.scrollWidth / 2;
            if (x >= max) x = 0;

            rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [speed]);

    if (labels.length === 0) return null;

    return (
        <section className="bar">
            <div className="detail_bar" aria-hidden="true"></div>

            <div
                className="bar-info"
                role="group"
                aria-label="Skills"
                ref={containerRef}
            >
                <ul className="Group-card" ref={trackRef}>
                    {repeatedLabels.map((label, idx) => (
                        <li key={`${label.id}-${idx}`}>
                            <label className="label">{label.title}</label>
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
    services: PropTypes.array.isRequired,
    speed: PropTypes.number
};