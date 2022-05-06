import { reqThreeLevelLinkage, reqBannerList } from "@/api";


const state = {
  // 三级联动数据
  threeLevel:[],

  // 轮播图数据
  bannerList:[],
};
const mutations = {
  // 保存三级联动数据
  GETTHREELEVELLINKAGE(state, threeLevel){
    state.threeLevel = threeLevel;
  },

  // 轮播图数据
  GETBANNERLIST(state,bannerList){
    state.bannerList = bannerList;
  }

};
const actions = {
  // 获取三级联动数据
  async getThreeLevelLinkage({commit}){
    // 等待三级联动数据
    let result = await reqThreeLevelLinkage();
    // console.log(result);
    if(result.code==200){
      // 提交给mutations处理数据
      commit('GETTHREELEVELLINKAGE',result.data);
    }
  },

  // 获取轮播图数据
  async getBannerList({commit}){
    let result = await reqBannerList();
    // console.log(result);
    if(result.code==200){
      commit('GETBANNERLIST',result.data)
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