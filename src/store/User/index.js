import {reqGetCode,reqUserRegister,reqUserLogin,reqGetUserInfo,reqUserLoginout} from '@/api';
import {setToken,removeToken,getToken} from '@/utils/token';

const state = {
  code:'',
  token:getToken(),
  userInfo:{},
};
const mutations = {
  // 存储验证码
  GETCODE(state,code){
    state.code = code;
  },

  // token
  USERLOGIN(state,token){
    state.token = token;
  },

  // 获取用户信息
  USERINFO(state,userInfo){
    state.userInfo = userInfo;
  },

  // 退出登录，清除相关信息
  UERLOGINOUT(state){
    state.token = '';
    state.userInfo = '';
    // 清除本地存储
    removeToken();

  }
};
const actions = {
  // 获取验证码
  async getCode({commit},phone){
    let result = await reqGetCode(phone);
    if(result.code==200){
      commit('GETCODE',result.data);
      return 'ok';
    }else{
      return Promise.reject(new Error('请求失败'));
    };
  },

  // 用户注册
  async userRegister({commit},data){
    let result = await reqUserRegister(data);
    if(result.code == 200){
      return 'ok';
    }else if(result.code == 223){
      return Promise.reject(new Error('用户已被注册'));
    }
  },

  // 用户登录获取token
  async userLogin({commit},data){
    let result = await reqUserLogin(data);
    if(result.code==200){
      // 存储到仓库
      commit('USERLOGIN',result.data.token);
      // 存储到本地
      setToken(result.data.token)
      return 'ok';
    }else{
      return Promise.reject(new Error('登录失败'));
    }
  },

  // 用户信息
  async userInfo({commit}){
    let result = await reqGetUserInfo();
    if(result.code == 200){
      commit('USERINFO',result.data)
      return 'ok';
    }else{
      return Promise.reject(new Error('请求失败'))
    }
  },

  // 退出登录
  async userLoginout({commit}){
    let result = await reqUserLoginout();
    if(result.code==200){
      // 成功，清除token，以及用户信息
      commit('UERLOGINOUT');
      return 'ok';
    }else{
      return Promise.reject(new Error('退出失败'));
    }
  }
};
const getters = {};


export default {
  state,
  mutations,
  actions,
  getters
};