import {reqSearchList} from '@/api';


const state = {
  // 搜索商品信息
  searchInfo: {},
};
const mutations = {
  // 处理搜索商品信息
  GETSEARCHLIST(state,searchInfo){
    state.searchInfo = searchInfo;
  }
};
const actions = {
  // 获取商品信息
  async getSearchList({commit},data){
    let result = await reqSearchList(data);
    if(result.code == 200){
      commit('GETSEARCHLIST',result.data);
      return 'ok';
    }else{
      return Promise.reject(new Error('请求失败'));
    }
  }
};
const getters = {
  // search子组件的数据
  // trademarkList 品牌
  trademarkList(state){
    return state.searchInfo.trademarkList || [];
  },
  // attrsList
  attrsList(state){
    return state.searchInfo.attrsList || [];
  },

  // search商品信息
  goodsList(state){
    return state.searchInfo.goodsList || [];
  }



};


export default {
  state,
  mutations,
  actions,
  getters
};