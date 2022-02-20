<template>
<div class="slide-item">
    <div class="slide-item__title">
        <slot name="title"></slot>
    </div>
    <div class="slide-item__description">
        <slot name="description"></slot>
    </div>
    <figure class="slide-item__imgs">
        <slot name="imgs"></slot>
    </figure>
</div>
</template>

<style lang="scss">
@use '@/assets/css/main';

.slide-item {
    // 幅は要調整
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    background: main.$bg-black;
    transform: translateX(100%);

    &__title {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        margin-bottom: 16px;
    }

    &__imgs {
        margin: 16px auto;
        width: 80%;
        text-align: center;

        & figcaption {
            color: main.$secondary;
            margin-top: 8px;
        }
    }

    &__description {
        padding: 0 1rem;
    }
}
</style>