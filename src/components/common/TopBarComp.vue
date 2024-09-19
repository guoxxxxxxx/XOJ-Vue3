<template>
    <div style="width: 100%;">
        <header style="width: 100%;">
            <router-link class="header-title" to="/">🚀 X O J</router-link>
            <div class="header-menu">
                <a @click="" class="header-menu-item">
                    <search-outlined /> 搜索
                </a>
                <router-link to="/" class="header-menu-item">
                    <home-filled /> 首页
                </router-link>
                <router-link to="/question" class="header-menu-item">
                    <container-filled /> 题库
                </router-link>
                <router-link to="/category" class="header-menu-item">
                    <book-filled /> 分类
                </router-link>
                <router-link to="/tag" class="header-menu-item">
                    <tags-filled /> 标签
                </router-link>
                <router-link to="/link" class="header-menu-item">
                    <api-filled /> 友链
                </router-link>
                <!-- v-if="store.userInfo.id == null -->
                <router-link to="/login" class="header-menu-item">
                    <UserOutlined /> 登录
                </router-link>
                <router-link to="/uploadProblem" class="header-menu-item" v-if="store.userInfo.id != null">
                    <setting-filled /> 管理
                </router-link>
                <router-link to="/setting" class="header-menu-item" v-if="store.userInfo.id != null">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </router-link>
                <span class="header-menu-item" v-else>
                    <a-avatar :size="30" src="" />
                    <div class="menus-submenu">
                        <ul>
                            <li>
                                <router-link to="/setting">
                                    <user-outlined /> 个人中心
                                </router-link>
                            </li>
                            <li>
                                <a @click="">
                                    <message-filled /> 消息中心
                                </a>
                            </li>
                            <li>
                                <a @click="">
                                    <logout-outlined /> 退出登录
                                </a>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
            <div class="header-menu-mobile">
                <a @click="" class="header-menu-item">
                    <search-outlined style="font-size: 24px;" />
                </a>
                <a class="header-menu-item" @click="">
                    <menu-outlined style="font-size: 24px;" />
                </a>
                <!-- <a-drawer placement="" :closable="false" @close="" :width="240" :zIndex="99">
                    <div>
                        <div class="blog-avatar">
                            <a-avatar src="" :size="110" />
                        </div>
                        <div style="font-size: 1.375rem;margin-top: 0.625rem;text-align: center;">
                            {{ `pinia.blogInfo.websiteConfig.websiteAuthor` }}
                        </div>
                        <div style="font-size: 0.875rem; text-align: center">
                            {{ `pinia.blogInfo.websiteConfig.websiteIntro` }}
                        </div>
                        <div class="blog-info">
                            <a-row>
                                <a-col :span="8">文章</a-col>
                                <a-col :span="8">标签</a-col>
                                <a-col :span="8">分类</a-col>
                            </a-row>
                            <a-row>
                                <a-col :span="8">{{ `pinia.blogInfo.articleCount` }}</a-col>
                                <a-col :span="8">{{
                    `pinia.blogInfo.categoryCount`
                }}</a-col>
                                <a-col :span="8">{{ `pinia.blogInfo.tagCount` }}</a-col>
                            </a-row>
                        </div>
                        <hr />
                        <div class="drawer-menu">
                            <router-link to="/" class="header-menu-item">
                                <home-filled /> <i>首页</i>
                            </router-link>
                            <router-link to="/archive" class="header-menu-item">
                                <container-filled /> <i>归档</i>
                            </router-link>
                            <router-link to="/category" class="header-menu-item">
                                <book-filled /> <i>分类</i>
                            </router-link>
                            <router-link to="/tag" class="header-menu-item">
                                <tags-filled /> <i>标签</i>
                            </router-link>
                            <router-link to="/link" class="header-menu-item">
                                <api-filled /> <i>友链</i>
                            </router-link>
                        </div>
                    </div>
                </a-drawer> -->
            </div>
        </header>
    </div>
</template>

<script lang='ts' setup>
import {
    HomeFilled,
    BookFilled,
    TagsFilled,
    ContainerFilled,
    SettingFilled,
    LogoutOutlined,
    UserOutlined,
    ApiFilled,
    MessageFilled,
    MenuOutlined,
    SearchOutlined,
} from "@ant-design/icons-vue";
import { piniaStore } from "@/stores/counter";

const store = piniaStore();

</script>

<style scoped>
@import "@/assets/css/index.css";

header {
    position: absolute;
    top: 0;
    height: 60px;
    width: 100%;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    box-sizing: border-box;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    --text-color: #eeeeee;
    --text-hover-color: white;
    animation: fadeUpIn 1s;
    background-color: #04befe;
    /* position: fixed; */
}

.blog-avatar {
    padding: 20px;
    text-align: center;
    transition: all 0.5s;
}

.blog-avatar:hover {
    transform: rotate(360deg);
}

.blog-info {
    margin-top: 16px;
    text-align: center;
    color: #222222;
}

hr {
    position: relative;
    margin: 16px auto;
    border: 2px dashed #d2ebfd;
    width: calc(100% - 4px);
}


.header-title {
    width: 150px;
    color: var(--text-color);
    font-size: 23px;
    font-family: "Kanit";
    text-decoration: none;
    transition: all 0.2s;
    text-align: center;
}

.header-title:hover {
    color: var(--text-hover-color);
}

.header-icon {
    margin-right: 7px;
}

.drawer-menu {
    display: flex;
    position: relative;
    flex-direction: column;
}

.header-menu {
    display: flex;
    align-items: center;

    @media (max-width: 759px) {
        flex-direction: column;
    }

    position: relative;
}

.header-menu-mobile {
    display: none;
    position: relative;
}

.header-menu-item {
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    padding-bottom: 5px;
    margin-left: 25px;

    @media (min-width: 760px) {
        font-size: 14px;
        transition: color 0.4s ease-in-out;
    }

    @media (max-width: 759px) {
        font-size: 18px;

        i {
            margin-left: 25px;
        }
    }
}


@media (min-width: 760px) {
    .header-menu-item:after {
        content: "";
        width: 0;
        height: 3px;
        background: #80c8f8;
        position: absolute;
        bottom: 0;
        left: 50%;
        transition: all 0.4s ease-in-out;
        border-radius: 2px;
    }

    .header-menu-item:hover:after {
        left: 0%;
        width: 100%;
    }

    .header-menu-item:hover {
        color: var(--text-hover-color);
    }
}

@media (max-width:759px) {
    .header-menu {
        display: none;
    }

    .header-menu-mobile {
        display: flex;
    }

    .header-menu-item:hover {
        color: #80c8f8;
    }

}

@keyframes fadeUpIn {
    0% {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0%;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 100%;
    }
}

.header-menu-item:hover .menus-submenu {
    display: block;
}

.menus-submenu {
    position: absolute;
    display: none;
    right: 0;
    width: max-content;
    margin-top: 8px;
    box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    animation: submenu 0.3s 0.1s ease both;
}

.menus-submenu ul,
li {
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
}

.menus-submenu:before {
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 20px;
    content: "";
}

.menus-submenu a {
    text-align: center;
    line-height: 2;
    color: #4c4948 !important;
    text-shadow: none;
    display: block;
    padding: 6px 14px;
}

.menus-submenu a:hover {
    background: #4ab1f4;
}

@keyframes submenu {
    0% {
        opacity: 0;
        filter: alpha(opacity=0);
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        filter: none;
        transform: translateY(0);
    }
}
</style>