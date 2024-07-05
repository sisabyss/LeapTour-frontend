<!--
*传参用法举例：
*<BarCard
*imgSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1"
*title="Discover Darwin" description="Find out why travelers like you are raving about Darwin"
*cardColor="#dfd3ee" buttonContent="Explore now" />
-->
<script setup>
import { defineProps, ref } from 'vue'
import { NLayout, NButton } from 'naive-ui'

const props = defineProps({
    imgSrc: {
        type: String,
        default: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1'
    },
    title: {
        type: String,
        default: 'Discover Darwin'
    },
    description: {
        type: String,
        default: 'Find out why travelers like you are raving about Darwin'
    },
    buttonContent: {
        type: String,
        default: 'View now'
    },
    cardColor: {
        type: String,
        default: '#dfd3ee'
    }
})

const isClicked = ref(false)
const toggleButton = () => {
    isClicked.value = !isClicked.value
}
</script>

<template>
    <n-layout :style="{ backgroundColor: props.cardColor }" class="BarCardAll" embedded
        content-style="padding: 24px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
            <img :src="props.imgSrc" class="BarCardImg">
            <div class="BarCardContent" style="margin-left: 20px;">
                <p class="BarCardTitle">{{ props.title }}</p>
                <p class="BarCardDescription">{{ props.description }}</p>
            </div>
        </div>
        <n-button class="BarCardButton" :class="{ clicked: isClicked }" @click="toggleButton">{{ props.buttonContent
            }}</n-button>
    </n-layout>
</template>

<style scoped>
.BarCardAll {
    border-radius: 10px;
}

.BarCardImg {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    transform: rotate(-5deg);
}

.BarCardContent {
    display: flex;
    flex-direction: column;
}

.BarCardTitle {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
}

.BarCardDescription {
    font-size: 1em;
    margin: 0;
    color: #555;
}

.BarCardButton {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 20px;
    transition: background-color 0.3s, color 0.3s;
}

.BarCardButton:hover {
    background-color: black;
    color: white;
}

.BarCardButton.clicked {
    background-color: black;
    color: white;
}
</style>
