<script setup>
import { NCarousel } from 'naive-ui';

</script>

<template>
    <n-carousel class="carousel" show-arrow>
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1">
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1">
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1">
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1">
    </n-carousel>
</template>
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.n-carousel__arrow {
    background-color: black !important;
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.n-carousel__arrow::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 8px 6px 0;
    border-color: transparent white transparent transparent;
    position: absolute;
}

.n-carousel__arrow--left::before {
    transform: translateX(-2px) rotate(-135deg);
}

.n-carousel__arrow--right::before {
    transform: translateX(2px) rotate(45deg);
}

.n-carousel__arrow--left {
    left: 20px;
}

.n-carousel__arrow--right {
    right: 20px;
}
</style>
