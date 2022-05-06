import {reqDetailList,reqAddOrUpdateShopCart} from '@/api';
import { getUUID } from '@/utils/uuid_token';

const state = {
  // 商品详情信息
  detailInfo:{},
  // 游客临时身份
  uuid_token: getUUID(),
};
const mutations = {
  // 商品详情
  GETDETAILLIST(state,detailInfo){
    state.detailInfo =detailInfo;
  },
};
const actions = {
  // 获取商品详情
  async getDetailList({commit},skuId){
    let result = await reqDetailList(skuId);
    if(result.code==200){
      commit('GETDETAILLIST',result.data);
      return 'ok';
    }else{
      return Promise.reject(new Error('商品详情请求失败'));
    }
  },
  // 添加到购物车

  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    // 只是提交给后端,没有数据传回不用commit
    let result  = await reqAddOrUpdateShopCart(skuId,skuNum);
    // console.log(result);
  }
};
const getters = {
  // 商品价格等属性
  skuInfo(state){
    return state.detailInfo.skuInfo || {};
  },

  // 导航属性
  categoryView(state){
    return state.detailInfo.categoryView || {};
  },
  // 商品规格属性
  spuSaleAttrList(state){
    return state.detailInfo.spuSaleAttrList || [];
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};