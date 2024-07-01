<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { BMap } from 'vue3-baidu-map-gl';

// 创建一个ref来存储屏幕高度
const screenHeight = ref(window.innerHeight);

// 创建一个函数来更新屏幕高度
const updateHeight = () => {
  screenHeight.value = window.innerHeight;
};

onMounted(() => {
  // 在组件挂载后获取屏幕高度
  updateHeight();
  // 监听窗口的resize事件以更新屏幕高度
  window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
  // 移除窗口的resize事件监听器
  window.removeEventListener('resize', updateHeight);
});
</script>

<template>
  <div>
    <BMap
      :height="screenHeight"
      m="14"
      :enableScrollWheelZoom="true"
      @moveend="
        (target) => {
          console.log('center point:', target.target.centerPoint);
        }
      "
    >
    </BMap>
  </div>
</template>
