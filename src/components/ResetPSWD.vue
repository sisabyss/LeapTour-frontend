<script setup>
import { ref } from 'vue'
import axios from 'axios'

let user = ref({
  email: '',
  password: '',
  verifycode: ''
})

let countdown = ref(60)
let countdown_flag = ref(true)

const emit = defineEmits(['openSignIn', 'openSignUp', 'closeModalFromReset'])

async function verify() {
  if (user.value.verifycode !== '' && user.value.verifycode !== null) {
    const response = await axios.get('http://192.168.1.145:8080/mail/checkMail', {
      params: {
        email: user.value.email,
        number: user.value.verifycode,
        newPassword: user.value.password
      }
    })
    console.log(response)
    if (response.data.code == 200) {
      alert('修改成功')
      emit('closeModalFromReset')
    }
  } else {
    alert('请输入验证码')
  }
}

async function getVerifyCode() {
  if (user.value.email !== '' && user.value.email != null) {
    await axios.get('http://192.168.1.145:8080/mail/sendMail', {
      params: {
        email: user.value.email
      }
    })
    countdown.value = 60
    countdown_flag.value = false
    let timer = setInterval(() => {
      countdown.value = countdown.value - 1
      if (countdown.value == 0) {
        clearInterval(timer)
        countdown_flag.value = true
      }
    }, 1000)
  } else {
    alert('请输入正确的邮箱')
  }
}

function toSignUp() {
  emit('openSignUp')
}

function toSignIn() {
  emit('openSignIn')
}
</script>

<template>
  <div
    class="LeftColumn"
    style="
      width: 593px;
      height: 829px;
      padding: 32px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      display: inline-flex;
    "
  >
    <div
      class="Top"
      style="
        align-self: stretch;
        height: 32px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        display: flex;
      "
    >
      <div
        class="Logo"
        style="justify-content: flex-start; align-items: center; gap: 12px; display: inline-flex"
      >
        <div class="Icon" style="width: 32px; height: 32px; position: relative"></div>
        <div
          class="Revolutie"
          style="
            text-align: center;
            color: #232323;
            font-size: 24px;
            font-family: Inter;
            font-weight: 600;
            line-height: 26.4px;
            word-wrap: break-word;
          "
        >
          旅兔
        </div>
      </div>
    </div>
    <div
      class="Content"
      style="
        width: 527px;
        height: 725px;
        padding-left: 64px;
        padding-right: 64px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 32px;
        display: flex;
      "
    >
      <div
        class="Text"
        style="
          align-self: stretch;
          height: 83px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 12px;
          display: flex;
        "
      >
        <div
          class="SignIn"
          style="
            text-align: center;
            color: #232323;
            font-size: 40px;
            font-family: Inter;
            font-weight: 700;
            line-height: 44px;
            word-wrap: break-word;
          "
        >
          重设密码
        </div>
        <div
          class="PleaseLoginToContinueToYourAccount"
          style="
            align-self: stretch;
            color: #969696;
            font-size: 18px;
            font-family: Inter;
            font-weight: 400;
            line-height: 27px;
            word-wrap: break-word;
          "
        >
          请输入原账号邮箱和新密码
        </div>
      </div>
      <div
        class="Form"
        style="
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 20px;
          display: flex;
        "
      >
        <input
          type="text"
          class="Input"
          placeholder="邮箱:"
          v-model="user.email"
          style="width: 399px; padding: 16px; border-radius: 10px; border: 1px #d9d9d9 solid"
        />

        <input
          type="password"
          class="Input"
          placeholder="密码:"
          style="width: 399px; padding: 16px; border-radius: 10px; border: 1px #d9d9d9 solid"
          v-model="user.password"
        />
        <div>
          <input
            type="text"
            class="Input"
            placeholder="验证码:"
            v-model="user.verifycode"
            style="width: 399px; padding: 16px; border-radius: 10px; border: 1px #d9d9d9 solid"
          />
        </div>
        <div
          v-if="countdown_flag"
          @click="getVerifyCode"
          style="
            color: black;
            font-size: 18px;
            font-family: Inter;
            font-weight: 600;
            text-decoration: underline;
            line-height: 27px;
            word-wrap: break-word;
          "
        >
          获取验证码
        </div>
        <div v-else>
          {{ countdown }}
        </div>

        <!-- 提交按钮 -->
        <button
          type="button"
          class="Button"
          @click="verify"
          style="
            align-self: stretch;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 16px;
            padding-bottom: 16px;
            background: black;
            border-radius: 10px;
            border: 1px solid;
          "
        >
          <div
            class="SignIn"
            style="
              color: white;
              font-size: 18px;
              font-family: Inter;
              font-weight: 600;
              line-height: 21.6px;
              word-wrap: break-word;
            "
          >
            验证
          </div>
        </button>

        <button
          type="button"
          class="Button"
          style="
            align-self: stretch;
            height: 54px;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 16px;
            padding-bottom: 16px;
            background: white;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.03);
            border-radius: 10px;
            border: 1px #e6e8e7 solid;
          "
        >
          <div
            class="SignInWithGoogle"
            @click="toSignIn"
            style="
              color: #232323;
              font-size: 18px;
              font-family: Inter;
              font-weight: 600;
              line-height: 21.6px;
              word-wrap: break-word;
            "
          >
            回到登录
          </div>
        </button>
      </div>
      <div class="NeedAnAccountCreateOne" style="align-self: stretch; text-align: center">
        <span
          style="
            color: #6c6c6c;
            font-size: 18px;
            font-family: Inter;
            font-weight: 400;
            line-height: 27px;
            word-wrap: break-word;
          "
        >
          需要一个新账号?
        </span>
        <span
          style="
            color: black;
            font-size: 18px;
            font-family: Inter;
            font-weight: 600;
            text-decoration: underline;
            line-height: 27px;
            word-wrap: break-word;
          "
          @click="toSignUp"
        >
          创建
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.StyledInput {
  width: 399px;
  padding: 16px;
  border-radius: 10px;
  border: 1px #d9d9d9 solid;
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
  transition: all 0.3s ease;
  /* 动画效果，平滑过渡 */
}

.KeepMeLoggedIn:hover {
  text-decoration: underline;
  /* 鼠标悬停时添加下划线 */
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
