<template>
<div class="item">
    <div class="item__title">
        <slot name="title"></slot>
    </div>
    <div class="item__description">
        <slot name="description"></slot>
    </div>
    <div class="item__imgs imgs-container">
        <slot name="imgs"></slot>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

.item {
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
    }

    &__imgs {
        width: 75%;
        text-align: center;
    }
}
</style>