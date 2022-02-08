<script setup>
import Heading from '@/components/works/Heading.vue'
import { useSlider } from '~~/composables/useSlider';
import Process from './Process.vue';
import { nextTick } from 'vue';
import gsap from 'gsap';
import NextButton from '~~/components/parts/NextButton.vue';
import Button from '~~/components/parts/Button.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PrevButton from '~~/components/parts/PrevButton.vue';

onMounted(() => {
    console.log('mounted')
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)
    }
    setTimeout(() => {
        useSlider('.buttons__next--process', '.buttons__prev--process', '.process-wrapper__slide-item', '.process-wrapper')
        useSlider('.buttons__next--features', '.buttons__prev--features', '.features-wrapper__slide-item', '.features-wrapper')
    }, 1000)
})

</script>
<template>
    <div class="section-container--work-item">
        <section class="section--imgtext">
            <div class="section--imgtext__img">
                <h1 class="img__title">Keep It</h1>
                <div>
                    <img src="@/assets/img/keep-it/keep-it-2.png" alt="">
                </div>
            </div>
            <div class="section--imgtext__text text">
                <Heading>
                    <template #first-letter>B</template>
                    <template #rest-letters>ackground</template>
                </Heading>
                <div>
                    <p>日々の生活には Inspiration がたくさんあります。</p>
                    <p>
                        <ul>
                            <li>例えばふと目に入った景色。</li>
                            <li>展覧会で初めて知ったアーティストの作品。</li>
                            <li>本を読んでて見つけた残しておきたい言葉。</li>
                            <li>居酒屋で初めて飲んだ絶品の日本酒。</li>
                        </ul>
                    </p>
                    <p>デジタル世界の Inspiration をメモとして記録するアプリはたくさんあるけど、<br>
                    日々の生活の中で出会ったコトバ・モノを、一箇所に残したい。</p>
                    <p>そんな思いから、この「Keep It」を作りました。</p>
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
                        <!-- <p>課題感（Pain）を起点に既存サービスの問題点（Competition）を挙げ、本アプリにて達成したいことを明確にします。<br>
                        OOUIの考え方に基づき、タスクからオブジェクトを洗い出し、インタラクションモデルを構想しました。</p> -->
                        <!-- 2カラム -->
                        <div class="strategy-container">
                            <div class="strategy-container__column--pain">
                                <h3>Pain</h3>
                                <ul>
                                    <li>日々の日常で出会ったコトバ・モノをその場でシンプルにメモする手段がない</li>
                                    <li>コトバ単体だけでなく、写真と一緒に視覚的にメモしたい</li>
                                    <li>メモして終わりになりがち。内容をすぐ忘れてしまう</li>
                                </ul>
                            </div>
                            <div class="strategy-container__column--competition">
                                <h3>Competition</h3>
                                <ol>
                                    <li>Pinterest
                                        <ul>
                                            <li>画像中心に記録する媒体であり、コトバだけを簡単にメモできない</li>
                                            <li>Notesやコメントなど機能が多く、メモをどこに残せば良いのかよくわからない。残しづらい</li>
                                            <li>レコメンド機能が正直いらない。自分の純粋なメモする手段として残したい。</li>
                                        </ul>
                                    </li>
                                    <li>Notion
                                        <ul>
                                            <li>ドキュメントの整理には優れているものの、クイックにメモを残したいシナリオに向かない</li>
                                            <li>カテゴリごとに階層的にページを追加するため、後から見返した時に目的のページまで辿り着きにくい</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img--model" src="@/assets/img/keep-it/model.png" alt="">
                        <figcaption>OOUIの考え方に基づき、タスクからオブジェクトを洗い出し、インタラクションモデルを構想</figcaption>
                    </template>
                </Process>
                <Process class="process-wrapper__slide-item">
                    <template #title>「ギャラリー」をコンセプトとしたトンマナの選定</template>
                    <template #description>
                        <p>
                            先の Pain/Competition を克服するためのデザインコンセプトとして「ギャラリー風」のメモ アプリを作成することにしました。(理由は次項 Featuresもご覧ください) <br>
                            海外の美術館/図書館からインスピレーションを得て、まずは全体のモードを形作るバックグラウンド カラーとして「ネイビー 3B5066」に決定しました。<br>
                            その色を軸に、文字色のメインカラー、アクセントカラーを選定していきました。
                        </p>
                        <p>
                            なお、このアプリで用いているイラストは、<a href="https://www.linustock.com/" target="_blank">Linstock</a> さんのイラストを一部（額縁）使いつつ、Illustrator で作成しています。
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img--color" src="@/assets/img/keep-it/color.png" alt="">
                    </template>
                </Process>
                <Process class="process-wrapper__slide-item">
                    <template #title>モバイル ファーストでのUIデザイン</template>
                    <template #description>
                        <p>
                            Keep Itの利用シナリオは日々の生活の中にあるため、スマートフォンでの利用を想定し、モバイル ファーストでUIデザインと実装を行いました。<br>
                            デザインにあたってはまず、Procreateを使い手書きでワイヤーフレームを作成しイメージを膨らませたあと、Figmaを用いてデザインに落とし込みました。
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/keep-it/ui.png" alt="">
                        <figcaption>使用ツール：Procreate(一番左) / Figma</figcaption>
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
                <!-- スライドx3 -->
                <Process class="features-wrapper__slide-item s1">
                    <template #title>自分のメモを振り返りたくなるようなデザイン</template>
                    <template #description>
                        <p>
                            ギャラリー風のデザインにした背景には、Pain「メモして終わりになりがち」があります。<br>
                            ただ、良いと思ったものをメモするだけでは意味がなく、それを定期的に振り返り、自分のものとして咀嚼しなくては勿体ない。<br>
                        </p>
                        <p>
                            定期的に振り返るには、「振り返りたくなるようなデザイン」が必要と考えました。<br>
                            ではどんなデザインかと考えたときに、自然と、人々に作品を「魅せる」ギャラリーのような、美しいデザインにしようと思いました。
                        </p>
                        <p>そのためこのアプリでは、「ギャラリー」風のデザインを目指し、以下の工夫を行いました。</p>
                        <p>
                            <ol>
                                <li>メモそのものを作品と見立て、横スクロールを採用</li>
                                <li>適度な量の情報を配置し、一見して自分がメモした内容がわかるようにする</li>
                                <li>カテゴリを表現するユニークなフォントを設定</li>
                            </ol>
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img--slide" src="@/assets/img/keep-it/slide.png" alt="">
                    </template>
                </Process>
                <Process class="features-wrapper__slide-item">
                    <template #title>スマートフォンでメモをすぐに作成できるようにタブバーを配置</template>
                    <template #description>
                        <p>
                            「作成する」ボタンを下部にタブバーとして固定し、ワンクリックでメモの作成画面に遷移します。<br>
                            アプリ起動後のアクションとして、メモ作成がスムーズにできるようデザインしました。
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/keep-it/hand.png" alt="">
                    </template>
                </Process>
                <Process class="features-wrapper__slide-item">
                    <template #title>「ギャラリー」というテーマに沿った、遊び心あるコンポーネントを作成</template>
                    <template #description>
                        <p>
                            404 Not Found のページや、画像アップロード時の Pending 画面は、<br>
                            「ギャラリー」というテーマに沿ったイラストを自作し、アプリ利用時のユーザー体験の向上を目指しました。
                        </p>
                    </template>
                    <template #imgs>
                        <img class="imgs-container__img" src="@/assets/img/keep-it/illustration.png" alt="">
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
            <p>
                Keep It では真新しい機能はありませんが、「UI / UX デザイン」にこだわったアプリケーションです。<br>
                すぐにメモを残せ、かつ定期的に振り返りたくなるような、美しいギャラリー風のアプリケーションを目指しました。
            </p>
            <p>
                技術的には、ユーザー体験を向上させるために、Vue Transition / Animation を多く取り入れました。<br>
                また新しく Sass を取り入れ、BEM 命名規則に則ったメンテナンスしやすい CSS 実装を意識しました。
            </p>
        </section>

        <div class="container-btns">
            <NuxtLink to="/works/make-it">
                <PrevButton class="container-btns__prev"></PrevButton>
            </NuxtLink>
            <NuxtLink to="/#section--works">
                <Button class="container-btns__home"></Button>
            </NuxtLink>
            <NuxtLink to="/">
                <NextButton class="container-btns__next"></NextButton>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';
// scopedごとに定義でOK
.process-wrapper {
    @extend %slider-wrapper;
    &__buttons {
        @extend %slider-buttons;
    }
}
 .features-wrapper {
    @extend %slider-wrapper;
    height: 670px;
    &__buttons {
        @extend %slider-buttons;
    }
}

.strategy-container {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    width: 100%;

    &__column--pain {
        width: 42%;
    }

    &__column--competition {
        width: 52%;
    }
    & h3 {
        text-align: center;
    }
}

.imgs-container {
    &__img {
        max-height: 450px;

        &--model, &--slide {
            max-width: 80%;
        }

        &--color {
            max-height: 300px;
        }
    }
}
</style>