<script setup>
import { useLoading } from "~~/composables/useLoading";

onMounted(() => {
  setTimeout(()=> useLoading(), 500)
});
</script>

<template>
  <div>
    <div class="loading">
      <div class="loading__content">
        Hello. I am
        <span class="logo-container">
          <svg class="logo-container__svg" viewBox="0 0 125.46 18">
            <g>
                <path class="logo-container__ak1 cls-1" data-name="ak"
                    d="M0 17.9 8 .25h.9l8 17.65H14l-2.35-5.77-6.11-.07-2.68 5.84Zm6.34-7.79h4.23L8.45 5.22ZM16.1.45h2.64V9.5l6.83-9h3.15L21 10.49l8.67 7.41h-3.45l-7.33-6.18-.15 6.18H16.1Z" />
                <path class="logo-container__ak2 cls-1"  data-name="ak"
                    d="m73.21 17.9 8-17.65h.9l8 17.65h-2.88l-2.35-5.77-6.11-.07-2.7 5.84Zm6.34-7.79h4.23l-2.12-4.89ZM89.32.45H92V9.5l6.83-9h3.15l-7.73 10 8.66 7.41h-3.48l-7.33-6.19-.1 6.18h-2.68Z" />
                <path class="logo-container__rest cls-1" data-name="rest"
                    d="M31.37.45H34V17.9h-2.63ZM48 15.51v2.19H37.15V.25h10.52v2.21h-7.91v5.25h6.54v2.18h-6.54v5.62ZM71.81.25v17.5l-.59.18-11-12.09V17.7h-2.6V.2l.59-.2 11 12.16V.25ZM104.27 18l8-17.65h.89l8 17.65h-2.86l-1.64-3.56h-7.88L107.13 18Zm5.44-5.72h6l-3-7Zm13.14-12h2.61V17.7h-2.61Z" />
            </g>
          </svg>
        </span>
        <span class="logo-container__rest period"> .</span>
      </div>
    </div>
    <Header />
    <div class="section-container">
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/css/main";

.loading {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  text-align: center;
  background: main.$bg-black;

  &__content {
    @extend .heading;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
  }
}

.logo-container {
  margin-left: 0.5rem;

  &__svg {
    fill: main.$main;
    height: 24px;
  }
}
.logo-container__rest.period {
  margin-left: 2px;
}

@media (max-width:744px) {
  .loading {
    &__content {
      font-size: main.$heading-smartphone;
    }
  }
  .logo-container {
    &__svg {
      height: 20px;
    }
  }
}
</style>
