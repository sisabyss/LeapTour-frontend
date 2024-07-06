<template>
  
    <n-upload
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      :default-file-list="previewFileList"
      list-type="image-card"
      @preview="handlePreview"
    />
    <n-modal
      v-model:show="showModal"
      preset="card"
      style="width: 600px"
    >
      <img :src="previewImageUrl" style="width: 100%">
    </n-modal>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { NUpload, NModal } from 'naive-ui';
  
  const showModal = ref(false);
  const previewImageUrl = ref('');
  
  const handlePreview = (file) => {
    const { url } = file;
    previewImageUrl.value = url;
    showModal.value = true;
  };
  
  
  
  const previewFileList = ref([
    {
      id: 'react',
      name: '我是react.png',
      status: 'finished',
      url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    },
    {
      id: 'vue',
      name: '我是vue.png',
      status: 'finished',
      url: 'https:'
    }
  ]);
  </script>
  