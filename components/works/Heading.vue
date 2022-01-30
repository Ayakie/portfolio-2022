<template>
<div class="heading-container">
    <div class="heading-container__circle circle">
        <span class="circle__first-letter">
            <slot name="first-letter"></slot>
        </span>
    </div>
    <span class="heading-container__rest-letters">
        <slot name="rest-letters"></slot>
    </span>
</div>
</template>
<style lang="scss" scoped>
@use '@/assets/css/main';
$circle-size : 50px;
.heading-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;

    &__circle {
        width: $circle-size;
        height: $circle-size;
        border-radius: 50%;
        position: relative;
        background: main.$accent;
    }

    &__rest-letters {
        padding-top: 4px;
        font-size: 22px;
    }
}

.circle {
    &__first-letter {
        position: absolute;
        color: main.$bg-black;
        right: 4px;
        line-height: $circle-size;
        font-size: 32px;
    }
}
</style>