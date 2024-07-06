<template>
    <nav v-show="scrolled" :class="{ 'border-b-2 sticky top-0': scrolled }"
        class="relative z-50 transition duration-700 bg-white">
        <!-- TODO: element gets a shadow when menu is toggled -->
        <div class="container mx-auto w-full flex justify-center items-center px-4 py-3">
            <div class="flex items-center justify-center w-full">
                <n-icon>
                    <Map style="color: #7446af; width: 20px; height: 20px;" />
                </n-icon>
                <p style="color: darkgray; font-size: smaller; text-align: center; margin-left: 8px;">
                    Powered by AI
                </p>
            </div>
        </div>
    </nav>
    
</template>

<script setup>
import { Map } from '@vicons/carbon';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const limitPosition = 500;
const scrolled = ref(true);
const lastPosition = ref(0);

const handleScroll = () => {
    if (lastPosition.value < window.scrollY && limitPosition < window.scrollY) {
        scrolled.value = true;
    } else if (lastPosition.value > window.scrollY) {
        scrolled.value = false;
        // move down
    }

    lastPosition.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.container {
  display: flex;
  margin: 30px;
  bottom: 0px;
}
</style>
