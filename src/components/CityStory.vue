<template>
  <div v-for="(item, index) in StoryList" :key="index">
    <n-card
      :title="item.city"
      size="medium"
      class="ProfileTabsCard card-hover-effect"
      style="margin-bottom: 10px"
    >
      {{ item.content }}
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from 'naive-ui'
import { watchEffect } from 'vue'

const props = defineProps({
  StoryList: {
    type: Array,
    default: () => [{ city: '北京', comment: '北京是中国的首都，也是全国最大的城市。' }]
  }
})

// 使用 watchEffect 来观察 StoryList 的变化
watchEffect(() => {
  console.log('StoryList has changed', props.StoryList)
})
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
