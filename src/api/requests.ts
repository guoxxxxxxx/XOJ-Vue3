const baseUrl = "http://127.0.0.1:88/api"

// 请求加载动画
import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
    baseURL: baseUrl,
    timeout: 1000 * 10,
});

// 响应拦截器
request.interceptors.response.use(
    function (response) {
        const status = response.data.status;
        if (response.data && status >= 400) {
            ElMessage.error(response.data.status + " : " + response.data.msg);
        }
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 400) {
            ElMessage.error("服务不可用");
        }
        return Promise.reject(error);
    }
);

export default request;