<script setup>
import Button from './parts/Button.vue';
const handleSubmit = () => {
    console.log('submit')
}
</script>
<template>
    <section class="section-top" id="section--contact">
        <h1 class="section-top__heading">Feel Free to Get in Touch Me.</h1>
        <div class="section-top__inner-content">
            <form class="form" @submit.prevent="handleSubmit" action="">

                <div class="form__wrapper">
                    <input class="form__name" v-model="name" type="text" placeholder="お名前" required>
                    <input class="form__email" v-model="email" type="text" name="" id="" placeholder="メールアドレス" required>
                </div>

                <textarea class="form__content" v-model="content" placeholder="お問い合わせ内容" rows="1" required></textarea>
                <button>
                    <Button>送信する</Button>
                </button>
            </form>
            <div class="sns-icons">
                <a href="https://www.linkedin.com/in/akienakai1023/" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/aya1023blue" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/nakai.akie" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://github.com/Ayakie" target="_blank" class="sns-icons__icon">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://wimper-1996.hatenablog.com/" target="_blank" class="sns-icons__icon">
                    <img class="hatenablog" src="@/assets/img/top/hatenablog.svg" alt="">
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

.section-top {
    background: main.$bg-gray;
    display: grid;
    // flex-direction: column;
    // justify-content: center;

    &__heading {
        position: relative;
    }
}

.form {
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 800px;
    position: relative;
    text-align: center;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    &__content {
        width: 100%;
        display: block;
        border-bottom: solid 0.8px main.$main;
        padding: 0.6rem;
        text-align: center;
    }

    &__name, &__email {
        width: 43%;
        border-bottom: solid 0.8px main.$main;
        text-align: center;
        padding: 0.6rem;
    }
    &__email {
        right: 0;
    }
}
button {
    margin: clamp(60px, 6vw, 90px);
}

.sns-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &__icon {
        font-size: 20px;
        display: grid;
        place-items: center;
        width: 36px;
        aspect-ratio: 1 /1 ;
        background-color: main.$bg-black;
        border-radius: 50%;
    }
}

.hatenablog {
    max-height: 90%;
}
</style>