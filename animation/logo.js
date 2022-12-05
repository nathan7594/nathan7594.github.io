const logonl = document.querySelectorAll('.logo');
const navbar = document.querySelectorAll('.navbar');
const logo = document.querySelector('.icon');
const medias = document.querySelectorAll('.bulle');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .from(navbar, 5, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .from(logonl, 5, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .from(logo, 1, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 1, '-=1');

    
    

    TL.play();
})