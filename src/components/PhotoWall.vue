<template>
  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="props.PhotoList"
    list-type="image-card"
    @preview="handlePreview"
    @change="handleChange"
  />
  <n-modal v-model:show="showModal" preset="card" style="width: 600px">
    <img :src="previewImageUrl" style="width: 100%" />
  </n-modal>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import { NUpload, NModal } from 'naive-ui'

const props = defineProps({
  PhotoList: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['upload-Photo'])
const showModal = ref(false)
const previewImageUrl = ref('')
const previewFileList = ref([])

// 监听 PhotoList prop 的变化
watch(
  () => props.PhotoList,
  (newList) => {
    // 将新的 prop 值赋给 previewFileList
    previewFileList.value = newList
    console.log('previewFileList:', previewFileList.value)
  }
)

const handlePreview = (file) => {
  const { url } = file
  previewImageUrl.value = url
  showModal.value = true
}

const handleChange = (event) => {
  const uploadedFile = event.file
  if (uploadedFile && uploadedFile.status == 'error') {
    console.log('上传的文件:', uploadedFile)
    emit('upload-Photo', uploadedFile)
  }
}
</script>

//
<!-- <template>
  
//   <n-upload
//     action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
//     :default-file-list="previewFileList"
//     list-type="image-card"
//     @preview="handlePreview"
//   />
//   <n-modal
//     v-model:show="showModal"
//     preset="card"
//     style="width: 600px"
//   >
//     <img :src="previewImageUrl" style="width: 100%">
//   </n-modal>
// </template>

// <script setup>
// import { ref } from 'vue';
// import { NUpload, NModal } from 'naive-ui';

// const showModal = ref(false);
// const previewImageUrl = ref('');

// const handlePreview = (file) => {
//   const { url } = file;
//   previewImageUrl.value = url;
//   showModal.value = true;
// };

// const previewFileList = ref([
//   {
    
//     status: 'finished',
//     url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
//   },
//   {
//     status: 'finished',
//     url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
//   }
// ]);
// </script> -->
