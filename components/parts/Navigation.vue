<script setup>

const currentPage = ref('overview')
const emit = defineEmits(['change'])

const handleClick = (val) => {
    currentPage.value = val
    emit('change', val)
}

</script>

<template>
    <div class="container--navigation">
        <div class="circle-wrapper"   @click="handleClick('overview')">
            <div class="circle" :class="{active: currentPage === 'overview'}"  @click="handleClick('overview')">
                <div class="circle--inner"></div>
            </div>
        </div>
        <div class="circle-wrapper"  @click="handleClick('bio')">
            <div class="circle" :class="{active: currentPage === 'bio'}">
                <div class="circle--inner"></div>
            </div>
        </div>
        <div class="circle-wrapper" @click="handleClick('value')">
            <div class="circle" :class="{active: currentPage === 'value'}">
                <div class="circle--inner"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/main';

.container--navigation {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: main.$v-margin-16 auto;
}

.circle-wrapper {
    padding: 10px;
    cursor: pointer;
}

.circle {

    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: main.$accent;
    position: relative;
    visibility: hidden;
    
    &--inner {
        
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: solid 3px main.$bg-black;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: visible;
        background: white;
        cursor: pointer;
    }

    &.active {
        visibility: visible;
    }
}
</style>
