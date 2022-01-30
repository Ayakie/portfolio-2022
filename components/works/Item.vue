<script setup>
</script>

<template>
<div class="scroll-list__item list-item">
    <div class="list-item__card">
        <slot name="img-url"></slot>
    </div>
    <div class="list-item__title">
        <h3><slot name="title"></slot></h3>
        <slot name="link"></slot>
    </div>
    <p class="list-item__description">
        <slot name="description"></slot>
    </p>
    <p class="list-item__period">
        <slot name="period"></slot>
    </p>
    <div class="list-item__icons">
        <slot name="icons"></slot>
    </div>
    <div class="list-item__btn">
        <div class="btn--text">
            <slot name="more"></slot>
        </div>
        <div class="btn--text">
            <slot name="github"></slot>
        </div>
    </div>
</div>
</template>

<style lang="scss">
@use '@/assets/css/main';

.scroll-list__item {
    margin: 0 24px;
}

.list-item {
    width: 500px;
    height: 640px;

    &__card {
        width: 100%;
        height: 350px;
    }

    &__title {
        font-size: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-bottom: 24px;

        & h3 {
            font-family:  transat-text, mr-eaves-modern, poppins, sans-serif;
            font-weight: normal;
            display: inline-block;
        }

        & .material-icons {
            font-size: 23px;
        }
    }

    &__description {
        margin-bottom: 16px;
    }

    &__period {
        font-size: 0.8rem;
        font-weight: 300;
        margin-bottom: 16px;
        &::before{
            font-family: 'Material Icons';
            content:'\e8b5';
            vertical-align: middle;
            margin-right: 4px;
            -webkit-text-stroke: 0.3px main.$bg-black;
        }
    }

    &__icons {
        margin-bottom: 24px;
        & .icon {
            margin-right: 4px;
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

    }
}
</style>