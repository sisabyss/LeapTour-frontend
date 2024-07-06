<template>
    <n-button @click="showModal = true">
      点亮
    </n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        title="请输入想点亮的省份"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
       <div class="input-container">
          <input v-model.trim="userInput" class="custom-input" placeholder="请输入内容" />
        </div>
        <template #footer>
          <n-button @click="handleCloseModal">
            上传
          </n-button>
        </template>
      </n-card>
    </n-modal>
  
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { NButton, NCard, NModal} from 'naive-ui';
  
  const showModal = ref(false);
  const userInput = ref('');
  const emit = defineEmits(['upload-city']);
  const handleCloseModal = () => {
      showModal.value = false;
      const data = userInput.value;
      emit('upload-city', data);
      console.log(data);
      userInput.value = '';
  };
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
    border-color: #42b983; /* Naive UI 的颜色 */
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
  }
  </style>