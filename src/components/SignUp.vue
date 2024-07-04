<template>
    <modal ref="modal">
        <div class="NavBarSignIn">
            <SignIn />
        </div>
    </modal>
    <div class="Content"
        style="width: 527px; height: 725px; padding-left: 64px; padding-right: 64px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 32px; display: flex">
        <div class="Text"
            style="align-self: stretch; height: 83px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
            <div class="SignIn"
                style="text-align: center; color: #232323; font-size: 40px; font-family: Inter; font-weight: 700; line-height: 44px; word-wrap: break-word">
                欢迎加入！
            </div>
            <div class="PleaseLoginToContinueToYourAccount"
                style="align-self: stretch; color: #969696; font-size: 18px; font-family: Inter; font-weight: 400; line-height: 27px; word-wrap: break-word">
                旅兔: 开启美好旅行
            </div>
        </div>
        <div class="Form"
            style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; display: flex">

            <!-- 新的Input组件 -->
            <input type="text" class="Input" placeholder="用户名:"
                style="width: 399px; padding: 16px; border-radius: 10px; border: 1.50px #367AFF solid;"
                v-model="user1.name">


            <input type="text" class="Input" placeholder="邮箱:"
                style="width: 399px; padding: 16px; border-radius: 10px; border: 1.50px #367AFF solid;"
                v-model="user1.email">

            <input type="password" class="Input" placeholder="密码:"
                style="width: 399px; padding: 16px; border-radius: 10px; border: 1px #D9D9D9 solid;"
                v-model="user1.password" @input="checkPassword">

            <!-- 新增密码要求 -->
            <div class="password-requirements">
                <div :class="{ 'requirement-met': isLongEnough, 'requirement-not-met': !isLongEnough }">
                    <span v-if="isLongEnough">&#10003;</span>
                    <span v-else>&#10005;</span>
                    <span :style="{ color: isLongEnough ? 'green' : 'grey' }">至少十个字符</span>
                </div>
                <div :class="{ 'requirement-met': hasSpecialChar, 'requirement-not-met': !hasSpecialChar }">
                    <span v-if="hasSpecialChar">&#10003;</span>
                    <span v-else>&#10005;</span>
                    <span :style="{ color: hasSpecialChar ? 'green' : 'grey' }">包含特殊字符</span>
                </div>
            </div>

            <!-- 提交按钮 -->
            <button type="button" class="Button" @click="register"
                style="align-self: stretch; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; background: black; border-radius: 10px; border: 1px solid;">
                <div class="SignIn"
                    style="color: white; font-size: 18px; font-family: Inter; font-weight: 600; line-height: 21.60px; word-wrap: break-word">
                    加入旅兔
                </div>
            </button>
            <div class="NeedAnAccountCreateOne" style="align-self: stretch; text-align: center;">
                <span
                    style="color: #6C6C6C; font-size: 18px; font-family: Inter; font-weight: 400; line-height: 27px; word-wrap: break-word;">
                    账号已经存在?
                </span>
                <span
                    style="color: black; font-size: 18px; font-family: Inter; font-weight: 600; text-decoration: underline; line-height: 27px; word-wrap: break-word;"
                    @click="$refs.modal.openModal()">
                    返回登录
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Modal from './Modal.vue';
import SignIn from './SignIn.vue';
import { ref, computed } from 'vue';
import axios from 'axios';
const user = ref({
    name: '',
    email: '',
    password: ''
});


const isLongEnough = computed(() => user1.value.password.length >= 10);
const hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(user1.value.password));


const emit = defineEmits(['closeModalSignIn']);

const user1 = ref(user);

const register = async () => {
    try {
        // const jsonstring = JSON.stringify(user1.value);
        const response = await axios.get(
            `http://192.168.1.145:8080/user/register`,
            {   
                params: {
                    name: user1.value.name,
                    email: user1.value.email,
                    password: user1.value.password,
                },
            },
            {}
        );
        const message = response.data;
        console.log(message);
        if(message.code==200)
        {
            alert(message.msg);
            emit('closeModalSignUp');
        }
        else if(message.code==500)
        {
            alert(message.msg);
        }
    } catch (error) {
        console.log('发送数据时出错', error);
        alert('登录请求失败，请稍后再试');
    }
};

</script>

<style scoped>
/* 添加你的样式 */
.password-requirements {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.requirement-met {
    color: green;
    display: flex;
    align-items: center;
}

.requirement-not-met {
    color: grey;
    display: flex;
    align-items: center;
}

.requirement-met span,
.requirement-not-met span {
    margin-right: 5px;
}
</style>
