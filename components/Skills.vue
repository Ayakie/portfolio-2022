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
            Things I Can Do. I Love to Discuss and Shape Ideas.
        </h1>
        <!-- paddingの影響でずれる -->
        <div class="">
            <div class="block">
                <div class="block__column">
                    <div class="block__heading heading--sub">
                        Design
                    </div>
                    <div class="row">
                        <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="56"/>
                        Figma
                    </div>
                    <div class="row" v-for="skill in design" :key="skill.text">
                        <i class="icon" :class="skill.name"></i>{{ skill.text }}
                    </div>
                </div>
                <div class="block__column">
                    <div class="block__heading heading--sub">
                        Front
                    </div>
                    <div class="row" v-for="skill in front" :key="skill.text">
                        <i class="icon" :class="skill.name"></i>{{ skill.text }}
                    </div>
                </div>
                <div class="block__column">
                    <div class="block__heading heading--sub">
                        Others
                    </div>
                    <div class="row">
                        <img class="icon" src="~/assets/img/top/communication.svg" width="56">Communication<br>Presentation
                    </div>
                    <div class="row" v-for="skill in others" :key="skill.text">
                        <i class="icon" :class="skill.name"></i>{{ skill.text }}
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="block__column--description">心を動かし、行動のきっかけをもたらす UI/UX デザインを考えることが好きです。作りたいイラストがあれば自分で作成します。</div>
                <div class="block__column--description">コードがあってこそのデザインと考え、デザインを具現化するための技術を日々独学しています。</div>
                <div class="block__column--description">大学院ではPythonを用いた機械学習を研究。研究や授業のプロジェクトではリーダーポジションを多く経験していました。</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

.section-top {
    background: main.$bg-gray;
    display: grid;
}
%__column {
    padding: 0 20px;
}
.block {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-items: space-between;
    align-content: space-around;

    &__column {
        @extend %__column;

        &--description {
            @extend %__column;
            font-size: 15px;
        }
    }
}

.icon {
    font-size: 56px;
    margin-right: 10px;
}
.row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-family: Monaco, Andale Mono, PT Mono;
    font-size: 14px;
}

.heading--sub {
    margin-bottom: 4rem;
}

@media (max-width: 744px) {
    .block {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>