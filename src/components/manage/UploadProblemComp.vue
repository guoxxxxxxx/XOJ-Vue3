<template>
    <div class="container">
        <div class="form-container">
            <div class="block">
                <span class="font-span">题目标题:</span>
                <el-input v-model="question_title" style="width: 100%" maxlength="100" placeholder="请输入标题"
                    show-word-limit type="text" size="large" />
            </div>
            <div class="block flex-container">
                <div class="flex">
                    <span class="font-span">
                        最大时间:
                    </span>
                    <el-input v-model="time_limit" type="number" style="width: 45%" size="media" />
                    <span class="font-span">
                        ms
                    </span>
                </div>
                <div class="flex">
                    <span class="font-span">
                        最大内存:
                    </span>
                    <el-input v-model="mem_limit" type="number" style="width: 45%" size="media" />
                    <span class="font-span">
                        KB
                    </span>
                </div>
                <div class="flex">
                    <span class="font-span" style="width: 30%;">
                        难度:
                    </span>
                    <el-select v-model="level" placeholder="Select" style="width: 50%">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
            </div>
            <div class="flex block">
                <span class="font-span">
                    允许使用的编程语言：
                </span>
                <el-checkbox-group v-model="languageList">
                    <el-checkbox label="C++" value="C++" />
                    <el-checkbox label="Java" value="Java" disabled />
                    <el-checkbox label="Python" value="Python" disabled />
                    <el-checkbox label="SQL" value="SQL" disabled />
                </el-checkbox-group>
            </div>
            <span class="font-span">标签</span>
            <el-button @click="open" type="primary" size="small" style="margin-left: 20px;">添加新标签</el-button>
            <div class="tag-box">
                <el-checkbox-group v-model="tagSelectedList">
                    <el-checkbox v-for="tag in tagList" :label="tag.tagName" :value="tag.id">
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="md-title">
            <span class="font-span">请输入题目信息(支持MarkDown语法)</span>
            <div class="problem-container">
                <div class="input-container">
                    <div class="block">
                        <span class="font-span">
                            描述信息：
                        </span>
                        <el-input v-model="description" style="width: 100%;" show-word-limit type="textarea" autosize
                            size="large" />
                    </div>
                    <div class="block">
                        <span class="font-span">
                            输入描述：
                        </span>
                        <el-input v-model="input_description" style="width: 100%;" show-word-limit type="textarea"
                            autosize size="large" />
                    </div>
                    <div class="block">
                        <span class="font-span">
                            输出描述：
                        </span>
                        <el-input v-model="output_description" style="width: 100%;" show-word-limit type="textarea"
                            autosize size="large" />
                    </div>
                    <div class="block">
                        <span class="font-span">
                            输入用例：
                        </span>
                        <el-input v-model="input_example" style="width: 100%;" show-word-limit type="textarea" autosize
                            size="large" />
                    </div>
                    <div class="block">
                        <span class="font-span">
                            输出用例：
                        </span>
                        <el-input v-model="output_example" style="width: 100%;" show-word-limit type="textarea" autosize
                            size="large" />
                    </div>
                    <el-collapse accordion>
                        <el-collapse-item title="验证用例(json格式输入)">
                            <MdEditor style="height: 100px;" :showCodeRowNumber="true" :toolbars="[]" :footers="[]"
                                editor-id="val" :preview="false" lang="json" v-model="val" />
                        </el-collapse-item>
                        <el-collapse-item title="测试用例(json格式输入)">
                            <MdEditor style="height: 100px;" :showCodeRowNumber="true" :toolbars="[]" :footers="[]"
                                editor-id="val" :preview="false" lang="json" v-model="test" />
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="preview-container">
                    <div style="width: 100%; text-align: center;">
                        <span style="font-size: 20px; font-family: '楷体'; font-weight: bold;">
                            预览界面
                        </span>
                    </div>
                    <div class="main">
                        <MdPreview :modelValue="preview_text_computed" :editorId="prob_pre" />
                    </div>
                </div>
            </div>
        </div>
        <div class="code-block" style="padding-top: 20px;">
            <div class="demo-collapse">
                <el-collapse>
                    <el-collapse-item title="C++" name="1" v-if="languageList.includes('C++')">
                        <div class="c-plus">
                            <div class="code-block-title">
                                <span class="font-span">
                                    C++代码依赖
                                </span>
                            </div>
                            <MdEditor style=" height:200px; " v-model="c_plus_prefix_text" editorId="c-plus-pref"
                                :showCodeRowNumber="true" :toolbars="[]" />
                            <div class="code-block-title">
                                <span class="font-span">
                                    C++代码用户编辑区
                                </span>
                            </div>
                            <MdEditor style="height:200px;" v-model="c_plus_mid_text" editorId="c-plus-mid"
                                :showCodeRowNumber="true" :toolbars="[]" />
                            <div class="code-block-title">
                                <span class="font-span">
                                    C++代码程序入口
                                </span>
                            </div>
                            <MdEditor style=" height:200px; " v-model="c_plus_rear_text" editorId="c-plus-rear"
                                :showCodeRowNumber="true" :toolbars="[]" />
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Java" name="2" v-if="languageList.includes('Java')">
                    </el-collapse-item>
                    <el-collapse-item title="Python" name="3" v-if="languageList.includes('Python')">
                    </el-collapse-item>
                    <el-collapse-item title="SQL" name="4" v-if="languageList.includes('SQL')">

                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="java">
            </div>
            <div class="python">

            </div>
        </div>
        <div class="submit-btn">
            <el-button type="primary" size="large" @click="submit">提交</el-button>
        </div>
        <el-button type="primary" size="large" @click="showTagList">测试按钮</el-button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { MdPreview, MdEditor } from 'md-editor-v3';
import { c_plus_template_pref, c_plus_template_mid, c_plus_template_rear } from "@/api/template";
import 'md-editor-v3/lib/style.css';
import request from '@/api/requests';
import type { QuestionEntity, TagEntity, QuestionTemplateEntity } from "@/api/entity"
import { ElMessage, ElMessageBox } from 'element-plus';

const question_title = ref("");
const time_limit = ref(2000);
const mem_limit = ref(512000);
const level = ref(1);
const languageList = ref<string[]>([]);
const description = ref("");
const input_description = ref("");
const output_description = ref("");
const input_example = ref("");
const output_example = ref("");
const val = ref("");
const test = ref("");

const preview_text_computed = computed(() => {
    return (
        "> 时间限制: " + time_limit.value + "ms" + "\n" +
        "> 内存限制: " + mem_limit.value + "KB" + "\n" +
        "> 难度: " + (level.value == 1 ? "简单" : level.value == 2 ? "中等" : "困难") + "\n" +
        "# " + question_title.value + "\n" +
        "## 题目描述" + "\n" +
        description.value + "\n" +
        "## 输入描述" + "\n" +
        input_description.value + "\n" +
        "## 输出描述" + "\n" +
        output_description.value + "\n" +
        "## 输入用例" + "\n"
        + "```\n" +
        input_example.value
        + "\n```" + "\n" +
        "## 输出用例" + "\n"
        + "```\n" +
        output_example.value
        + "\n```"
    );
})

const c_plus_prefix_text = ref("``` c++" + c_plus_template_pref + "\n```");
const c_plus_mid_text = ref("``` c++" + c_plus_template_mid + "\n```");
const c_plus_rear_text = ref("``` c++" + c_plus_template_rear + "\n```");

const prob_pre = "problem_preview";
const options = [
    {
        value: 1,
        label: '简单',
    },
    {
        value: 2,
        label: '中等',
    },
    {
        value: 3,
        label: '困难',
    },
]

let tagList = ref<TagEntity[]>([]);
const tagSelectedList = ref<number[]>([]);

const showTagList = () => {
    alert(tagSelectedList.value);
}

// 获取全部标签列表
const getTagList = () => {
    request.get("/question/tag/getTagList").then(resp => {
        if (resp.data.status == 200) {
            tagList.value = resp.data.data;
            console.log(tagList);
        }
    })
}

// 添加新的标签
const open = () => {
    ElMessageBox.prompt('请输入新的标签', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^(.+)$/,
        inputErrorMessage: '不能为空'
    })
        .then(({ value }) => {
            request.get("/question/tag/addNewTag?tagName=" + value).then(resp => {
                if (resp.data.status == 200) {
                    ElMessage.success("添加标签成功")
                    getTagList();   // 刷新界面
                }
            })
        })
}

// 提交按钮
const submit = () => {
    // c++模板
    let c_plus_template_entity: QuestionTemplateEntity = {
        id: null,
        qid: null,
        languageType: 0,
        timeLimit: time_limit.value,
        memLimit: mem_limit.value,
        templatePref: c_plus_prefix_text.value.substring(7, c_plus_prefix_text.value.length - 4),
        templateMid: c_plus_mid_text.value.substring(7, c_plus_mid_text.value.length - 4),
        templateRear: c_plus_rear_text.value.substring(7, c_plus_rear_text.value.length - 4),
    };

    // 用-1判断是否选中该语言，若为-1则未选用
    if(!languageList.value.includes("C++")){
        c_plus_template_entity.languageType = -1;
    }

    // 向后端传送的实体信息
    const question: QuestionEntity = {
        id: null,
        title: question_title.value,
        description: description.value,
        languageTypeList: languageList.value.join(", "),
        level: level.value,
        inputExample: input_example.value,
        outputExample: output_example.value,
        tips: null,
        advance: null,
        testCase: test.value,
        valCase: val.value,
        tagList: tagSelectedList.value,
        templateList: [c_plus_template_entity]
    }
    console.log(question);

    request.post("/question/insertOne", question).then(resp => {
        if (resp.status == 200) {
            ElMessage.success("保存成功");
        }
    }).catch(resp => {
        ElMessage.error("保存失败");
    })
}

// 钩子函数，进入该界面时，向后端请求数据
onMounted(() => {
    getTagList();   // 获取全部的Tag列表
});
</script>

<style scoped lang='less'>
.md-title {
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
}

.font-span {
    font-size: 18px;
    font-family: "楷体";
}

.block {
    padding-bottom: 5px;
    padding-top: 5px;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .flex {
        width: 200px;
        display: flex;
        align-items: center;
        padding-bottom: 3px;
        padding-top: 3px;
    }
}

.problem-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    padding-top: 5px;

    .preview-container {
        min-width: 260px;
        width: 49%;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .input-container {
        min-width: 260px;
        width: 49%;
        padding-bottom: 5px;
        padding-top: 5px;
        overflow: auto;
    }

    .main {
        border: 1.5px solid skyblue;
        border-radius: 10px;
        padding: 5px;
        height: 500px;
        overflow: auto;
    }
}

.code-block-title {
    padding-top: 30px;
}

.submit-btn {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
}
</style>