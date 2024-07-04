<template>
    <div>
        <p class="AITripTitle">
            Where do you want to go ?
        </p>
        <div class="BuildSearch">
            <TripBuild />
        </div>
    </div>

</template>
<script setup>
import TripBuild from '../components/TripBuild.vue';
</script>
<style scoped>
.BuildSearch {
    margin-top: 20px;
}

.AITripTitle {
    margin-top: 80px;
    font-size: 2em;
    /* 设置字体大小 */
    font-weight: bold;
    /* 设置字体粗细 */
    color: #333;
    /* 设置字体颜色 */
    /* 设置边距 */
    text-align: center;
    /* 设置文本对齐方式 */
    padding-bottom: 10px;
    /* 设置内边距 */
}
</style>