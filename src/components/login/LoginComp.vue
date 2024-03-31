<template>
    <div class="container" id="container" ref="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form class="sign-in-form">
                    <h2 class="title">登 录</h2>
                    <div class="input-field" :class="{ 'error': !validEmail }">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="邮箱" v-model="authCodeDTO.email" />
                    </div>
                    <div class="input-field" :class="{ 'error': !validPwd }">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="密码" v-model="authCodeDTO.password">
                    </div>
                    <div class="find-pwd">
                        <a href="#" @click="to_retrieve">找回密码</a>
                    </div>
                    <input type="button" value="登录" class="btn solid" @click="login">
                </form>
                <form class="sign-up-form">
                    <h2 class="title">{{ sub_title }}</h2>
                    <div class="input-field" :class="{ 'error': !validEmail }">
                        <i class="fas fa-envelope"></i>
                        <input name="email" type="email" placeholder="邮箱" v-model="authCodeDTO.email"
                            @input="validateEmail(authCodeDTO.email)" />
                        <div></div>
                        <span class="error-msg" v-if="!validEmail">邮箱格式错误</span>
                    </div>
                    <div class="input-field" :class="{ 'error': !validPwd }">
                        <i class="fas fa-lock"></i>
                        <input name="password" type="password" :placeholder="sub_placeholder"
                            v-model="authCodeDTO.password" @input="validatePwd(authCodeDTO.password)" />
                        <div></div>
                        <span class="error-msg" v-if="!validPwd">密码长度需大于8位</span>
                    </div>
                    <div id="flex-container">
                        <div class="input-field" id="val-code-input" :class="{ 'error': !validCode }">
                            <i class="fas fa-code"></i>
                            <input type="text" placeholder="验证码" v-model="authCodeDTO.code" />
                        </div>
                        <div id="val-code-container">
                            <button class="btn" id="val-code-btn" :disabled="disabled" @click="sendValCode"
                                :style="{ backgroundColor: valBtnColor }">{{ buttonText }}</button>
                        </div>
                    </div>
                    <input type="button" class="btn" :value="btn_placeholder" @click="register_retrieve" />
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>欢迎使用🚀XCode Online Judge(XOJ) 代码在线评测平台！</h3>
                    <p class="welcome-info">
                        还 没 有 账 户 ？
                    </p>
                    <button class="btn transparent" id="sign-up-btn" @click="switchToSignUpMode">
                        点我注册
                    </button>
                </div>
                <img src="@/assets/img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>欢迎使用🚀XCode Online Judge(XOJ) 代码在线评测平台！</h3>
                    <p class="welcome-info">
                        已 经 有 账 户 了 ?
                    </p>
                    <button class="btn transparent" id="sign-in-btn" @click="switchToSignInMode">
                        点我登录
                    </button>
                </div>
                <img src="@/assets/img/register.svg" class="image" alt="" />
            </div>
        </div>
        <button class="btn-back">
            <i class="fas">返回</i><i class="fas fa-arrow-right"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
import request from "@/api/requests";
import "@/assets/js/login-64d58.js";
import { ElMessage } from "element-plus";
import { ref, reactive, watch } from 'vue';

const container = ref<HTMLElement | null>(null);

// 验证邮箱是否正确
const validEmail = ref(true);
const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validEmail.value = emailRegex.test(email) && email.length > 0;
}
// 验证密码长度是否大于8位
const validPwd = ref(true);
const validatePwd = (password: string) => {
    validPwd.value = password.length >= 8;
}
// 验证是否已经输入验证码
const validCode = ref(true);
const validateCode = (code: string) => {
    validCode.value = code.length > 0;
}

// 切换到注册模式
const switchToSignUpMode = () => {
    sub_title.value = "注 册";
    sub_placeholder.value = "密码";
    btn_placeholder.value = "注册";
    authCodeDTO.mode = 0;
    if (container.value) {
        container.value.classList.add('sign-up-mode');
    }
};

// 切换到登录模式
const switchToSignInMode = () => {
    if (container.value) {
        container.value.classList.remove('sign-up-mode');
    }
};

// 发送验证码
const authCodeDTO = reactive({
    email: "",
    code: "",
    password: "",
    mode: 0
})
const disabled = ref(false);
const buttonText = ref('发送验证码');
const valBtnColor = ref('#5995fd');
const sendValCode = () => {

    if (!disabled.value) {
        disabled.value = true;
        buttonText.value = '60s';
        let countDown = 1;
        valBtnColor.value = 'gray'; // 修改按钮颜色为灰色
        const timer = setInterval(() => {
            countDown--;
            buttonText.value = `${countDown}s`;
            if (countDown === 0) {
                clearInterval(timer);
                buttonText.value = '发送验证码';
                valBtnColor.value = '#5995fd';
                disabled.value = false;
            }
        }, 1000);
        if (sub_title.value === "注 册") {
            // 向后端服务器发送验证码请求
            request.post("/account/auth/sendCode", authCodeDTO).then(resp => {
                if (resp.data.status == 200) {
                    ElMessage.success("验证码发送成功")
                }
            })
        } else if (sub_title.value === "找 回 密 码") {
            // 向后端服务器发送找回密码消息
            request.post("/account/auth/sendCode", authCodeDTO).then(resp => {
                    if (resp.data.status == 200) {
                        ElMessage.success("验证码发送成功")
                    }
                })
        }
    }
};

// 注册
const register_retrieve = () => {
    validateEmail(authCodeDTO.email);
    validatePwd(authCodeDTO.password);
    validateCode(authCodeDTO.code);
    if (sub_title.value === "注 册"){
        if (validEmail.value && validPwd.value && authCodeDTO.code.length > 0) {
            request.post("/account/auth/register", authCodeDTO).then((resp) => {
                if (resp.data.status == 200) {
                    ElMessage.success("注册成功");
                    switchToSignInMode();   // 跳转到登录界面
                }
            })
        }
        else {
            ElMessage.error("请输入完整信息")
        }        
    } else if (sub_title.value === "找 回 密 码") {
        if (validEmail.value && validPwd.value && authCodeDTO.code.length > 0) {
            request.post("/account/auth/retrieve", authCodeDTO).then((resp) => {
                if (resp.data.status == 200) {
                    ElMessage.success("修改密码成功");
                    switchToSignInMode();   // 跳转到登录界面
                }
            })
        }
        else {
            ElMessage.error("请输入完整信息")
        }  
    }

}

// 登录
const login = () => {
    validateEmail(authCodeDTO.email);
    validatePwd(authCodeDTO.password);
    if (validEmail.value && validPwd.value) {
        request.post("/account/auth/login", authCodeDTO).then(resp => {
            if (resp.data.status == 200) {
                ElMessage.success("登录成功");
            }
        })
    } else {
        ElMessage.error("请输入完整信息")
    }
}

// 找回密码
const sub_title = ref("注 册");
const sub_placeholder = ref("密码");
const btn_placeholder = ref("注册");
const to_retrieve = () => {
    sub_title.value = "找 回 密 码";
    sub_placeholder.value = "新密码";
    btn_placeholder.value = "确定";
    authCodeDTO.mode = 1;
    if (container.value) {
        container.value.classList.add('sign-up-mode');
    }
}
</script>

<style scoped>
@import "@/assets/css/login.css";

.btn-back {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    z-index: 9999;
    transition: transform 0.2s ease-in-out;
}

@media (min-width: 870px) {
    .btn-back {
        color: #333;
        /* 默认颜色为黑色 */
        transition: transform 0.5s ease-in-out, color 2s ease-in-out;
        /* 添加颜色过渡效果 */
    }

    /* 如果容器有 sign-up-mode 类，则将按钮颜色设置为白色 */
    .container.sign-up-mode .btn-back {
        color: #fff;
    }
}

@media (max-width: 860px) {
    .btn-back {
        color: #fff;
        /* 默认颜色为黑色 */
        transition: transform 0.5s ease-in-out, color 2s ease-in-out;
        /* 添加颜色过渡效果 */
    }

    /* 如果容器有 sign-up-mode 类，则将按钮颜色设置为白色 */
    .container.sign-up-mode .btn-back {
        color: #333;
    }
}

/* 悬停时放大按钮 */
.btn-back:hover {
    transform: scale(1.1);
}

.welcome-info {
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
}

#sign-in-btn {
    margin-top: 10px;
}

#sign-up-btn {
    margin-top: 10px;
}

#flex-container {
    max-width: 380px;
    width: 100%;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    background-color: #f0f0f0;
    display: flex;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    align-items: center;
    justify-content: space-between;
}

#val-code-container {
    max-width: 140px;
    min-width: 80px;
    width: 100%;
}

#val-code-btn {
    width: 100%;
    background-color: #5995fd;
    height: 49px;
    border-radius: 20px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
}

.error-msg {
    color: red;
    width: 100%;
    text-align: center;
}

.input-field.error {
    border: 1px solid red;
    border-radius: 49px;
}

.find-pwd {
    max-width: 380px;
    width: 100%;
    text-align: right;
}
</style>