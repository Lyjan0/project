// 引入axios,进行二次封装
import axios from 'axios';

// 通过axios对象的方法create，创建一个axios
const requests = axios.create({
  // 接口文档中，所有 的接口都是/api开头，可以配置基础路径
  baseURL:'/api',
  // 请求超时时间5s
  timeout: 5000,
});

// 添加请求拦截器
requests.interceptors.request.use((config)=>{
  // 请求前处理业务
  // 带上临时身份
  if(localStorage.getItem('UUIDTOKEN')){
    config.headers.userTempId = localStorage.getItem('UUIDTOKEN');
  };

  // 获取用户信息时带上token
  if(localStorage.getItem('TOKEN')){
    config.headers.token = localStorage.getItem('TOKEN');
  }

  return config;
});

// 添加响应拦截器
requests.interceptors.response.use((res)=>{
  // 成功的回调：服务器响应的数据回来以后，响应拦截器可以检测到，可以在这处理业务
  return res.data;
},(error)=>{
  // 响应失败的回调
  // 终止promise链，返回错误信息
  return Promise.reject(new Error('请求失败'))
});


// 对外暴露
export default requests;


