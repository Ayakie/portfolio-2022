<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Item from './works/Item.vue';

const workItems = [
    {
        img: "/assets/img/make-it/make-it-top.png",
        title: 'Make It',
        link: 'https://dragonash-257b7.web.app/',
        description: 'あなたの目標達成のためのタスク管理アプリ',
        period: 'Oct 2021（1 month）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored', 'devicon-vuejs-plain colored', 'devicon-firebase-plain colored'],
        more: 'make-it',
        github: 'https://github.com/Ayakie/make-it'
    },
    {
        img: '/assets/img/keep-it/keep-it-top.png',
        title: 'Keep It',
        link: 'https://dragonash-keep-it.web.app/',
        description: '残したいことを美しく記録するギャラリーサイトアプリ',
        period: 'Jan 2022（2 weeks）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-sass-original colored', 'devicon-javascript-plain colored', 'devicon-vuejs-plain colored', 'devicon-firebase-plain colored'],
        more: 'keep-it',
        github: 'https://github.com/Ayakie/keep-it'
    },
    {
        img: '/assets/img/service-sympo.png',
        title: 'My Portfolio（This Site）',
        link: '',
        description: '「月夜」をテーマに作成',
        period: 'Jan 2022（2 weeks）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-sass-original colored', 'devicon-javascript-plain colored', 'devicon-vuejs-plain colored','devicon-nuxtjs-plain colored'],
        more: '',
        github: 'https://github.com/Ayakie/make-it'
    },
    {
        img: '/assets/img/service-sympo.png',
        title: '大学院 シンポジウム 特設 Web サイト',
        link: 'https://www.sk.tsukuba.ac.jp/~msesympo/2020/',
        description: '筑波大学サービス工学学位プログラムにおける、外部向け研究発表シンポジウムがオンライン開催となったのに伴い、特設Webサイトを作成',
        period: 'Jan 2021（1 month）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', "devicon-jquery-plain-wordmark", 'devicon-php-plain colored'],
        more: '',
        github: 'https://github.com/Ayakie/mse_sympo'
    },

    ]
const scrollLists = () => {
    
    gsap.to(".scroll-list", {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '#section--works',
            start: '20% 114px',
            end:  '+=' + document.querySelector(".scroll-list").offsetWidth + '+=400',
            scrub: 1,
            // pin: true,
            // markers: true
            // id: "horizontal-scroll"
        }
    })
    ScrollTrigger.create({
        trigger: '#section--works',
        pin: true,
        markers: true,
        id: "horizontal-scroll"
    })
}

onMounted(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)
    }
    nextTick(() => {

        console.log('mounted top')
        scrollLists();
        ScrollTrigger.getById("horizontal-scroll").enable();
        console.log('updated')
    })
})

onUnmounted(() => {
    ScrollTrigger.getById("horizontal-scroll").disable()
    console.log('unmount')
})


</script>

<script>

</script>

<template>
    <section class="section--top" id="section--works">
        <h1 class="section--top__heading">Things I Created From Design.</h1>

        <div class="section--top__inner-content">

            <!-- リスト -->
            <div class="wrapper">
                <div class="wrapper__scroll-list scroll-list">
                    <div v-for="(item, idx) in workItems" :key="idx">
                        <Item>
                            <template #img-url>
                                <img :src="item.img" alt="">
                            </template>
                            <template #title>{{ item.title }}</template>
                            <template #link>
                                <a :href="item.link" target="_blank"><span class="material-icons" v-if="item.link">open_in_new</span></a>
                            </template>
                            <template #description> {{ item.description }} </template>
                            <template #period> {{ item.period }} </template>
                            <template #icons>
                                <i class="icon" :class="icon" v-for="icon in item.icons" :key="icon"></i>
                            </template>
                            <template #more v-if="item.more">
                                <NuxtLink :to="'/works/' + item.more">
                                    <span>More</span>
                                    <span class="material-icons">arrow_forward_ios</span>
                                </NuxtLink>
                            </template>
                            <template #github>
                                <a :href="item.github" target="_blank">
                                    <span>Github</span>
                                    <i class="devicon-github-original"></i>
                                </a>
                            </template>
                        </Item>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    position: relative;
    height: 700px;

    &__scroll-list {
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
    }
}
</style>