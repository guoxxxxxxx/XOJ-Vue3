<template>
    
    <div class="top-bar">
        <TopBarComp></TopBarComp>
    </div>
    <div class="home">
        <div class="container">
            <div class="main-container">
                <router-view></router-view>
            </div>
            <!-- <div class="sider-container">
                <SideComp></SideComp>
            </div> -->
        </div>
    </div>

</template>

<script lang='ts' setup>
import TopBarComp from "@/components/common/TopBarComp.vue";
import HomeMainContentComp from '@/components/home/HomeMainContentComp.vue';
import SideComp from '@/components/common/SideComp.vue';

</script>

<style scoped lang="less">
.top-bar {
    height: 60px;
}

.home {
    height: 1300px;
    width: 100%;
    overflow-x: hidden;
    background-color: var(--theme-background);

    .container {
        display: flex;
        margin: 20px 15% auto 15%;
        animation: fadeInUp 1s;

        .main-container {
            padding: 10px;
            justify-content: center;
            display: flex;
            
        }

        .sider-container {
            padding: 10px;
            width: 315px;
        }

        @media (min-width: 1000px) {
            .main-container {
                flex: 1;
            }

            // .sider-container {
            //     flex: 0.2;
            // }
        }

        @media (max-width: 999px) {
            .sider-container {
                display: none;
            }

            .main-container {
                flex: 1;
            }
        }
    }
}
</style>