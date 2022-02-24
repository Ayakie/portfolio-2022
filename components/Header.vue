<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const isOpen = ref(false)

const handleClick = () => {
  isOpen.value = !isOpen.value
}
const animLogo = () => {
  const TL = gsap.timeline({
    scrollTrigger: {
      trigger: '#section--skills',
      scrub:true,
      // markers:true,
      id:'anim-logo',
      end: 'center 80%'
    }
  })
  TL
  .to('.logo__rest', {
    autoAlpha:0,
    })
  .to('.logo__ak1', {x: 30}, 0.25)
  .to('.logo__ak2', {x: -50, autoAlpha:0}, 0.25)
}
onMounted(() => {
  setTimeout(() => {
    animLogo()
  }, 1000)
})
// onBeforeUnmount(() => {
//   scrollTrigger.getById('anim-logo').disable()
// })
</script>


<template>
  <header class="header">
    <div class="header-container">
      <!-- logo -->
      <div class="header__left">
        
        <a href="#" id="logo">
          <svg class="logo" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.05 24.27">
            <path class="logo__ak1 cls-1" data-name="ak"
                d="M0 17.9 8 .25h.9l8 17.65H14l-2.35-5.77-6.11-.07-2.68 5.84Zm6.34-7.79h4.23L8.45 5.22ZM16.1.45h2.64V9.5l6.83-9h3.15L21 10.49l8.67 7.41h-3.45l-7.33-6.18-.15 6.18H16.1Z" />
            <path class="logo__ak2 cls-1"  data-name="ak"
                d="m73.21 17.9 8-17.65h.9l8 17.65h-2.88l-2.35-5.77-6.11-.07-2.7 5.84Zm6.34-7.79h4.23l-2.12-4.89ZM89.32.45H92V9.5l6.83-9h3.15l-7.73 10 8.66 7.41h-3.48l-7.33-6.19-.1 6.18h-2.68Z" />
            <path class="logo__rest cls-1" data-name="rest"
                d="M31.37.45H34V17.9h-2.63ZM48 15.51v2.19H37.15V.25h10.52v2.21h-7.91v5.25h6.54v2.18h-6.54v5.62ZM71.81.25v17.5l-.59.18-11-12.09V17.7h-2.6V.2l.59-.2 11 12.16V.25ZM104.27 18l8-17.65h.89l8 17.65h-2.86l-1.64-3.56h-7.88L107.13 18Zm5.44-5.72h6l-3-7Zm13.14-12h2.61V17.7h-2.61Z" />
          </svg>
        </a>
      </div>
      <!-- nav -->
      <button @click="handleClick"
      class="header__navbtn hamburger hamburger--spin" :class="{'is-active': isOpen}">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <nav class="header__right" :class="{'is-open': isOpen}">
        <a href="#section--about" class="header__item" @click="isOpen = !isOpen" >ABOUT</a>
        <a href="#section--skills" class="header__item" @click="isOpen = !isOpen">SKILLS</a>
        <a href="#section--works" class="header__item" @click="isOpen = !isOpen">WORKS</a>
        <a href="#section--contact" class="header__item" @click="isOpen = !isOpen">CONTACT</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/css/main';
.header {
    font-family: poppins, sans-serif;
    position: fixed;
    width: 100%;
    z-index: 10;
    background: main.$bg-black;

    &__left {
      position: relative;
    }

    &__right {
        display: flex;
    }

    &__item {
        margin-left: 16px;
    }
}
button.hamburger {
  display: none;
}

%container {
    width: min(92%, 1200px);
    margin: auto;
}

.header-container {
    @extend %container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
}

%under-line {
    content: '';
    position: absolute;
    height: 2px;
    width: 90%;
    background: main.$accent;
    bottom: -1rem;
    left: 5%;
    transform-origin: left;
}
.header__item {
  position: relative;

  &::after {
    @extend %under-line;
    transform: scale(0,1);
    transition: all 0.3s;
  }
  &:hover::after {
    transform: scale(1,1);
  }

}
.cls-1 {
  fill: main.$main;
}

@media (max-width: 744px) {
  button.hamburger {
    display: inherit;
    z-index: 100;
  }
  .header__right {
    position: fixed;
    background: main.$bg-black;
    opacity: 0.9;
    width: 100vw;
    height: 100vh;
    // これで全画面覆う
    inset: 0 -100% 0 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: all 0.4s;
  }
  .header__right.is-open {
    transform: translateX(-100%);
  }
  .is-open body {
    position: fixed;
    overflow: hidden;
  }
}
</style>
