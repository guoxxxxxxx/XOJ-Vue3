<template>
    <div class="container" id="container" ref="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form action="#" class="sign-in-form">
                    <h1 class="title" id="main-title">欢 迎 使 用 🚀 XOJ!</h1>
                    <h2 class="title">登 录</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="邮箱/学号/手机号" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="密码" />
                    </div>
                    <input type="submit" value="登录" class="btn solid" />
                    <p class="social-text">其他方式登录</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </form>
                <form action="#" class="sign-up-form">
                    <h2 class="title">注 册</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="昵称" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="邮箱" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="密码" />
                    </div>
                    <input type="submit" class="btn" value="登 录" />
                    <p class="social-text">第三方注册</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
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
                    <p class="welcome-info" >
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
import "@/assets/js/login-64d58.js";
import { ref } from 'vue';

const container = ref<HTMLElement | null>(null);

// 切换到注册模式
const switchToSignUpMode = () => {
    console.log(container);
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

#main-title {
    margin-top: -30px;
}

.welcome-info {
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
}

#sign-in-btn {
    margin-top: 10px;
}

#sign-up-btn{
    margin-top: 10px;
}
</style>