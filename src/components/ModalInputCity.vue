<template>
  <n-button @click="showModal = true"> 点亮 </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="请输入想点亮的省份"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-auto-complete
        v-model="search"
        :options="options"
        placeholder="请输入内容"
        clearable
        @select="handleSelect"
      >
        <template #default="{ handleInput, handleBlur, handleFocus }">
          <input
            type="text"
            placeholder="请输入内容"
            class="custom-input"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"
            v-model.trim="userInput"
          />
        </template>
      </n-auto-complete>
      <!-- <div class="input-container">
        <input v-model.trim="userInput" class="custom-input" placeholder="请输入内容" />
      </div> -->
      <template #footer>
        <n-button @click="handleCloseModal"> 上传 </n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { NButton, NCard, NModal } from 'naive-ui'
import { ref, computed } from 'vue'
import { NAutoComplete } from 'naive-ui'

const showModal = ref(false)
const userInput = ref('')
const emit = defineEmits(['upload-city'])
const handleCloseModal = () => {
  showModal.value = false
  const data = userInput.value
  emit('upload-city', data)
  console.log(data)
  userInput.value = ''
}
const search = ref('')

const options = computed(() => {
  return [
    '北京市',
    '天津市',
    '上海市',
    '重庆市',
    '河北省',
    '山西省',
    '辽宁省',
    '吉林省',
    '黑龙江省',
    '江苏省',
    '浙江省',
    '安徽省',
    '福建省',
    '江西省',
    '山东省',
    '河南省',
    '湖北省',
    '湖南省',
    '广东省',
    '海南省',
    '四川省',
    '贵州省',
    '云南省',
    '陕西省',
    '甘肃省',
    '青海省',
    '台湾省',
    '内蒙古自治区',
    '广西壮族自治区',
    '西藏自治区',
    '宁夏回族自治区',
    '新疆维吾尔自治区',
    '香港特别行政区',
    '澳门特别行政区'
  ]
    .filter((city) => city.toLowerCase().includes(userInput.value.toLowerCase()))
    .map((city) => {
      return {
        label: city,
        value: city
      }
    })
})

const handleSelect = (value) => {
  userInput.value = value
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
  border-color: #42b983; /* Naive UI 的颜色 */
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}
</style>
