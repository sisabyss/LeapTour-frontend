<script setup>
import { NCarousel } from 'naive-ui';
</script>

<template>
    <n-carousel show-arrow>
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1">
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1">
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1">
        <img class="carousel-img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1">
    </n-carousel>
</template>
<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
