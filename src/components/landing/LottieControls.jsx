import { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../data/anim.json";

export default function LottieControls() {
    const lottieRef = useRef();

    return (
        <div>
            <Lottie lottieRef={lottieRef} animationData={animationData} loop />
            <button onClick={() => lottieRef.current?.play()}>Play</button>
            <button onClick={() => lottieRef.current?.pause()}>Pause</button>
            <button onClick={() => lottieRef.current?.stop()}>Stop</button>
        </div>
    );
}