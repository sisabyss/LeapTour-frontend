<template>
  <div>
    <div class="ProfileAll">
      <div class="ui_container mTWoR YRrgV">
        <div class="VrhFU _T ui_card section">
          <div class="ckWkP">
            <div class="eYtRY">
              <div class="uLeBs f K MD">
                <span class="kjIqZ I ui_social_avatar large xtra-large-tablet">
                  <img
                    :src="
                      userInfo.avatar
                        ? userInfo.avatar
                        : 'https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg'
                    "
                    alt="avatar-image"
                  />
                </span>
                <span class="ecLBS _R shSnD">
                  <span class="JWmxy">
                    <h1>
                      <span class="OUDwj b brsfY">{{
                        userInfo.username ? userInfo.username : '未知用户名'
                      }}</span>
                    </h1>
                  </span>
                  <span class="Dsdjn _R">{{ myemail }}</span>
                </span>
                <div class="BNUSk Md">
                  <div class="ObCEB">
                    <div class="Skngi _R _c _n z">
                      <span class="BFbMC">互动量</span><span class="rNZKv">0</span>
                    </div>
                    <div class="Skngi _R _c _n z">
                      <span class="BFbMC">粉丝</span><span class="rNZKv">0</span>
                    </div>
                    <div class="Skngi _R _c _n z">
                      <span class="BFbMC">关注</span><span class="rNZKv">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="KydPf">
              <div class="CpMuc">
                <span class="group_button_wrapper">
                  <button class="ui_button EnLFm" @click="showModal = true">Edit profile</button>
                </span>
                <span class="group_button_wrapper"><span></span></span>
              </div>
            </div>
            <n-modal v-model:show="showModal">
              <n-card
                style="width: 480px; height: 700px"
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
              >
                <EditProfile @UpdateInfoFromEdit="fetchUserInfo()" style="transform: scale(0.9)" />
              </n-card>
            </n-modal>
          </div>
        </div>
      </div>
      <div class="ProfileTabs">
        <n-tabs type="line" animated>
          <n-tab-pane name="Trips" tab="旅行轨迹">
            <div style="height: 500px">
              <map1 :tourList="CityList" />
            </div>

            <n-card
              class="ProfileTabsCard"
              title="我与世界"
              style="height: 180px; margin-top: 20px; margin-bottom: 20px"
            >
              记录你的脚步
              <div style="margin-top: 20px">
                <ModalInputCity @upload-city="UploadCity" />
              </div>
            </n-card>
          </n-tab-pane>

          <n-tab-pane name="Photos" tab="照片墙">
            <n-card class="ProfileTabsCard" title="我与风光" style="height: 150px">
              记录沿途风景
            </n-card>
            <div style="padding-left: 30px; padding-right: 30px">
              <PhotoWall :PhotoList="Photolist" @upload-Photo="UploadPhoto" />
            </div>
          </n-tab-pane>

          <n-tab-pane name="Reviews" tab="城市小卡">
            <n-card class="ProfileTabsCard" title="我与城市" style="height: 150px">
              记录你的城市
              <div style="margin-top: 20px">
                <ModalInputReview @upload-review="UploadCityStory" />
              </div>
            </n-card>
            <div>
              <CityStory :StoryList="StoryList" />
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
      <div class="ProfileColumn">
        <n-card
          class="ProfileColumnCard"
          title="成就墙"
          header-style="font-weight:bold;font-size:1.5em;"
        >
          分享旅行，解锁更多成就！
          <div class="d-flex flex-wrap">
            <img
              class="achievementImg"
              :style="{ filter: index > 0 ? 'grayscale(100%)' : 'none' }"
              v-for="(img, index) in achievementImgs"
              :src="img"
              :key="index"
            />
          </div>
          <button class="ProfileButton" @click="showModalnew = true">全部成就</button>
        </n-card>
        <n-modal v-model:show="showModalnew">
          <n-card
            style="width: 600px"
            :bordered="false"
            size="medium"
            role="dialog"
            aria-modal="true"
          >
            <div style="font-weight: bold">已获得成就</div>
            <div class="flex-wrap">
              <n-tooltip trigger="hover">
                <template #trigger>
                  <img
                    class="achievementImg"
                    src="https://github.githubassets.com/assets/starstruck-default--light-a594e2a027e0.png"
                  />
                </template>
                旅兔注册新用户
              </n-tooltip>
            </div>
            <div style="width: 80%">
              <div style="font-weight: bold">待解锁成就</div>
              <div class="d-flexnew flex-wrap">
                <img
                  class="achievementImg"
                  style="filter: grayscale(100%)"
                  v-for="(img, index) in achievementImgsWait"
                  :src="img"
                  :key="index"
                />
              </div>
            </div>
            <div style="font-weight: bold">还有更多升级徽章等待你的探索😉</div>
            <div style="width: 60%">
              <div class="d-flex flex-wrap">
                <img
                  class="achievementImg"
                  :style="{ filter: index > 0 ? 'grayscale(90%)' : 'none' }"
                  v-for="(img, index) in ImgsStart1"
                  :src="img"
                  :key="index"
                />
              </div>
            </div>
            <div style="width: 60%">
              <div class="d-flex flex-wrap">
                <img
                  class="achievementImg"
                  :style="{ filter: index > 0 ? 'grayscale(90%)' : 'none' }"
                  v-for="(img, index) in ImgsStart2"
                  :src="img"
                  :key="index"
                />
              </div>
            </div>
            <div style="width: 60%">
              <div class="d-flex flex-wrap">
                <img
                  class="achievementImg"
                  :style="{ filter: index > 0 ? 'grayscale(90%)' : 'none' }"
                  v-for="(img, index) in ImgsStart3"
                  :src="img"
                  :key="index"
                />
              </div>
            </div>
          </n-card>
        </n-modal>
        <n-card class="ProfileColumnCard" title="简介">
          <div>
            <div class="ProfileIcon">
              <n-icons>
                <Add />
              </n-icons>
            </div>
            <div class="ProfileAdd" @click="showModal = true">
              {{ userInfo.city ? userInfo.city : '请填写你的所在城市' }}
            </div>
          </div>
          <div>
            <div class="ProfileIcon">
              <n-icons>
                <Calendar />
              </n-icons>
            </div>
            <div class="ProfileAdd" @click="showModal = true">于2024年7月加入</div>
          </div>
          <div>
            <div class="ProfileIcon">
              <n-icons>
                <IbmCloudInternetServices />
              </n-icons>
            </div>
            <div class="ProfileAdd" @click="showModal = true">
              {{ userInfo.phone ? userInfo.phone : '请填写你的电话号码' }}
            </div>
          </div>
          <div>
            <div class="ProfileIcon">
              <n-icons>
                <OrderDetails />
              </n-icons>
            </div>
            <div class="ProfileAdd" @click="showModal = true">
              {{ userInfo.details ? userInfo.details : '写一些介绍自己的话吧~' }}
            </div>
          </div>
        </n-card>
        <n-card class="ProfileColumnCard" title="分享你的旅行经历">
          <div>
            <div class="ProfileIcon">
              <n-icons>
                <Camera />
              </n-icons>
            </div>
            <router-link to="/">
              <div class="ProfileAdd">上传照片</div>
            </router-link>
          </div>
          <div>
            <div class="ProfileIcon">
              <n-icons>
                <Pen />
              </n-icons>
            </div>
            <router-link to="/">
              <div class="ProfileAdd">撰写评论</div>
            </router-link>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EditProfile from '../components/EditProfile.vue'
import { Add, Calendar, IbmCloudInternetServices, OrderDetails, Camera, Pen } from '@vicons/carbon'
import { NCard, NTabPane, NTabs, NModal, NTooltip } from 'naive-ui'
import axios from 'axios'
import map1 from '../components/map.vue'
import PhotoWall from '../components/PhotoWall.vue'
import ModalInputCity from '../components/ModalInputCity.vue'
import ModalInputReview from '../components/ModalInputReview.vue'
import CityStory from '../components/CityStory.vue'
import achievement1 from '../assets/Achievements1.png'
import achievement2 from '../assets/Achievements2.png'
import achievement3 from '../assets/Achievements3.png'
import achievement4 from '../assets/Achievements4.png'
import achievement5 from '../assets/Achievements5.png'
import achievement6 from '../assets/Achievements6.png'
import achievement7 from '../assets/Achievements7.png'
import achievement8 from '../assets/Achievements8.png'
import achievement9 from '../assets/Achievements9.png'
import achievement10 from '../assets/Achievements10.png'
import achievement11 from '../assets/Achievements11.png'
import achievement12 from '../assets/Achievements12.png'
import achievement13 from '../assets/Achievements13.png'
import achievement14 from '../assets/Achievements14.png'
import achievement15 from '../assets/Achievements15.png'
import achievement16 from '../assets/Achievements16.png'
import achievement17 from '../assets/Achievements17.png'
import achievement18 from '../assets/Achievements18.png'
import achievement19 from '../assets/Achievements19.png'
import achievement20 from '../assets/Achievements20.png'
import achievement21 from '../assets/Achievements21.png'
import achievement22 from '../assets/Achievements22.png'
import achievement23 from '../assets/Achievements23.png'
import achievement24 from '../assets/Achievements24.png'
import achievement25 from '../assets/Achievements25.png'
import achievement26 from '../assets/Achievements26.png'
import achievement27 from '../assets/Achievements27.png'
import achievement28 from '../assets/Achievements28.png'
import achievement29 from '../assets/Achievements29.png'

const PostPic = ref()
const Photolist = ref([])
console.log('看看email', localStorage.getItem('saemail'))
console.log('看看avatar', localStorage.getItem('saemail'))
const myemail = ref(localStorage.getItem('saemail'))
const myavatar = ref(localStorage.getItem('saavatar'))
console.log('看看myemail', myemail)

// 上传头像子组件将数据emit发射给父组件触发的函数
const UploadPhoto = (pic) => {
  console.log('发射函数', pic)
  PostPic.value = pic
  PicTransform()
}
// 将email传给后端，用于获取相应文件的的url，并将url传给后端进行添加，并且返回最新的list
async function PicTransform() {
  try {
    console.log('转换函数内部接收的file', PostPic.value)
    const response = await axios.post('http://192.168.1.145:8080/image/upload', PostPic.value, {
      headers: {
        'Content-Type': 'multipart/form-data' // 设置正确的Content-Type
      }
    })
    const message = response.data
    console.log(message)
    if (message.code == 200) {
      console.log('Url是')
      console.log(message.data.imageUrl)
      console.log(message)
      PostPic.value = 'http://' + message.data.imageUrl[0]
      PassUserPhoto(PostPic.value)
    } else if (message.code == 500) {
      console.log('文件转换失败')
    }
  } catch (error) {
    console.log('发送数据时出错', error)
    alert('上传文件失败，请稍后再试')
  }
}

async function GetUserPhotoList() {
  try {
    const response = await axios.get('http://192.168.1.145:8080/info/getPhoto', {
      params: { email: myemail.value }
    })
    console.log('获取成功')
    console.log(response.data.data)
    Photolist.value = response.data.data
    console.log('接收的数据', Photolist.value)
  } catch (error) {
    console.error('获取失败', error)
  }
}
async function PassUserPhoto(pic) {
  console.log('发送给后端的pic格式', pic)
  try {
    //console.log("参数",story);
    const response = await axios.get('http://192.168.1.145:8080/info/sendPhoto', {
      params: {
        email: myemail.value,
        photo: pic
      }
    })
    console.log(response.data.msg)
    GetUserPhotoList()
  } catch (error) {
    console.error('获取失败', error)
  }
}

const StoryPost = ref({})
const StoryList = ref([])

// 旅行心得子组件将数据emit发射给父组件
const UploadCityStory = (data) => {
  StoryPost.value = JSON.stringify(data)

  console.log(StoryPost.value)
  PassUserStoryList(StoryPost.value)
}
// 旅行心得子组件将数据emit发射给父组件触发的函数
async function GetUserStoryList() {
  try {
    const response = await axios.get('http://192.168.1.145:8080/info/getComment', {
      params: { email: myemail.value }
    })
    console.log('获取成功')
    console.log(response.data.data)
    StoryList.value = response.data.data
    console.log('接收的数据', StoryList.value)
  } catch (error) {
    console.error('获取失败', error)
  }
}
async function PassUserStoryList(story) {
  try {
    //console.log("参数",story);
    const response = await axios.get('http://192.168.1.145:8080/info/sendComment', {
      params: {
        email: myemail.value,
        comment: story
      }
    })
    console.log(response.data.msg)
    GetUserStoryList()
  } catch (error) {
    console.error('获取失败', error)
  }
}

//将子组件传出的city，用于传给后端
const CityPost = ref('')

const CityList = ref([])
//将子组件传出的city，用于获得后端返回的城市数据
async function GetUserCityList() {
  try {
    const response = await axios.get('http://192.168.1.145:8080/info/getMarkedCity', {
      params: { email: myemail.value }
    })
    console.log('获取成功')
    CityList.value = response.data.data
    console.log(CityList.value)
  } catch (error) {
    console.error('获取失败', error)
  }
}
// 向后端发送城市数据并获得相应的数据
async function PassUserCityList(city) {
  try {
    const response = await axios.get('http://192.168.1.145:8080/info/markCity', {
      params: {
        email: myemail.value,
        markedCity: city
      }
    })
    console.log(response.data.msg)
    GetUserCityList()
  } catch (error) {
    console.error('获取失败', error)
  }
}
// 点亮城市子组件将数据emit发射给父组件触发的函数
const UploadCity = (data) => {
  CityPost.value = data
  console.log(CityPost.value)
  PassUserCityList(CityPost.value)
}
const userInfo = ref({
  username: '',
  city: '',
  phone: '',
  details: '',
  avatar: '',
  email: myemail.value
})
const showModal = ref(false)
const showModalnew = ref(false)

async function fetchUserInfo() {
  try {
    const response = await axios.get('http://192.168.1.145:8080/user/getUserInfo', {
      params: { email: myemail.value }
    })
    userInfo.value = {
      username: response.data.data.name,
      city: response.data.data.ipcity,
      phone: response.data.data.phone,
      avatar: response.data.data.avatar,
      details: response.data.data.aboutme,
      email: response.data.data.email
    }
    console.log('获取成功')
    console.log(userInfo.value.avatar)
    console.log(response.data)
    console.log(userInfo)
  } catch (error) {
    console.error('获取失败', error)
  }
}
onMounted(() => {
  fetchUserInfo()
  GetUserStoryList()
  GetUserPhotoList()
  GetUserCityList()
})
const achievementImgs = ref([
  achievement1,
  achievement2,
  achievement3,
  achievement4,
  achievement5,
  achievement6,
  achievement7,
  achievement8,
  achievement9
])

const achievementImgsWait = ref([
  achievement10,
  achievement11,
  achievement12,
  achievement13,
  achievement14,
  achievement15,
  achievement16,
  achievement17
])

const ImgsStart1 = ref([achievement18, achievement19, achievement20, achievement21])

const ImgsStart2 = ref([achievement22, achievement23, achievement24, achievement25])

const ImgsStart3 = ref([achievement26, achievement27, achievement28, achievement29])
</script>

<style scoped>
.ProfileAdd {
  padding: 5px;
  display: inline-block;
  width: fit-content;
  position: relative;
}

.ProfileAdd:hover {
  text-decoration: underline;
}

.ProfileIcon .ProfileAdd {
  align-self: stretch;
}

.ProfileIcon {
  padding-top: 5px;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.ProfileButton {
  margin-top: 30px;
  background-color: black;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 20px;
}

.ProfileButton:hover {
  background-color: rgb(242, 242, 242);
  color: black;
}

.ProfileAll {
  margin: 20px auto;
  max-width: 1200px;
}

.ProfileColumn .ProfileTabs {
  align-self: stretch;
}

.ProfileColumn {
  margin: 5px;
  padding: 5px;
  width: 100%;
  float: left;
}

.ProfileCreate {
  color: rgb(114, 160, 114);
}

.ProfileCreate:hover {
  color: green;
  text-decoration: underline;
}

.ProfileTabs {
  margin: 5px;
  width: 100%;
  padding: 5px;
  text-align: center;
  float: right;
}

.ui_container {
  margin: 20px auto;
  max-width: 1200px;
  padding: 20px;
}

.mTWoR {
  display: flex;
  justify-content: center;
  align-items: center;
}

.YRrgV {
  width: 100%;
}

.VrhFU {
  width: 100%;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.ckWkP {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.eYtRY {
  display: flex;
  align-items: center;
}

.uLeBs {
  display: flex;
  align-items: center;
}

.f.K.MD {
  display: flex;
  align-items: center;
}

.kjIqZ {
  margin-right: 20px;
}

.large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ecLBS {
  display: flex;
  flex-direction: column;
}

.JWmxy h1 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.Dsdjn {
  font-size: 16px;
  color: #666;
}

.BNUSk {
  display: flex;
  align-items: center;
}

.ObCEB {
  margin: 30px;
  display: flex;
  gap: 20px;
}

.Skngi {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.BFbMC {
  font-weight: bold;
}

.rNZKv {
  font-size: 18px;
  color: #333;
}

.KydPf {
  display: flex;
  align-items: center;
}

.CpMuc {
  display: flex;
  gap: 10px;
}

.group_button_wrapper {
  display: flex;
  align-items: center;
}

.ui_button {
  background-color: #dfd3ee;
  color: #7446af;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.ui_button:hover {
  background-color: #b58de7;
  color: white;
}

.ui_icon.settings {
  background: url('path/to/settings-icon.png') no-repeat center center;
  width: 20px;
  height: 20px;
}

.ProfileTabsCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.ProfileTabsCard .n-card-header {
  font-weight: bold;
}

.d-flex {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  /* Adjust the gap between images as needed */
}

.d-flexnew {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  /* Adjust the gap between images as needed */
}

.achievementImg {
  width: 70px;
  /* Adjust the width of the images */
  height: 70px;
  /* Adjust the height of the images */
  object-fit: cover;
  /* Ensure the images cover the space */
}
</style>
