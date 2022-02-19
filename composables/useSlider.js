import gsap from "gsap"

export const useSlider = (btnNextClass, btnPrevClass, slidesClass, slidesWrapperClass, moonClass) => {

    const btnRight = document.querySelector(btnNextClass)
    const btnLeft = document.querySelector(btnPrevClass)
    const slides = Array.from(document.querySelectorAll(slidesClass))
    const slidesWrapper = document.querySelector(slidesWrapperClass)
    const moon = Array.from(document.querySelectorAll(moonClass))
    let idx = 0

    function animRight() {
        const TLRight = gsap.timeline()
        
        TLRight
        .to(slides[idx], {duration: 0.6, x: 0})
        .to(moon[idx], {duration: 0.3, visibility: 'visible', autoAlpha:1,}, '<')
        .set(moon[idx-1], {visibility: 'hidden'}, '<-0.5')
    }

    function animLeft() {
        const TLLeft = gsap.timeline()

        TLLeft.to(slides[idx], { duration: 0.6, x: "100%" })
        .to(moon[idx-1], {duration: 0.3, visibility: 'visible', autoAlpha:1}, '<')
        .set(moon[idx], {visibility: 'hidden'}, '<-0.5')
    }

    function negation() {
        gsap.to(slidesWrapper, {
            keyframes: [
                {x: -1, duration: 0.1},
                {x: 1, duration: 0.1},
                {x: -1, duration: 0.1},
                {x: 1, duration: 0.1}
            ]
        })
    }

    function handleDirection(direction) {
        if (direction === "next") {
            if(idx === slides.length - 1) {
                negation()
                return
            }
            idx ++
            animRight()
        }
        else if (direction === "prev") {
            if(idx === 0) {
                negation()
                return
            }
            animLeft()
            idx --
        }
    }

    btnRight.addEventListener("click", () => {
        handleDirection("next")
    })

    btnLeft.addEventListener("click", () => {
        handleDirection("prev")
    })
}