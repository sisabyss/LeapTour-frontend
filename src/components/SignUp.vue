<template>
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
                v-model="user1.username">

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
                    <span :style="{ color: isLongEnough ? 'green' : 'grey' }">至少为十个字符</span>
                </div>
                <div :class="{ 'requirement-met': hasSpecialChar, 'requirement-not-met': !hasSpecialChar }">
                    <span v-if="hasSpecialChar">&#10003;</span>
                    <span v-else>&#10005;</span>
                    <span :style="{ color: hasSpecialChar ? 'green' : 'grey' }">包含特殊字符</span>
                </div>
            </div>

            <!-- 提交按钮 -->
            <button type="button" class="Button" @click="login"
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
                <router-link to="/signin"
                    style="color: black; font-size: 18px; font-family: Inter; font-weight: 600; text-decoration: underline; line-height: 27px; word-wrap: break-word;">
                    返回登录
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const user1 = ref({
    username: '',
    email: '',
    password: ''
});

const isLongEnough = computed(() => user1.value.password.length >= 10);
const hasSpecialChar = computed(() => /[!@#$%^&*(),.?":{}|<>]/.test(user1.value.password));

const checkPassword = () => {
    // This function can contain additional logic if needed
};

const router = useRouter();

const login = () => {
    // 登录逻辑
    console.log('Logging in with', user1.value);
    router.push('/');
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

requirement-not-met {
    color: grey;
    display: flex;
    align-items: center;
}

.requirement-met span,
.requirement-not-met span {
    margin-right: 5px;
}
</style>