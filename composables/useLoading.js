import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useLoading = () => {

    let storage = sessionStorage
    const keyName = "visited";
    const keyValue = true;
    const TL = gsap.timeline()
    
    if (!storage.getItem(keyName)) {
    
        TL
        .from('.loading__content', {y: 100, duration: 0.6, autoAlpha: 0})
        .from('.logo-container__rest', {autoAlpha:0, duration: 0.6, delay: 0.5})
        .from('.logo-container__ak1', {x: 30}, '<')
        .from('.logo-container__ak2', {x: -50, autoAlpha: 0, duration: 0.6}, '<')
        .to('.loading__content', {top:"10%", duration: 0.8, autoAlpha: 0, delay: 0.5})

        .to('.loading', {autoAlpha: 0, duration: 0.8}, '<')

        storage.setItem(keyName, keyValue)

    } else {
        document.querySelector('.loading').style.display = "none"
    }


}