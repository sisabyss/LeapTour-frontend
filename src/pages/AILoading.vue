<template>
    <div class="cssloader">
      <div class="sh1"></div>
      <div class="sh2"></div>
      <h4 class="lt">AI正在为您规划路线...</h4>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    // 如果有需要在加载时执行的其他逻辑，可以在这里添加
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100');
  body {
    background: #333;
  }
  
  /** page **/
  .cssloader {
    padding-top: calc(45vh - 25px);
  }
  
  /** loader **/
  .sh1 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0 0;
    border-color: #354952 transparent transparent transparent;
    margin: 0 auto;
    animation: shk1 1s ease-in-out infinite normal;
  }
  
  .sh2 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 50px 50px;
    border-color: transparent transparent #df1a54 transparent;
    margin: -50px auto 0;
    animation: shk2 1s ease-in-out infinite alternate;
  }
  
  /** animation starts here **/
  @keyframes shk1 {
    0% {
      transform: rotate(-360deg);
    }  
    100% {
    }
  }
  
  @keyframes shk2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
    }
  }
  
  .lt {
    margin: 30px auto;
    text-align: center;
    font-weight: bold;
    letter-spacing: 10px;
    margin-top: 80px;
    font-size: 2em;
    font-weight: bold;
    color: #333;
    padding-bottom: 10px;
  }
  </style>
  