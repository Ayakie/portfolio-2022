<template>
<div class="btn">
    <slot>ホームへ</slot>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';
$width: 40px;
.btn {
    padding: 20px 60px;
    border: 1px solid main.$main;
    cursor: pointer;
    position: relative;
    // overflow-y: hidden;
    &:hover::before {
        content: '';
        position: absolute;
        left: 40%;
        top: 0;
        border: 1px solid main.$secondary;
        height: $width;
        width: $width;
        border-radius: 50%;
        animation: circleAnime 0.7s forwards;
        // opacity: 1;
    }
}

@keyframes circleAnime {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
</style>