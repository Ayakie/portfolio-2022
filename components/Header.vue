<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const currentPage = ref(null)

const handleClick = (page) => {
  currentPage.value = page
}
const animLogo = () => {
  const TL = gsap.timeline({
    scrollTrigger: {
      trigger: '#section--skills',
      scrub:true,
      markers:true,
      id:'anim-logo',
      end: 'center 80%'
    }
  })
  TL
  .to('.logo__rest', {
    autoAlpha:0,
    })
  .to('.logo__ak1', {x:50}, 0.25)
  .to('.logo__ak2', {x: -50, autoAlpha:0}, 0.25)
}
onMounted(() => {
  setTimeout(() => {
    animLogo()
  }, 1000)
})
onBeforeUnmount(() => {
  scrollTrigger.getById('anim-logo').disable()
})
</script>


<template>
  <header class="header">
    <div class="header-container">
      <!-- logo -->
      <div class="header__left">
        
        <a href="#" id="logo">
          <svg class="logo" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.05 24.27">
                <g id="akie-nakai">
                    <g class="logo__ak1" id="ak">
                        <path id="K-2" data-name="K" class="cls-1"
                            d="M20.58.79h2.61V12.38L32.72.79H35.8L25.86,13.2,36.8,24.27H33.72L23.19,14V24.27H20.58Z" />
                        <path id="A-2" data-name="A" class="cls-1"
                            d="M11,.27h-.8L0,24.27H2.81l4-8.87h7.74l3.78,8.87h2.8Zm-3.69,13,3.27-7.94,3.24,7.93" />
                    </g>
                    <path id="A" class="logo__ak2 cls-1"
                        d="M107.68.27h-.8l-10.19,24H99.5l4-8.87h7.74L115,24.27h2.81Zm-3.69,13,3.28-7.94,3.23,7.93" />
                    <path id="K" class="logo__ak2 cls-1"
                        d="M117.27.79h2.61V12.38L129.42.79h3.07L122.56,13.2l10.93,11.07h-3.07L119.88,14V24.27h-2.61Z" />
                    <path id="ie-na-i" class="logo__rest cls-1"
                        d="M38.89.34h2.52V24H38.89ZM62,21.85V24H47.8V.34H61.54V2.46H50.33v8.31h9.26v2.12H50.33v9ZM94,.34V24l-.61.24L77.76,5.86V24H75.3V.27L75.84,0,91.53,18.51V.34ZM136.45,24,147.22,0h.84L158.76,24H156l-2.63-5.83H141.8L139.17,24Zm6.26-7.91h9.76L147.62,4.81ZM162.53.34h2.52V24h-2.52Z" />
                </g>
          </svg>
        </a>
      </div>
      <!-- nav -->
      <nav class="header__right">
        <a href="#section--about" class="header__item" :class="{active: currentPage === 'about'}"
         @click="handleClick('about')">ABOUT</a>
        <a href="#section--skills" class="header__item" :class="{active: currentPage ==='skills'}"
        @click="handleClick('skills')">SKILLS</a>
        <a href="#section--works" class="header__item" :class="{active: currentPage === 'works'}"
        @click="handleClick('works')">WORKS</a>
        <a href="#section--contact" class="header__item" :class="{active: currentPage ==='contact'}"
        @click="handleClick('contact')">CONTACT</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
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

  // &.active::after {
  //   transform: scale(1,1);
  // }
}
.cls-1 {
  fill: main.$main;
}
</style>
