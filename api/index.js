import axios from "axios";
import serverConfig  from "./config.js";
//创建axios实例
const $http = axios.create({
  baseURL: serverConfig.baseURL,
  timeOut: 10000,
});
//请求拦截
$http.interceptors.request.use(
  (config) => {

    // console.log("请求配置", config);
    //业务逻辑
    //设置token
    if (serverConfig.useTokenAuthorization) {
      config.headers["Authorization"] = localStorage.getItem("token");
    }
    // config.headers["content-type"] = "application/json";
    // // //设置请求头
    // if (!config.headers["content-type"]) {
    //   if (config.method === "post") {
    //     config.headers["content-type"] = "application/x-www-form/urlencoded"; //post请求
    //     // config.data=JSON.stringify(config.data);//表序列化,表单数据发送服务器需要序列化
    //     config.data = qs.stringify(config.data); //表序列化,表单数据发送服务器需要序列化
    //   } else {
    //     config.headers["content-type"] = "application/json";
    //   }
    // }
    return config
  },
  (error) => {
    Promise.reject(error);
  }
);
//响应拦截
$http.interceptors.response.use(
  (res) => {
    //业务逻辑部分 ,比如判断token值是否过期
    let data = res.data;
    return data;
  },
  (error) => {
    let message = "";
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          message = "接口重定向了！";
          break;
        case 400:
          message = "参数不正确！";
          break;
        case 401:
          message = "您未登录，或者登录已经超时，请先登录！";
          break;
        case 403:
          message = "您没有权限操作！";
          break;
        case 404:
          message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          message = "请求超时！";
          break;
        case 409:
          message = "系统已存在相同数据！";
          break;
        case 500:
          message = "服务器内部错误！";
          break;
        case 501:
          message = "服务未实现！";
          break;
        case 502:
          message = "网关错误！";
          break;
        case 503:
          message = "服务不可用！";
          break;
        case 504:
          message = "服务暂时无法访问，请稍后再试！";
          break;
        case 505:
          message = "HTTP 版本不受支持！";
          break;
        default:
          message = "异常问题，请联系管理员！";
          break;
      }
    }
    return Promise.reject(message);
  }
);

export default $http;
