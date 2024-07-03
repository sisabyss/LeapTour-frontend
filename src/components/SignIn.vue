
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
const user = {
    name: '',
    password: '',
    email: ''
}
const router = useRouter();
const user1 = ref(user);

const login = async () => {
    try {
        const jsonstring = JSON.stringify(user1.value);
        const response = await axios.post('http://192.168.1.145:8080/user/login', jsonstring, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const message = response.data;
        console.log(message);
        // 根据不同的消息，执行不同的操作
        if (message === 'User Not Exist') {
            alert('用户不存在');
        } else if (message === 'Password Error') {
            alert('密码错误');
        } else if (message === 'Login Success') {
            alert('登录成功');
            // 跳转到首页
            // window.location.href = '/home';
            router.push('/');
        } else {
            // 如果有其他消息，可以在这里处理
            alert('未知错误');
        }
    } catch (error) {
        console.log('发送数据时出错', error);
        alert('登录请求失败，请稍后再试');
    }
};

</script>


<template>
    <div class="LeftColumn"
        style="width: 593px; height: 829px; padding: 32px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
        <div class="Top"
            style="align-self: stretch; height: 32px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
            <div class="Logo" style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex">
                <div class="Icon" style="width: 32px; height: 32px; position: relative">
                </div>
                <div class="Revolutie"
                    style="text-align: center; color: #232323; font-size: 24px; font-family: Inter; font-weight: 600; line-height: 26.40px; word-wrap: break-word">
                    旅兔</div>
            </div>
        </div>
        <div class="Content"
            style="width: 527px; height: 725px; padding-left: 64px; padding-right: 64px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 32px; display: flex">
            <div class="Text"
                style="align-self: stretch; height: 83px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
                <div class="SignIn"
                    style="text-align: center; color: #232323; font-size: 40px; font-family: Inter; font-weight: 700; line-height: 44px; word-wrap: break-word">
                    欢迎回来</div>
                <div class="PleaseLoginToContinueToYourAccount"
                    style="align-self: stretch; color: #969696; font-size: 18px; font-family: Inter; font-weight: 400; line-height: 27px; word-wrap: break-word">
                    Please login to continue to your account.</div>
            </div>
            <div class="Form"
                style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">
                <input type="text" class="Input" placeholder="Email:"
                    style="width: 399px; padding: 16px; border-radius: 10px; border: 1.50px #367AFF solid;"
                    v-model="user1.email">

                <input type="password" class="Input" placeholder="Password:"
                    style="width: 399px; padding: 16px; border-radius: 10px; border: 1px #D9D9D9 solid;"
                    v-model="user1.password">

                <!-- 忘记登陆块 -->
                <a href="baidu.com" class="Keep">
                    
                    <div class="KeepMeLoggedIn">
                        Forget your password?
                    </div>
                </a>

                <!-- 提交按钮 -->
                <button type="button" class="Button" @click="login"
                    style="align-self: stretch; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; background: black; border-radius: 10px; border: 1px solid;">
                    <div class="SignIn"
                        style="color: white; font-size: 18px; font-family: Inter; font-weight: 600; line-height: 21.60px; word-wrap: break-word">
                        Sign in</div>
                </button>

                <div class="Or"
                    style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                    <div class="Vector1" style="flex: 1 1 0; height: 0px; border: 1px #D9D9D9 solid"></div>
                    <div class="Or"
                        style="color: #6E6E6E; font-size: 16px; font-family: Inter; font-weight: 500; line-height: 24px; word-wrap: break-word">
                        非会员？</div>
                    <div class="Vector2" style="flex: 1 1 0; height: 0px; border: 1px #D9D9D9 solid"></div>
                </div>

                <button type="button" class="Button"
                    style="align-self: stretch; height: 54px; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; background: white; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.03); border-radius: 10px; border: 1px #E6E8E7 solid;">
                    <div class="SignInWithGoogle"
                        style="color: #232323; font-size: 18px; font-family: Inter; font-weight: 600; line-height: 21.60px; word-wrap: break-word">
                        Sign in with Google</div>

                </button>
            </div>
            <div class="NeedAnAccountCreateOne" style="align-self: stretch; text-align: center;">
                <span
                    style="color: #6C6C6C; font-size: 18px; font-family: Inter; font-weight: 400; line-height: 27px; word-wrap: break-word;">
                    Need an account?
                </span>
                <a href="baidu.com"
                    style="color: black; font-size: 18px; font-family: Inter; font-weight: 600; text-decoration: underline; line-height: 27px; word-wrap: break-word;">
                    Create one
                </a>
            </div>
        </div>
        </div>


</template>


<style scoped>
.StyledInput {
    width: 399px;
    padding: 16px;
    border-radius: 10px;
    border: 1px #D9D9D9 solid;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 27px;
    word-wrap: break-word;
}
.Keep {
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: inline-flex;
}

.KeepMeLoggedIn {
    color: #232323;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 24px;
    word-wrap: break-word;
    transition: all 0.3s ease; /* 动画效果，平滑过渡 */
}

.KeepMeLoggedIn:hover {
    text-decoration: underline; /* 鼠标悬停时添加下划线 */
}

.signIn-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  /* 其他样式 */
}



</style>