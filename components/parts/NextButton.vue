<template>
<div class="text">
    <slot>See Next</slot>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

// $text-width: 100px;
$left-position: 4px;
$height-position: 4px;
%line-property {
    content: '';
    position:absolute;
    height: 1px;
    background: main.$main;
}
.text {
    position: relative;
    display: inline-block;
    padding: 4px 16px;
    margin: 0 8px;
    cursor: pointer;

    &::before {
        @extend %line-property;
        left: 25%;
        bottom: -$height-position;
        width: 75%;
        transition: all 0.2s;
    }

    &::after {
        @extend %line-property;
        right: 0;
        bottom: -$height-position;
        transform: rotate(30deg);
        transform-origin: right;
        width: 16px;
        transition: all 0.2s;
    }

    &:hover::after {
        right: -10%;
    }
    &:hover::before {
        width: 85%;
    }
}
@media (max-width: 744px) {
    .text {
        font-size: 12px;
    }
}
</style>