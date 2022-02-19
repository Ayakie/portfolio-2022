<template>
    <span class="tooltip-text">
        <slot></slot>
    </span>
</template>
<style lang="scss">
@use '@/assets/css/main';

.tooltip {
    position: relative;
    cursor: pointer;
}

.tooltip-text {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    display: inline-block;
    padding: 5px;
    white-space: nowrap;
    font-size: 0.8rem;
    line-height: 1.3;
    background: main.$bg-gray;
    color: #fff;
    border-radius: 3px;
    transition: all 0.4s ease-in;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -13px;
        margin-left: -7px;
        border: 7px solid transparent;
        border-top: 7px solid main.$bg-gray;
    }
}

.tooltip:hover .tooltip-text {
    opacity: 1;
    visibility: visible;
}
</style>