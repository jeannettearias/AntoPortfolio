import '../../styles/_bar.scss';
import PropTypes from 'prop-types';

import { useRef, useLayoutEffect, useMemo } from 'react';
import { createContinuousMarquee } from '../landing/Scrollers'; // adjust path

function Bar({ services, speed = 60 }) {
    const labels = useMemo(
        () => services.filter((label) => label.active === true),
        [services]
    );

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    const repeatedLabels = useMemo(() => [...labels, ...labels], [labels]);

    useLayoutEffect(() => {
        if (!containerRef.current || !trackRef.current) return;
        if (labels.length === 0) return;

        const marquee = createContinuousMarquee({
            containerEl: containerRef.current,
            trackEl: trackRef.current,
            speedPxPerSec: speed,
        });

        // wait 1 frame so widths are measurable
        let startRaf = requestAnimationFrame(() => marquee.start());

        return () => {
            cancelAnimationFrame(startRaf);
            marquee.stop();
        };
    }, [speed, labels]); // labels (memoized) is safer than labels.length

    return (
        <section className="bar">
            <div className="detail_bar" aria-hidden="true"></div>

            <div className="bar-info" role="group" aria-label="Skills" ref={containerRef}>
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
    speed: PropTypes.number, // now interpreted as px/sec for this approach
};