<script setup>
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// if (process.client) {
//   gsap.registerPlugin(ScrollTrigger)
// }

</script>
<template>
  <div>
    <NuxtPage v-slot="{Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
        <!-- <NuxtPage/> -->
      </transition>
    </NuxtPage>
  </div>
</template>

<style>

</style>