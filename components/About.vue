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

const title = computed(() => {
    if (show.value === 'overview') {
        return 'Overview'
    } else if (show.value === 'bio') {
        return 'Bio'
    } else if (show.value === 'value') {
        return 'My Value'
    }
})

</script>

<template>
    <section class="section--top" id="section--about">
        <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        >
            <h1 class="section--top__heading">Hello. I am AKIE NAKAI.</h1>
        </transition>
        <div class="section--top__inner-content">
            <div class="container--about">
                <div class="block">
                    <div class="circle"></div>
                </div>
                <div class="block">
                    <div class="block__item">
                        <h2 class="block__heading heading--sub"> {{ title }} </h2>
                        <Navigation @change = "changePage"/>

                        <Overview v-if="show === 'overview'"/>
                        <Bio v-if="show === 'bio'"/>
                        <Value v-if="show === 'value'"/>
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
$circle-width: 400px;
$circle-width-mb: 280px;

.circle {
    width: $circle-width;
    height: $circle-width;
    border-radius: 50%;
    background: main.$accent;
}

.block {
    flex: 1;
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
}
</style>