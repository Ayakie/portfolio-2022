<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const animIcons = () => {
    const icons = gsap.utils.toArray('.sns-icons a')
    gsap.from('.sns-icons a', {
        y: 50,
        autoAlpha:0,
        duration:2,
        stagger: {
            from: "edges",
            amount: 2
        },
        scrollTrigger: {
            trigger: '.sns-icons',
            markers: true,
            scrub: true,
            start: 'top-=100 center+=200',
            end: 'bottom center',
            id: 'anim-icons'
        }
        })
}
onMounted(() => {
    setTimeout(() => {
        animIcons()
    }, 1000)

});
onBeforeUnmount(() => {
    ScrollTrigger.getById('anim-icons').disable()
})
</script>
<template>
<div>
    <section class="section-top" id="section--contact">
        <h1 class="section-top__heading">Feel Free to Get in Touch Me.</h1>
        <div class="section-top__inner-content">
            <div class="sns-icons">
                <a href="https://www.linkedin.com/in/akienakai1023/" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/aya1023blue" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:aya1023lake@gmail.com" target="_blank" class="sns-icons__icon">
                    <i class="far fa-envelope"></i>
                </a>
                <a href="https://www.facebook.com/nakai.akie" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://wimper-1996.hatenablog.com/" target="_blank" class="sns-icons__icon">
                    <!-- <img class="hatenablog" src="@/assets/img/top/hatenablog.svg" alt=""> -->
                    <svg class="hatenablog" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">

                        <path class="st0" d="M50.1,100.2C22.5,100.2,0,77.7,0,50.1S22.5,0,50.1,0s50.1,22.5,50.1,50.1C100.1,77.7,77.7,100.2,50.1,100.2z
                            M50.1,6.4C26,6.4,6.4,26,6.4,50.1S26,93.8,50.1,93.8s43.7-19.6,43.7-43.7S74.2,6.4,50.1,6.4z"/>
                        <path class="st1" d="M55.9,25.3c-2.4-5-3.9-9.8-4.7-12.6v35.5c1.2,0.5,2.1,1.6,2.1,3c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3
                            c0-1.5,1-2.7,2.3-3.1V12.7c-0.8,2.8-2.2,7.6-4.7,12.6c-3.8,7.8-8.6,14.6-8.6,14.6l3.1,41.8c0,0,2.9,3.2,11.3,3.2s11.3-3.2,11.3-3.2
                            l3.1-41.8C64.5,39.9,59.7,33.1,55.9,25.3z"/>
                    </svg>
                </a>
            </div>
        </div>
    <Footer/>
    </section>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

.section-top {
    background: main.$bg-gray;
    display: grid;
    // flex-direction: column;
    // justify-content: center;

    &__heading {
        position: relative;
    }
}

.form {
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 800px;
    position: relative;
    text-align: center;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    &__content {
        width: 100%;
        display: block;
        border-bottom: solid 0.8px main.$main;
        padding: 0.6rem;
        text-align: center;
    }

    &__name, &__email {
        width: 43%;
        border-bottom: solid 0.8px main.$main;
        text-align: center;
        padding: 0.6rem;
    }
    &__email {
        right: 0;
    }
}
button {
    margin: clamp(60px, 6vw, 90px);
}

.sns-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    &__icon {
        font-size: clamp(26px, 3.5vw, 45px);
        display: grid;
        place-items: center;
        width: clamp(45px, 6vw, 80px);
        aspect-ratio: 1 /1 ;
        background-color: main.$bg-black;
        border-radius: 50%;

        & i {
            transition: all 0.5s;
        }

        &:hover i {
            color: main.$accent;
        }
    }
}

.hatenablog {
    max-height: 90%;

    & .st1 {
        fill: main.$main;
        transition: all 0.5s;
    }

    & .st0 {
        display: none;
        fill: main.$main;
    }
    &:hover .st1 {
        fill: main.$accent;
    }
}
</style>