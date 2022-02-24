<script setup>
</script>

<template>
<div class="scroll-list__item list-item">
    <div class="list-item__card">
        <slot name="img-url"></slot>
    </div>
    <div class="list-item__title">
        <slot name="title"></slot>
    </div>
    <div class="item-body">
        <div class="item-body__description">
            <slot name="description"></slot>
            <p class="item-body__password">
                <slot name="password"></slot>
            </p>
        </div>
        
        <p class="item-body__period">
            <slot name="period"></slot>
        </p>
        <div class="item-body__icons">
            <slot name="icons"></slot>
        </div>
    </div>
    <div class="list-item__btns">
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
    width: clamp(400px, 60vh, 550px);
    // height: 640px;

    &__card {
        width: 100%;
        height: clamp(220px, 37vh, 330px);
        text-align: center;

        & img {
            max-height: 100%;
        }
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
            padding-bottom: 4px;
            margin-left: 4px;
        }
    }

    &__btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

    }
}
.item-body {

    &__description {
        margin-bottom: main.$v-margin-16;
        height: clamp(50px, 7.5vh, 100px);
    }

    &__password {
        font-size: 0.8rem;
    }

    &__period {
        font-size: 0.8rem;
        font-weight: 300;
        margin-bottom: main.$v-margin-16;
        &::before{
            font-family: 'Material Icons';
            content:'\e8b5';
            vertical-align: middle;
            margin-right: 4px;
            -webkit-text-stroke: 0.3px main.$bg-black;
        }
    }

    &__icons {
        margin-bottom: clamp(16px, 3vh, 24px);
        & .icon {
            margin-right: 4px;
        }
    }

}
.item-list__title:hover + .material-icons.open {
    color: main.$accent;
}

@media (max-width: 744px) {
    .list-item {
        padding: 0 1rem;

        &__card {
            height: 200px;
            text-align: center;
        }

        &__title {
            font-size: 17px;
            & .material-icons {
                font-size: 18px;
            }
        }

    }
    .item-body {
        &__description {
            height: 80px;
        }

    }
}
@media (max-width: 744px) {
    .list-item {
        width: 90vw;
    }
}
</style>