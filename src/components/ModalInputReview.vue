<template>
  <n-button @click="showModal = true"> 书写 </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="留下你的故事"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div class="input-container">
        <input v-model="userInput1" class="custom-input" placeholder="请输入城市名称" />
      </div>
      <div class="input-container">
        <input v-model="userInput2" class="custom-input" placeholder="请输入内容" />
      </div>
      <template #footer>
        <n-button @click="handleCloseModal"> 上传 </n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import { NButton, NCard, NModal } from 'naive-ui'
const showModal = ref(false)
const userInput1 = ref('')
const userInput2 = ref('')
const emit = defineEmits(['upload-review'])
const handleCloseModal = () => {
  showModal.value = false
  const data = {
    city: userInput1.value,
    content: userInput2.value
  }

  emit('upload-review', data)
  console.log(data)
  userInput1.value = ''
  userInput2.value = ''
}
</script>

<style scoped>
.input-container {
  margin-bottom: 20px;
}

.custom-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
}

.custom-input:focus {
  outline: none;
  border-color: #42b983; /* Naive 的主题颜色 */
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}
</style>
