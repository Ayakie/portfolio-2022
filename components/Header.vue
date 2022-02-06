<script setup>
const currentPage = ref(null)

const handleClick = (page) => {
  currentPage.value = page
}
</script>


<template>
  <header class="header">
    <div class="header-container">
      <!-- logo -->
      <div class="header__left">AKIE NAKAI</div>
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

</style>
