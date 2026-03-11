export function createContinuousMarquee({
    containerEl,
    trackEl,
    speedPxPerSec = 100,
}) {
    let rafId = null;
    let lastTs = 0;
    let offset = 0;

    function measureLoopWidth() {
        // trackEl contains: [labels, labels]
        // So half of its scrollWidth equals the width of one full set.
        return trackEl.scrollWidth / 2;
    }

    function tick(ts) {
        if (!lastTs) lastTs = ts;
        const dt = (ts - lastTs) / 1000;
        lastTs = ts;

        const loopWidth = measureLoopWidth();
        if (loopWidth <= 0) {
            rafId = requestAnimationFrame(tick);
            return;
        }

        offset += speedPxPerSec * dt;

        // Wrap seamlessly (no jump visible because the content is duplicated)
        if (offset >= loopWidth) offset -= loopWidth;

        trackEl.style.transform = `translate3d(${-offset}px, 0, 0)`;
        rafId = requestAnimationFrame(tick);
    }

    return {
        start() {
            if (rafId) return;
            lastTs = 0;
            rafId = requestAnimationFrame(tick);
        },
        stop() {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
            lastTs = 0;
        },
    };
}