// const baseUrl = "http://152.136.170.232:8080";
const baseUrl = "http://127.0.0.1:88"

// 请求加载动画
import axios from "axios";

const request = axios.create({
    baseURL: baseUrl,
    timeout: 1000 * 3,
})

export default request;