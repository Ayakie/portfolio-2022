<template>
<div class="text">
    <slot>See Prev</slot>
</div>
</template>

<style lang="scss" scoped>
@use "@/assets/css/main";

%line-property {
    content: '';
    position: absolute;
    height: 1px;
    background: main.$main;
}
$left-position: 4px;
$height-position: 4px;
.text {
    position: relative;
    display: inline-block;
    padding: 4px 16px;
    margin: 0 8px;
    cursor: pointer;

    &::before {
        @extend %line-property;
        width: 75%;
        right: 30%;
        bottom: -$height-position;
        transition: all 0.2s;
    }

    &::after {
        @extend %line-property;
        left: -5%;
        bottom: -$height-position;
        transform: rotate(-30deg);
        transform-origin: left;
        width: 16px;
        transition: all 0.2s;
    }

    &:hover::after {
        left: -15%;
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