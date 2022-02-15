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
        password: 'email: test@contoso.com / password: 123456 でログイン可能',
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
        password: 'email: test@contoso.com / password: 123456 でログイン可能',
        period: 'Jan 2022（2 weeks）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-sass-original colored', 'devicon-javascript-plain colored', 'devicon-vuejs-plain colored', 'devicon-firebase-plain colored'],
        more: 'keep-it',
        github: 'https://github.com/Ayakie/keep-it'
    },
    {
        img: '/assets/img/top/service-sympo.png',
        title: 'My Portfolio（This Site）',
        link: '',
        description: '「月夜」をテーマに作成',
        period: 'Jan 2022（2 weeks）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-sass-original colored', 'devicon-javascript-plain colored', 'devicon-vuejs-plain colored','devicon-nuxtjs-plain colored'],
        more: '',
        github: 'https://github.com/Ayakie/make-it'
    },
    {
        img: '/assets/img/top/service-sympo.png',
        title: '大学院 シンポジウム 特設 Web サイト',
        link: 'https://www.sk.tsukuba.ac.jp/~msesympo/2020/',
        description: '2020年度筑波大学サービス工学シンポジウム（外部向け研究発表会）の特設Webサイトを作成',
        period: 'Jan 2021（1 month）',
        icons: ['devicon-html5-plain colored', 'devicon-css3-plain colored', "devicon-jquery-plain-wordmark", 'devicon-php-plain colored'],
        more: '',
        github: 'https://github.com/Ayakie/mse_sympo'
    },

    ]
const scrollLists = () => {
    const listWrapperEl = document.querySelector('.wrapper__scroll-list')

    gsap.to(".scroll-list", {
        xPercent: -60,
        ease: 'none',
        scrollTrigger: {
            trigger: '#section--works',
            start: 'top top',
            end:  () =>  `+=${listWrapperEl.offsetWidth}`,
            scrub: 0.7,
            pin: true,
            // markers: true,
            id: "horizontal-scroll",
            invalidateOnRefresh: true,
        }
    })
}

onMounted(() => {
    setTimeout(() => {
        scrollLists()
    }, 1000)
})

onBeforeUnmount(() => {
    ScrollTrigger.getById("horizontal-scroll").disable()
    // console.log('unmount')
})


</script>

<template>
    <section class="section-top" id="section--works">
        <h1 class="section-top__heading">Things I Created From Design.</h1>

        <div class="section-top__inner-content">

            <!-- リスト -->
            <div class="wrapper">
                <div class="wrapper__scroll-list scroll-list">
                    <div v-for="(item, idx) in workItems" :key="idx">
                        <Item>
                            <template #img-url>
                                <img :src="item.img" alt="">
                            </template>
                            <template #title>
                                <a :href="item.link" target="_blank">
                                    <h3>{{ item.title }}</h3>
                                    <span class="material-icons open" v-if="item.link">open_in_new</span>
                                </a>
                            </template>
                            <template #description> {{ item.description }} </template>
                            <template #password> {{ item.password }} </template>
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
@use "@/assets/css/main";

.section-top__heading {
    padding-bottom: clamp(60px, 6vw, 90px);
}

.wrapper {
    width: 100%;
    position: relative;
    // height: 700px;

    &__scroll-list {
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        padding: 0 40px;
    }
}
.material-icons {
    transition: all 0.3s;
}
a {
    
    &:hover .material-icons, &:hover .devicon-github-original {
        color: main.$accent;
        transform: translate(5%);
    }
}
</style>