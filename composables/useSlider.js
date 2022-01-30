import { useState } from "#app"
import gsap from "gsap/all"

export const useSlider = (btnNextClass, btnPrevClass, slidesClass, slidesWrapperClass) => {
    const btnRight = document.querySelector(btnNextClass)
    const btnLeft = document.querySelector(btnPrevClass)
    const slides = Array.from(document.querySelectorAll(slidesClass))
    const slidesWrapper = document.querySelector(slidesWrapperClass)

    let idx = 0

    function animRight() {
        const TLRight = gsap.timeline()
        
        console.log(idx)
        TLRight.to(slides[idx], {duration: 0.6, x: 0})
    }

    function animLeft() {
        const TLLeft = gsap.timeline()

        TLLeft.to(slides[idx], { duration: 0.6, x: "100%" })
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