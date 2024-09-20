<template>
    <div class="container-main">
        <div class="button-list">
            <el-button type="primary" plain round size="large">全部题目</el-button>
            <el-button type="primary" plain round size="large">算法</el-button>
            <el-button type="primary" plain round size="large">数据库</el-button>
        </div>
        <div class="table-list">
            <el-table :data="tableData" style="width: 100%;" class="table">
                <el-table-column label="状态">
                    <template #default="scope">
                        <el-tag type="success" effect="dark" v-if="scope.row.isPassed==1">
                            通过
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="ID" prop="id" width="80" />
                <el-table-column label="题目" prop="title" width="200" />
                <el-table-column label="通过率" width="100">
                    <template #default="scope">
                        <span>{{ scope.row.submitCount == 0 ? '0.00' : scope.row.passCount / scope.row.submitCount  }}%</span>
                    </template>
                </el-table-column>
                <el-table-column label="难度" prop="level" width="80">
                    <template #default="scope">
                        <el-tag type="success" v-if="scope.row.level == 1">
                            简单
                        </el-tag>
                        <el-tag type="warning" v-if="scope.row.level == 2">
                            中等
                        </el-tag>
                        <el-tag type="error" v-if="scope.row.level == 3">
                            困难
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="标签" prop="category" width="100">
                    <template #default="scope">
                        <el-tag v-for="tag in scope.row.tag">
                            {{ tag }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column align="right" width="200">
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" hide-on-single-page="true" />
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
const tableData = [
    {
        id: "1",
        title: "A+B",
        description: "计算A+B的值",
        difficulty: 1,
        tag: ["算法", "数据结构"],
        isPassed: 1,
        submitCount: 0,
        passCount: 0
    }
]
</script>

<style scoped lang='less'>
.container-main {
    .button-list {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
    }

    .table-list {
        width: 100%;
    }
}
</style>