import {reqUserAddressList,reqGetOrderInfo} from '@/api';


const state = {
  // 地址信息
  userAddressList:[],

  // 商品信息
  orderInfo:{},
};
const mutations = {
  // 处理地址信息
  GETUSERADDRESSLIST(state,userAddressList){
    state.userAddressList = userAddressList;
  },
  // 处理商品信息
  GETORDERINFO(state,orderInfo){
    state.orderInfo = orderInfo;
  }
};
const actions = {
  // 获取地址信息
  async getUserAddressList({commit}){
    let result = await reqUserAddressList();
    if(result.code==200){
      commit('GETUSERADDRESSLIST',result.data);
      return 'ok';
    }else{
      return Promise.reject(new Error('获取地址信息失败'));
    }
  },
  // 获取交易商品信息
  async getOrderInfo({commit}){
    let result = await reqGetOrderInfo();
    if(result.code == 200){
      commit('GETORDERINFO',result.data);
      return 'ok';
    }else{
      return Promise.reject(new Error('获取商品信息失败'));
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