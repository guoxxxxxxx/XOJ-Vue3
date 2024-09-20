<template>
    <div class="top-bar">
        <TopBarComp></TopBarComp>
    </div>
    <div class="home">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang='ts' setup>
import TopBarComp from "@/components/common/TopBarComp.vue";

</script>

<style scoped lang='less'>
.top-bar {
    height: 60px;
}

.home {
    // height: 1300px;
    width: 100%;
    // overflow-x: hidden;
    background-color: var(--theme-background);

    .container {
        margin: 20px 10% auto 10%;
    }
}
</style>