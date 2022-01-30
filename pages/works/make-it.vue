<script setup>
import Heading from '@/components/works/Heading.vue'
import { useSlider } from '~~/composables/useSlider';
import Process from './Process.vue';
import { nextTick } from 'vue';
import gsap from 'gsap';
import NextButton from '~~/components/parts/NextButton.vue';
import Button from '~~/components/parts/Button.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
    console.log('mounted')
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)
    }
    nextTick(() => {
        useSlider('.buttons__next--process', '.buttons__prev--process', '.process-wrapper__slide-item', '.process-wrapper')
        useSlider('.buttons__next--features', '.buttons__prev--features', '.features-wrapper__slide-item', '.features-wrapper')
    })
})

</script>
<template>
    <div class="section-container--work-item">
        <section class="section--imgtext">
            <div class="section--imgtext__img block-img">
                <h1 class="img__title">Make It</h1>
                <div>
                    <img src="@/assets/img/make-it/make-it-2.png" alt="">
                </div>
            </div>
            <div class="section--imgtext__text text">
                <Heading>
                    <template #first-letter>B</template>
                    <template #rest-letters>ackground</template>
                </Heading>
                <div>
                    <p>
                        目標を達成することは難しい。
                        「目標達成するには」をテーマにした自己啓発本ではみんな口を揃えてこう言う。
                    </p>
                    <p>
                        <ul>
                            <li>漠然とした目標ではなく具体的な目標にすること</li>
                            <li>目標を達成した時の自分を想像すること</li>
                            <li>まずは達成しやすい簡単なステップに細分化すること</li>
                        </ul>
                    </p>
                    <p>わかっている。でもできない。なぜ？<br>そもそも行動する前に、目標の細分化だの、自分でやること多すぎない？</p>
                    <p>Make It は、そんなペインを手助けするために生まれました。</p>
                </div>
            </div>
        </section>

        <!-- Design Process -->
        <section class="section--slide">
            <Heading class="section--slide__heading">
                <template #first-letter>D</template>
                <template #rest-letters>esign Process</template>
            </Heading>
            <!-- スライドブロック -->
            <div class="process-wrapper">
                <!-- buttons -->
                <div class="process-wrapper__buttons buttons">
                    <button class="buttons__prev--process">
                        <span class="material-icons">arrow_back_ios</span>
                    </button>
                    <button class="buttons__next--process">
                        <span class="material-icons">arrow_forward_ios</span>
                    </button>
                </div>
                <!-- スライドx5 -->
                <Process class="process-wrapper__slide-item s1">
                    <template #title>戦略 / 要件の設定</template>
                    <template #description>
                        <p>課題感（Pain）を起点に既存サービスの問題点（Competition）を挙げ、本アプリにて達成したいことを明確にします。<br>
                        OOUIの考え方に基づき、タスクからオブジェクトを洗い出し、インタラクションモデルを構想しました。</p>
                        <!-- 2カラム -->
                        <div class="strategy-container">
                            <div class="strategy-container__column">
                                <h3>Pain</h3>
                                <ul>
                                    <li>目標達成日までの残り時間がわからず、最終ゴールをイメージしにくい。</li>
                                    <li>日々何をすればいいのかイメージがつかない</li>
                                    <li>ゴールを日頃から意識できていないから、切迫感がなく、モチベーションを維持しにくい。</li>
                                </ul>
                            </div>
                            <div class="strategy-container__column">
                                <h3>Competition</h3>
                                <ol>
                                    <li>StudyPlus: スマートフォン アプリ
                                        <ul>
                                            <li>スマートフォンアプリのためWebでPCを用いて記録できない</li>
                                            <li>目標日までにやるべきことが設定しにくい</li>
                                        </ul>
                                    </li>
                                    <li>Google Task
                                        <ul>
                                            <li>気軽にタスク作成できるものの、個々のタスクの振り返りができない</li>
                                            <li>元々使っているGoogleカレンダー内の予定と混合してしまい、見にくくなってしまう</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </template>
                    <template #imgs>
                        <img src="@/assets/img/make-it/make-it-model.png" alt="">
                    </template>
                </Process>
                <Process class="process-wrapper__slide-item">
                    <template #title>ワイヤーフレームの作成</template>
                    <template #description>
                        <p>Figmaなどのツールで画面設計を行う前に、要件を手書きのワイヤーフレームに落とし込み、デザインを膨らませます。</p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/wireframe.png" alt="">
                    </template>
                    <template></template>
                </Process>
                <Process class="process-wrapper__slide-item">
                    <template #title>「ポジティブ」をコンセプトとしたトンマナの選定</template>
                    <template #description>
                        <p>目標達成に向けポジティブな気持ちになれるようなオレンジをアクセントカラーに決定。<br>
                            アクセント カラーを生かす補色をメインカラーにし、
                            背景色は優しい印象となるグレーを選択しました。<br>
                            また、イラストには遊び心のある SASHIE を起用させていただきました。</p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img--color" src="@/assets/img/make-it/color.png" alt="">
                    </template>
                </Process>
                <Process class="process-wrapper__slide-item">
                    <template #title>UIデザインと画面遷移/データ構造の設計</template>
                    <template #description>
                        <p>要件と手書きのワイヤーフレーム、トンマナを基にFigmaでUIを作成。<br>
                        実装に入る前に、画面遷移からVue.jsのアプリ構成、Firebaseのデータ構造を事前に設計しました。</p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/ui.png" alt="">
                    </template>
                </Process>
                <Process class="process-wrapper__slide-item">
                    <template #title>実装と検証</template>
                    <template #description>
                        <p></p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/wireframe.png" alt="">
                    </template>
                </Process>
            </div>
            <!-- スライドブロックここまで -->
        </section>

        <!-- Features -->
        <section class="section--slide">
            <Heading class="section--slide__heading">
                <template #first-letter>F</template>
                <template #rest-letters>eatures</template>
            </Heading>
            <!-- スライドブロック -->
            <div class="features-wrapper">
                <!-- buttons -->
                <div class="features-wrapper__buttons buttons">
                    <button class="buttons__prev--features">
                        <span class="material-icons">arrow_back_ios</span>
                    </button>
                    <button class="buttons__next--features">
                        <span class="material-icons">arrow_forward_ios</span>
                    </button>
                </div>
                <!-- スライドx5 -->
                <Process class="features-wrapper__slide-item s1">
                    <template #title>残り時間のカウントダウン</template>
                    <template #description>
                        <p>目標達成宣言をメインビジュアルに設定しました。「願望」ではなく「結果」を宣言することがポイントです。<br>
                        また、目標達成予定日までのカウントダウン表示することで、<br>
                        ユーザーに残り時間を意識させ、切迫感から行動を促すことを目指しました。</p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/countdown.png" alt="">
                    </template>
                </Process>
                <Process class="features-wrapper__slide-item">
                    <template #title>「最終目標」→ 「今やるべきタスク」へブレークダウンまでのUX/UI設計</template>
                    <template #description>
                        <p>
                            漠然とした目標を設定するだけでは、今取るべき行動が見えません。<br>
                            最終目標達成にむけ、スパンを設定し、具体的なステップに落とし込むことが重要です。<br>
                            そこで、
                        </p>
                        <ol>
                            <li>最終目標を設定</li>
                            <li>途中ステップの「中間目標」を作成</li>
                            <li>その中間目標を達成するための「今からやること」リストを作成</li>
                        </ol>
                        <p>という、今やるべきタスクまでブレークダウンできるような動線を設計しました。</p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/breakdown.png" alt="">
                    </template>
                </Process>
                <Process class="features-wrapper__slide-item">
                    <template #title>カレンダー連動による日々の記録の可視化</template>
                    <template #description>
                        <p>モチベーション維持には、「自分はちゃんと日々前に進んでいる！」という感覚を持つ必要があります。<br>
                        完了したタスクはカレンダーコンポーネントと連動させ、色を赤→緑に変化させることで、日々の努力を可視化しました。<br>
                        </p>
                        <p>なお、このカレンダー コンポーネントだけ、外部ライブラリを使用させていただきました。</p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img--calender" src="@/assets/img/make-it/calender.png" alt="">
                    </template>
                </Process>
                <Process class="features-wrapper__slide-item">
                    <template #title>タグ付けによるカテゴリ分けと振り返り</template>
                    <template #description>
                        <p>
                            「今やるべきこと」は簡単なタスクも気軽に作成できることが狙いなので、ワンクリックで簡単に破棄・完了できるようボタンを配置しました。
                        </p>
                        <p>
                            もちろん、各タスクごとに詳細な振り返りと分類ができるよう、メモ書きや複数のタグ付けによるフィルタリング機能も実装しました。
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/tags.png" alt="">
                    </template>
                </Process>
                <Process class="features-wrapper__slide-item">
                    <template #title>おまけ</template>
                    <template #description>
                        <p>SASHIEさんのユニークなイラストに惹かれたので、404ページで遊んでみました。<br>
                        Make-It に何回か適当な文字列をつけてアクセスしてみてください。
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/make-it/404.png" alt="">
                    </template>
                </Process>

            </div>
        </section>
        <!-- Post Script -->
        <section class="section--post-script">
            <Heading class="section--slide__heading">
                <template #first-letter>P</template>
                <template #rest-letters>ost Script</template>
            </Heading>
            <p class="section--post-script__sub-title">あとがき</p>
            <p>本アプリケーションは、自身が初めて作成した（自分のための）SPA アプリケーションです。<br>
            シンプルな機能ながら、タスクの CRUD 機能、タグ検索機能、カレンダーとの連携など、<br>その時点で学んだ Vue3 と JavaScript の理解を全て盛り込みました。<br>
            また、ボタンなどの装飾も自装し、CSS への理解を深めることも狙いとしています。</p>
            <p>薄々お気づきかもしれませんが、自分のために作ったアプリでもあり、私自身日々の開発におけるタスク管理に活用しています。</p>
            <p>ここでの学びをさらに発展させ、続くアプリ「 Keep It 」を作りました。ぜひご覧ください。</p>
        </section>

        <div class="section-container--work-item__btns container-btns">
            <NuxtLink to="/">
                <Button class="container-btns__home"></Button>
            </NuxtLink>
            <NextButton class="container-btns__next"></NextButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';
.block-img {
    &__title {
        text-align: center;
        margin: 24px auto;
    }
}
p {
    margin: 16px auto;
}
h1 {
    text-align: center;
}
.process-wrapper, .features-wrapper {
    @extend %slider;
    &__buttons {
        @extend %slider-buttons;
    }
}
.strategy-container {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    width: 100%;

    &__column {
        width: 40%;
    }
}

// scopedにしてるのでProcess.vueのスタイルは適用されない
.imgs-container {
    &__img {
        max-height: 450px;

        &--color, &--calender {
            max-height: 250px;
        }
    }
}
.section--post-script {
    &__sub-title {
        font-size: 20px;
    }
    & p {
        text-align: center;
        font-weight: 200;
    }
}
</style>