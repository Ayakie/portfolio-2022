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
    <Html lang="ja">
        <Title>aknaka portfolio</Title>
        <Meta name="description" content="This is Akie Nakai's portfolio site"/>
    </Html>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>

</style>