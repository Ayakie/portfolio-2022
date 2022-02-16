<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
onMounted(() => {
    if(process.client) {
        gsap.registerPlugin(ScrollTrigger)
    }
})
</script>

<script>
export default {
  pageTransition: "page"
}

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</div>
</template>

<style>

</style>