import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = (to, from , savedPosition) => {

      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      } else  {
        return { left: 0, top: 0 }
      }
    }
  })