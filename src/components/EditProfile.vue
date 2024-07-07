<template>
  <div
    class="ProfileEdit"
    style="width: 390px; height: 600px; position: relative; background: white"
  >
    <div
      class="Rectangle45"
      style="
        width: 390px;
        height: 188px;
        left: 0px;
        top: 0px;
        position: absolute;
        background: black;
      "
    ></div>

    <img
      class="UnsplashJmurdhtm7ng"
      style="
        width: 142px;
        height: 142px;
        left: 124px;
        top: 117px;
        position: absolute;
        background: linear-gradient(0deg, #c4c4c4 0%, #c4c4c4 100%);
        border-radius: 9999px;
        border: 5px white solid;
      "
      :src="
        up1.picture
          ? up1.picture
          : 'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg'
      "
    />

    <!-- Input fields with labels outside -->
    <label
      for="username"
      class="Username"
      style="
        left: 36px;
        top: 298px;
        position: absolute;
        color: black;
        font-size: 14px;
        font-family: Poppins;
        font-weight: 500;
        word-wrap: break-word;
      "
      >用户昵称</label
    >
    <input
      id="username"
      type="text"
      :placeholder="up1.username"
      class="Rectangle38"
      style="
        width: 318px;
        height: 40px;
        left: 36px;
        top: 321px;
        position: absolute;
        background: rgba(196, 196, 196, 0);
        border-radius: 8px;
        border: 1px #a9a9a9 solid;
        padding-left: 10px; /* Add padding to the left side of the input */
      "
      v-model="up1.username"
    />

    <label
      for="city"
      class="city"
      style="
        left: 36px;
        top: 380px;
        position: absolute;
        color: black;
        font-size: 14px;
        font-family: Poppins;
        font-weight: 500;
        word-wrap: break-word;
      "
      >IP城市</label
    >
    <input
      id="city"
      type="text"
      :placeholder="up1.city"
      class="Rectangle39"
      style="
        width: 318px;
        height: 40px;
        left: 36px;
        top: 403px;
        position: absolute;
        background: rgba(196, 196, 196, 0);
        border-radius: 8px;
        border: 1px #a9a9a9 solid;
        padding-left: 10px; /* Add padding to the left side of the input */
      "
      v-model="up1.city"
    />

    <label
      for="phone"
      class="PhoneNumber"
      style="
        left: 36px;
        top: 459px;
        position: absolute;
        color: black;
        font-size: 14px;
        font-family: Poppins;
        font-weight: 500;
        word-wrap: break-word;
      "
      >电话号码</label
    >
    <input
      id="phone"
      type="tel"
      :placeholder="up1.phone"
      class="Rectangle40"
      style="
        width: 318px;
        height: 40px;
        left: 36px;
        top: 485px;
        position: absolute;
        background: rgba(196, 196, 196, 0);
        border-radius: 8px;
        border: 1px #a9a9a9 solid;
        padding-left: 10px; /* Add padding to the left side of the input */
      "
      v-model="up1.phone"
    />

    <label
      for="details"
      class="details"
      style="
        left: 36px;
        top: 544px;
        position: absolute;
        color: black;
        font-size: 14px;
        font-family: Poppins;
        font-weight: 500;
        word-wrap: break-word;
      "
      >关于我</label
    >
    <textarea
      id="details"
      :placeholder="up1.details"
      class="Rectangle41"
      style="
        width: 318px;
        height: 80px;
        left: 36px;
        top: 567px;
        position: absolute;
        background: rgba(196, 196, 196, 0);
        border-radius: 8px;
        border: 1px #a9a9a9 solid;
        padding-left: 10px; /* Add padding to the left side of the input */
        padding-top: 10px; /* Add padding to the top side of the textarea */
        resize: none; /* Disable resizing of the textarea */
      "
      v-model="up1.details"
    ></textarea>

    <!-- Update button -->
    <button
      class="Rectangle31"
      style="
        width: 283px;
        height: 40px;
        left: 54px;
        top: 672px;
        position: absolute;
        background: #171f1d;
        border-radius: 10px;
      "
      @click="update"
    >
      <div
        class="Update"
        style="
          color: white;
          font-size: 15px;
          font-family: Poppins;
          font-weight: 700;
          word-wrap: break-word;
          text-align: center;
          line-height: 40px;
        "
      >
        更新主页
      </div>
    </button>

    <div
      class="EditProfile"
      style="
        left: 165px;
        top: 54px;
        position: absolute;
        color: white;
        font-size: 15px;
        font-family: Poppins;
        font-weight: 600;
        word-wrap: break-word;
      "
    >
      编辑主页
    </div>

    <!-- Change Picture button -->
    <n-upload
      action="https://ww.mocky.io/v2/5e4bafc63100007100d8b70f"
      :headers="{ 'naive-info': 'hello!' }"
      :data="{ 'naive-data': 'cool! naive' }"
      @change="handleUploadChange"
      show-file-list="false"
    >
      <n-button
        class="ChangePicture"
        style="
          left: 150px;
          top: 256px;
          position: absolute;
          color: black;
          font-size: 12px;
          font-family: Poppins;
          font-weight: 400;
          word-wrap: break-word;
        "
        >上传新头像
      </n-button>
    </n-upload>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { NUpload, NButton } from 'naive-ui'
import { useBaseStore } from '@/store/pinia'
const store = useBaseStore()
const upuser = {
  username: '',
  city: '',
  phone: '',
  details: '',
  picture: store.avatar,
  email: store.email
}
const up1 = ref(upuser)
console.log(upuser)
const emit = defineEmits('UpdateInfoFromEdit')

function handleUploadChange(event) {
  const uploadedFile = event.file // Get the uploaded file from the event
  if (uploadedFile && uploadedFile.status == 'error') {
    // Assign the uploaded file to the picture property
    up1.value.picture = uploadedFile
    console.log('上传的文件:', up1.value.picture)
    updateimg()
  }
}
/* const formData = new FormData(); */
/* formData.append('file', up1.value.picture); */
async function updateimg() {
  try {
    console.log('向后端发送头像')
    console.log(up1.value.picture)
    /*     console.log(formData); */
    const response = await axios.post('http://192.168.1.145:8080/image/upload', up1.value.picture, {
      headers: {
        'Content-Type': 'multipart/form-data' // 设置正确的Content-Type
      }
    })
    const message = response.data
    console.log(message)
    if (message.code == 200) {
      /*       emit(response.data.imgUrl); */
      console.log('Url是')
      console.log(message.data.imageUrl)
      console.log(message)
      up1.value.picture = 'http://' + message.data.imageUrl[0]
      alert('头像上传成功')
    } else if (message.code == 500) {
      console.log('更新头像失败')
      alert(message.msg)
    }
  } catch (error) {
    console.log('发送数据时出错', error)
    alert('更新头像请求失败，请稍后再试')
  }
}
async function update() {
  try {
    const response = await axios.get('http://192.168.1.145:8080/user/updateInfo', {
      params: {
        // 使用 params 属性来传递查询参数
        name: up1.value.username,
        ip_city: up1.value.city,
        phone: up1.value.phone,
        about_me: up1.value.details,
        email: store.email, // 使用 store.email
        avatar: store.avatar
      }
    })
    const message = response.data
    console.log(message)
    if (message.code == 200) {
      emit('UpdateInfoFromEdit')
      console.log('更新成功')
      alert(message.msg)
    } else if (message.code == 500) {
      console.log('更新成功')
      alert(message.msg)
    }
  } catch (error) {
    console.log('发送数据时出错', error)
    alert('更新请求失败，请稍后再试')
  }
}
</script>

<style scoped>
input::placeholder,
textarea::placeholder {
  color: rgba(169, 169, 169, 1);
  /* Set the placeholder color to gray */
}
</style>
