<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="header-container">
      <!-- logo -->
      <div class="header__left">AKIE NAKAI</div>
      <!-- nav -->
      <nav class="header__right">
        <a href="#section--about" class="header__item">ABOUT</a>
        <a href="#section--skills" class="header__item">SKILLS</a>
        <a href="#section--works" class="header__item">WORKS</a>
        <a href="#section--contact" class="header__item">CONTACT</a>
        <a href="#" class="header__item">EN</a>
      </nav>
    </div>
  </header>
</template>

<script>

</script>

<style lang="scss" scoped>
@use '@/assets/css/main';
.header {
    font-family: poppins, sans-serif;
    height: 72px;
    line-height: 72px;
    position: fixed;
    width: 100%;
    z-index: 10;
    background: main.$bg-black;

    &__right {
        display: flex;
    }

    &__item {
        padding-left: 16px;
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
}

</style>
