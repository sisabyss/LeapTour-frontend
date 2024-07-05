<template>
    <div>
      <NavBar />
      <div class="ProfileAll">
        <div class="ui_container mTWoR YRrgV">
          <div class="VrhFU _T ui_card section">
            <div class="ckWkP">
              <div class="eYtRY">
                <div class="uLeBs f K MD">
                  <span class="kjIqZ I ui_social_avatar large xtra-large-tablet"
                    ><img src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f2/7a/default-avatar-2020-25.jpg" alt="avatar-image" /></span
                  ><span class="ecLBS _R shSnD"
                    ><span class="JWmxy">
                      <h1><span class="OUDwj b brsfY">USERNAME</span></h1> </span
                    ><span class="Dsdjn _R">@Email.com</span></span
                  >
                  <div class="BNUSk Md">
                    <div class="ObCEB">
                      <div class="Skngi _R _c _n z">
                        <span class="BFbMC">Contributions<!-- --> </span><span class="rNZKv">0</span>
                      </div>
                      <div class="Skngi _R _c _n z">
                        <span class="BFbMC">Followers<!-- --> </span><span class="rNZKv">0</span>
                      </div>
                      <div class="Skngi _R _c _n z">
                        <span class="BFbMC">Following<!-- --> </span><span class="rNZKv">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="KydPf">
                <div class="CpMuc">
                  <span class="group_button_wrapper"
                    ><a href="/Profile/396ggggg?edit="> <button class="ui_button EnLFm">Edit profile</button></a></span
                  ><span class="group_button_wrapper"><span></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ProfileTabs">
          <n-tabs type="line" animated>
            <n-tab-pane name="Trips" tab="旅行轨迹">
              <div style="height: 500px"><map1 :tourList="CityList" /></div>
              
              <n-card class="ProfileTabsCard" title="我与世界" style="height: 180px; margin-top: 20px; margin-bottom: 20px">
                世界一片空白，用你的脚印渐渐点亮它
                <div style="margin-top: 20px;"><ModalInputCity @upload-city="UploadCity"/></div>
              </n-card>
            </n-tab-pane>
  
            <n-tab-pane name="Photos" tab="照片墙">
              <n-card class="ProfileTabsCard" title="我与风光" style="height: 180px">
                摄影，只不过是一场记录孤独往事的过程，而我却乐在其中
                <p style="margin-top: 20px">记录瞬间美好</p>
              </n-card>
              <div style="padding-left: 30px; padding-right: 30px"><PhotoWall /></div>
            </n-tab-pane>
  
            <n-tab-pane name="Reviews" tab="城市小卡">
              <n-card class="ProfileTabsCard" title="我与城市" style="height: 150px">
                高楼林立的城市，是我们爱情的舞台，每一幕都流淌着浪漫的诗意。
                <div style="margin-top: 20px;"><ModalInputReview @upload-review="UploadCityStory"/></div>
              </n-card>
              <div><CityStory :StoryList="StoryList" /></div>
            </n-tab-pane>
          </n-tabs>
        </div>
        <div class="ProfileColumn">
          <n-card class="ProfileColumnCard" title="Your Achievements" header-style="font-weight:bold;font-size:2em;">
            Start sharing to unlock
            <n-card title="Write your first review"> Unlock photo milestones </n-card>
            <n-card title="Upload your first photos"> Unlock review milstones </n-card>
            <button class="ProfileButton">View all</button>
          </n-card>
          <n-card class="ProfileColumnCard" title="Intro">
            <div>
              <div class="ProfileIcon">
                <n-icons>
                  <Add />
                </n-icons>
              </div>
              <div class="ProfileAdd">Add your current city</div>
            </div>
            <div>
              <div class="ProfileIcon">
                <n-icons>
                  <Calendar />
                </n-icons>
              </div>
              <div class="ProfileAdd">Joined in June 2024</div>
            </div>
            <div>
              <div class="ProfileIcon">
                <n-icons>
                  <IbmCloudInternetServices />
                </n-icons>
              </div>
              <div class="ProfileAdd">Add a website</div>
            </div>
            <div>
              <div class="ProfileIcon">
                <n-icons>
                  <OrderDetails />
                </n-icons>
              </div>
              <div class="ProfileAdd">Write some details about you</div>
            </div>
          </n-card>
          <n-card class="ProfileColumnCard" title="Share your travel advice">
            <div>
              <div class="ProfileIcon">
                <n-icons>
                  <Camera />
                </n-icons>
              </div>
              <router-link to="/">
                <div class="ProfileAdd">Phost Photos</div>
              </router-link>
            </div>
            <div>
              <div class="ProfileIcon">
                <n-icons>
                  <Pen />
                </n-icons>
              </div>
              <router-link to="/">
                <div class="ProfileAdd">Write review</div>
              </router-link>
            </div>
          </n-card>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { Add, Calendar, IbmCloudInternetServices, OrderDetails, Camera, Pen } from '@vicons/carbon';
  import {  NCard, NTabPane, NTabs } from 'naive-ui';
  import NavBar from '../components/NavBar.vue';
  import map1 from '../components/map.vue';
  import PhotoWall from '../components/PhotoWall.vue';
  import { ref } from 'vue';
  import  ModalInputCity  from '../components/ModalInputCity.vue';
  import  ModalInputReview from '../components/ModalInputReview.vue';
  import axios from 'axios';
  import CityStory from '../components/CityStory.vue';
  const Email = "123123@qq.com";
  const StoryPost = ref({});
  const StoryList = ref([]);
  // 旅行心得子组件将数据emit发射给父组件
  const UploadCityStory = (data) => {
    
    StoryPost.value = JSON.stringify(data);
  
    console.log(StoryPost.value);
    PassUserStoryList(StoryPost.value);
  };
  // 旅行心得子组件将数据emit发射给父组件触发的函数
  async function GetUserStoryList() {
      try {
          const response = await axios.get('http://192.168.1.145:8080/info/getComment', {
              params: { email: Email }
          })
          console.log('获取成功');
          StoryList.value = response.data.data;
          console.log(StoryList.value);
      } catch (error) {
          console.error('获取失败', error)
      }
  }
  async function PassUserStoryList(story) {
      try {
           console.log("参数",story);
          const response = await axios.get('http://192.168.1.145:8080/info/sendComment', {
              params: { email: Email,
                        comment: story
              }
          })
          console.log(response.data.msg);
          GetUserStoryList();
      } catch (error) {
          console.error('获取失败', error)
      }
  };
  
  
  //将子组件传出的city，用于传给后端
  const CityPost = ref('');
  
  const CityList = ref([]);
  //将子组件传出的city，用于获得后端返回的城市数据
  async function GetUserCityList() {
      try {
          const response = await axios.get('http://192.168.1.145:8080/info/getMarkedCity', {
              params: { email: Email }
          })
          console.log('获取成功');
          CityList.value = response.data.data;
          console.log(CityList.value);
      } catch (error) {
          console.error('获取失败', error)
      }
  }
  // 向后端发送城市数据并获得相应的数据
  async function PassUserCityList(city) {
      try {
          const response = await axios.get('http://192.168.1.145:8080/info/markCity', {
              params: { email: Email,   
                        markedCity: city
               }
          })
          console.log(response.data.msg);
          GetUserCityList();
      } catch (error) {
          console.error('获取失败', error)
      }
  };
  // 点亮城市子组件将数据emit发射给父组件触发的函数
  const UploadCity = (data) => {
    CityPost.value = data;
    console.log(CityPost.value);
    PassUserCityList(CityPost.value);
  };
  
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
  
  .ProfileButton.hover {
    margin-top: 30px;
    background-color: white;
    color: black;
    width: 100%;
    height: 40px;
    border-radius: 20px;
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
    width: 350px;
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
    /* Adjusted margin */
    width: 750px;
    /* Adjusted width */
    padding: 5px;
    /* Adjusted padding */
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
  
  /* Card layout */
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
    /* Increase spacing between avatar and text */
  }
  
  .large {
    width: 80px;
    /* Adjust size for better alignment */
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
    /* Increase spacing between contributions, followers, and following */
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
  
  /* Profile buttons */
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
    display: inline-block;
  }
  
  /* Center card content */
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
  
  .card-hover-effect {
    transition: all 0.3s ease; /* 平滑过渡效果 */
  }
  
  .card-hover-effect:hover {
    transform: translateY(-5px); /* 鼠标悬浮时向上移动5像素 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 鼠标悬浮时添加阴影效果 */
  }
  </style>
  