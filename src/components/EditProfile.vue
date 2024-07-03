<template>
  <div class="ProfileEdit" style="width: 390px; height: 844px; position: relative; background: white">
    <div class="Rectangle45" style="width: 390px; height: 188px; left: 0px; top: 0px; position: absolute; background: black"></div>
    
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
      src="https://via.placeholder.com/142x142"
    />
    
    <!-- Input fields with labels outside -->
    <label for="username" class="Username" style="left: 36px; top: 298px; position: absolute; color: black; font-size: 14px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Username</label>
    <input
      id="username"
      type="text"
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

<label for="email" class="EmailID" style="left: 36px; top: 380px; position: absolute; color: black; font-size: 14px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Email Id</label>
<input
  id="email"
  type="email"
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
/>

<label for="phone" class="PhoneNumber" style="left: 36px; top: 459px; position: absolute; color: black; font-size: 14px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Phone Number</label>
<input
  id="phone"
  type="tel"
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

<label for="password" class="Password" style="left: 36px; top: 544px; position: absolute; color: black; font-size: 14px; font-family: Poppins; font-weight: 500; word-wrap: break-word">Password</label>
<input
  id="password"
  type="password"
  class="Rectangle41"
  style="
    width: 318px;
    height: 40px;
    left: 36px;
    top: 567px;
    position: absolute;
    background: rgba(196, 196, 196, 0);
    border-radius: 8px;
    border: 1px #a9a9a9 solid;
    padding-left: 10px; /* Add padding to the left side of the input */
  "
  v-model="up1.password"
/>
    
    <!-- Update button -->
    <button
      class="Rectangle31"
      style="width: 283px; height: 40px; left: 54px; top: 672px; position: absolute; background: #171f1d; border-radius: 10px" @click="update"
    >
      <div class="Update" style="color: white; font-size: 15px; font-family: Poppins; font-weight: 700; word-wrap: break-word; text-align: center; line-height: 40px">Update</div>
    </button>
    
    <div
      class="EditProfile"
      style="left: 155px; top: 54px; position: absolute; color: white; font-size: 15px; font-family: Poppins; font-weight: 600; word-wrap: break-word"
    >
      Edit Profile
    </div>
    
    <div class="ArrowLeft" style="width: 26px; height: 30px; left: 17px; top: 50px; position: absolute">
      <div class="Vector" style="width: 26px; height: 30px; left: 0px; top: 0px; position: absolute"></div>
      <div class="Vector" style="width: 19.5px; height: 0px; left: 3.14px; top: 15px; position: absolute; border: 2px white solid"></div>
      <div class="Vector" style="width: 6.5px; height: 15px; left: 3.14px; top: 7.5px; position: absolute; border: 2px white solid"></div>
    </div>
    
    <div
      class="EditProfile"
      style="left: 155px; top: 54px; position: absolute; color: white; font-size: 15px; font-family: Poppins; font-weight: 600; word-wrap: break-word"
    >
      Edit Profile
    </div>
    
    <!-- Change Picture button -->
    <n-upload
      action="https://ww.mocky.io/v2/5e4bafc63100007100d8b70f"
      :headers="{ 'naive-info': 'hello!'}"
      :data="{ 'naive-data': 'cool! naive' }"
      @change="handleUploadChange">
    <n-button
      class="ChangePicture"
      style="
        left: 135px;
        top: 259px;
        position: absolute;
        color: black;
        font-size: 12px;
        font-family: Poppins;
        font-weight: 400;
        word-wrap: break-word;
      "
    >Change Picture
    </n-button>
  </n-upload>
    
      
    
    <!-- Back arrow button -->
    <button
      class="ArrowLeft"
      style="
        width: 26px;
        height: 30px;
        left: 17px;
        top: 50px;
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;"
      >
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" fill="currentColor"></path></svg>
    </button>

  
   
  </div>
</template>


<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { NUpload, NButton } from 'naive-ui'
  const upuser = {
    username: '',
    email: '',
    phone: '',
    password: '',
    picture:null
  }
  
  const up1 = ref(upuser);

  function handleUploadChange(event) {
  const uploadedFile = event.file; // Get the uploaded file from the event
  if (uploadedFile) {
    // Assign the uploaded file to the picture property
    up1.value.picture = uploadedFile;
    console.log('上传的文件:', up1.value.picture);
  }
}

const update = async () => {
    try {
        const jsonstring = JSON.stringify(up1.value);
        const response = await axios.post('http://192.168.1.145:8080/user/login', jsonstring, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        up1.value = null;
        const message = response.data;
        console.log(message);
        // 根据不同的消息，执行不同的操作
        // if (message === 'User Not Exist') {
        //     alert('用户不存在');
        // } else if (message === 'Password Error') {
        //     alert('密码错误');
        // } else if (message === 'Login Success') {
        //     alert('登录成功');
        //     // 跳转到首页
        //     // window.location.href = '/home';
        //     router.push('/');
        // } else {
        //     // 如果有其他消息，可以在这里处理
        //     alert('未知错误');
        // }
    } catch (error) {
        console.log('发送数据时出错', error);
        alert('登录成功失败，请稍后再试');
    }
};
</script>


<style scoped>

</style>