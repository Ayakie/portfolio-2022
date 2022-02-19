<template>
<div>
    <h2 class="heading--name">中井 彬恵</h2>
    <p>1996. 12. 05  生まれ</p>
    <p>医療に関心があり大学では生体材料を研究。<br>
        IT 技術で課題解決に貢献するため専攻の変更を決意し、<br>
        大学 4 年次よりプログラミングを学び始める。<br>
        大学院では機械学習の研究を行い、サービス デザインの重要性を学ぶ。
    </p>
    <p>2021 年 4 月 日本マイクロソフトに技術職（サポート エンジニア）として新卒入社。</p>
    <p>映画鑑賞、読書、芸術鑑賞、ランニングとスノーボードが好き。</p>
</div>
</template>

<style lang="scss">
@use '@/assets/css/main';

.heading--name {
    @extend .heading;
    font-size: 20px;
    font-family: main.$font-family;
    margin-bottom: main.$v-margin-16;
}
</style>