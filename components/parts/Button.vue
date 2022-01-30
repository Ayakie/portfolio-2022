<template>
<div class="btn">
    <slot>ホームへ</slot>
</div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';
.btn {
    padding: 20px 70px;
    border: 1px solid main.$main;
    cursor: pointer;
}
</style>