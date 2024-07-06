<template>
    <view v-for="(item, index) in props.StoryList" :key="index">
      <n-card :title="item.text.city" size="medium" class="ProfileTabsCard card-hover-effect" style="margin-bottom: 10px">
        {{ item.text.comment }}
      </n-card>
    </view>

    
  </template>
  

  
  <script setup>
  import { NCard } from 'naive-ui';
  
  const props = defineProps({
    StoryList: {
      type: Array,
      default: () => []
    }
  });
  </script>
  
  <style scoped>
  .ProfileTabsCard .n-card-header {
    font-weight: bold;
  }
  
  .card-hover-effect {
    transition: all 0.3s ease;
  }
  
  .card-hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>