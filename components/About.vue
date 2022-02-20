<script setup>
import Bio from './about/Bio.vue'
import Overview from './about/Overview.vue'
import Value from './about/Value.vue'
import Navigation from './parts/Navigation.vue'
import { ref } from 'vue'
import gsap from 'gsap'

const show = ref('overview')

const changePage = (val) => {
    show.value = val
    console.log(val)
}

const currentComponent = computed(() => {
    let componentValue = {}

    if (show.value === 'overview') {

        componentValue['title'] = 'Overview'
        componentValue['content'] = Overview

    } else if (show.value === 'bio') {

        componentValue['title'] = 'Bio'
        componentValue['content'] = Bio

    } else if (show.value === 'value') {

        componentValue['title'] = 'My Value'
        componentValue['content'] = Value
    }
    return componentValue
})

</script>

<template>
    <section class="section-top" id="section--about">
        <!-- <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        name="about"
        > -->
        <h1 class="section-top__heading">Hello. I am AKIE NAKAI.</h1>
        <!-- </transition> -->
        <div class="section-top__inner-content">
            <div class="container--about">
                <div class="block">
                    <div class="circle">
                        <img class="circle__img--black" src="@/assets/img/top/me-black.svg" alt="">
                        <img class="circle__img--color" src="@/assets/img/top/me-color.png" alt="">
                    </div>
                </div>
                <div class="block">
                    <div class="block__item">
                        <h2 class="block__heading heading--sub"> {{ currentComponent.title }} </h2>
                        <Navigation @change = "changePage"/>
                        <transition name="about-fade" mode="out-in">
                            <component :is="currentComponent.content"></component>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';
.container--about {
    @extend %container;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}
// 子のコンポーネントのルート要素に対して定義
.container--navigation {
    margin: main.$v-margin-16 auto;
}

$circle-width: 400px;
$circle-width-mb: 280px;

%img {
    position: absolute;
    bottom: 0;
    height: 75%;
    object-fit: cover;
}
.circle {
    width: $circle-width;
    height: $circle-width;
    border-radius: 50%;
    background: main.$secondary;
    position: relative;
    overflow: hidden;

    &__img--color, &__img--black {
        @extend %img;
    }
    &__img--color {
        display: none;
    }
}

.block {
    flex: 1;
    & p {
        margin-bottom: main.$v-margin-16;
    }

    &__item {
        height: 100%;
    }
}

.about-fade-enter-from, .about-fade-leave-to {
    opacity: 0;
}
.about-fade-enter-active, .about-fade-leave-active {
    transition: all 0.3s ease;
}

.section-top {
    display: grid;
}

@media (max-width: 744px) {
    .container--about {
        flex-direction: column;
        align-items: center;
    }
    .circle {
        width: $circle-width-mb;
        height: $circle-width-mb;
    }
    .heading--sub {
        margin: 1rem 0;
    }
}
</style>