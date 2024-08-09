import Lottie from "lottie-web";

export default function animationLottie( animationData , element ) {
    const container  = document.querySelector(element)
    Lottie.loadAnimation({
        container: container, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
    })
} 