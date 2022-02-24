<script setup>
 const design = ref([
    //  {name: '<img class="icon" src="https://cdn.jsdnameivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="56"/>', text: 'Figma'},
     {name: 'devicon-illustrator-line colored', text: 'Illustrator'},
     {name: 'devicon-photoshop-line colored', text: 'Photoshop'},
 ])

 const front = ref([
     {name: 'devicon-html5-plain colored', text: 'HTML'},
     {name: 'devicon-css3-plain colored', text: 'CSS'},
     {name: 'devicon-javascript-plain colored', text: 'JavaScript'},
     {name: 'devicon-sass-original colored', text: 'Sass'},
     {name: 'devicon-vuejs-plain colored', text: 'Vue.js'},
     {name: 'devicon-nuxtjs-plain colored', text: 'Nuxt.js'}
 ])

const others = ref([
    {name: 'devicon-git-plain colored', text: 'Git'},
    {name: 'devicon-firebase-plain colored', text: 'Firebase'},
    {name: 'devicon-azure-plain colored', text: 'Azure'},
    {name: 'devicon-python-plain colored', text: 'Python'},
    {name: 'devicon-php-plain colored', text: 'PHP'}
])

</script>
<template>
    <section class="section-top" id="section--skills">
        <h1 class="section-top__heading">
            Things I Can Do. I Love to <br class="desktop-hidden"> Discuss and Shape Ideas.
        </h1>
        <!-- paddingの影響でずれる -->
        <div class="">
            <div class="container">
                <div class="container__column column">
                    <div class="column__heading heading--sub">
                        Design
                    </div>
                    <div class="column__content content">
                        <!-- icon -->
                        <div class="content__icons">
                            <div class="content__icons__row">
                                <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="56"/>
                                Figma
                            </div>
                            <div class="content__icons__row" v-for="skill in design" :key="skill.text">
                                <i class="icon" :class="skill.name"></i>{{ skill.text }}
                            </div>
                        </div>
                        <div class="content__description">心を動かし、行動のきっかけをもたらす UI/UX デザインを考えることが好きです。作りたいイラストがあれば自分で作成します。</div>
                    </div>
                </div>
                <div class="container__column column">
                    <div class="column__heading heading--sub">
                        Fronted
                    </div>
                    <div class="column__content content">
                        <div class="content__icons">
                            <div class="content__icons__row" v-for="skill in front" :key="skill.text">
                                <i class="icon" :class="skill.name"></i>{{ skill.text }}
                            </div>
                        </div>
                        <div class="content__description">コードがあってこそのデザインと考え、デザインを具現化するための技術を日々独学しています。</div>
                    </div>
                </div>
                <div class="container__column column">
                    <div class="column__heading heading--sub">
                        Others
                    </div>
                    <div class="column__content content">
                        <div class="content__icons">
                            <div class="content__icons__row">
                                <img class="icon" src="~/assets/img/top/communication.svg" width="56">Communication<br>Presentation
                            </div>
                            <div class="content__icons__row" v-for="skill in others" :key="skill.text">
                                <i class="icon" :class="skill.name"></i>{{ skill.text }}
                            </div>
                        </div>
                        <div class="content__description">大学院ではPythonを用いた機械学習を研究。研究や授業のプロジェクトではリーダーポジションを多く経験していました。</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

.section-top {
    background: main.$bg-gray;
    
    &__heading {
        padding-bottom: clamp(32px,6.5vh,70px)
    }
}
%__column {
    padding: 0 20px;
}
.container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-items: space-between;
    align-content: space-around;
}
.content {
    @extend %__column;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__icons {
        height: 440px
    }
    
    &__description {
        @extend %__column;
        font-size: 15px;

    }
}

.icon {
    font-size: 56px;
    margin-right: 10px;
}
.content__icons {

    &__row {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        font-family: Monaco, Andale Mono, PT Mono;
        font-size: 14px;
        text-align: center;
    }
}

.heading--sub {
    margin-bottom: 4rem;
}

@media (max-width: 744px) {
    .container {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
    }
    .heading--sub {
        margin-bottom: 1rem;
    }
    
    .content__icons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: auto;
        gap: 0 16px;

        &__row {
            flex-direction: column;
            font-size: 12px;
        }

        & .icon {
            margin-right: 0;
            margin-bottom: 4px;
        }
    }
}
@media(min-width: 744px) {
    .desktop-hidden {
        display: none;
    }
}
</style>