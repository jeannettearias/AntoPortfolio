import Lottie from "lottie-react";

export default function LottieHero({ animationData }) {
    return (
        <div >
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    );
}
