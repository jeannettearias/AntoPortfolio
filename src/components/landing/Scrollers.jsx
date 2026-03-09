export function createContinuousMarquee({ containerEl, trackEl, speed = 1 }) {
    let rafId = null;
    let x = containerEl.scrollLeft;

    const step = () => {
        const max = trackEl.scrollWidth / 2; // because the list is duplicated
        if (max > 0) {
            x += speed;
            if (x >= max) x -= max;
            containerEl.scrollLeft = x;
        }
        rafId = requestAnimationFrame(step);
    };

    const start = () => {
        if (rafId != null) return;
        x = containerEl.scrollLeft; // resync
        rafId = requestAnimationFrame(step);
    };

    const stop = () => {
        if (rafId == null) return;
        cancelAnimationFrame(rafId);
        rafId = null;
    };

    return { start, stop };
}