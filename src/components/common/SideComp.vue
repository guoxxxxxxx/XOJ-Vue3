<template>
    <div class="container">
        <div class="everyday-problem">
            <span>🎉每日一题</span>
        </div>
    </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang="less">
.container {

    .everyday-problem {
        display: flex;

    }

    .everyday-problem span {
        font-family: "FangSong";
        font-size: larger;
        font-weight: bolder;
    }

    .everyday-problem:hover {
        background-color: lightgray;
        cursor: url(https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/Hexo/img/pointer.cur),
            default;
    }

    .everyday-problem:active {
        background-color: gray
    }

}
</style>