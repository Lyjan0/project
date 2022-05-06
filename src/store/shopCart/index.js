import {reqCartList,reqUpdateChecked,reqDeleteCartById} from '@/api';


const state = {
  cartList:[],
};
const mutations = {
  GETCARTLIST(state,cartList){
    state.cartList = cartList;
  }
};
const actions = {
  // 获取商品列表
  async getCartList({commit}){
    let result = await reqCartList();
    if(result.code == 200){
      commit('GETCARTLIST',result.data);
    }
  },
  //m 删除商品
  async deleteCartById({commit},skuId){
    let result = await reqDeleteCartById(skuId);
    // console.log(result);
  },
  // 修改选中状态
  async updateChecked({commit},{skuId,isChecked}){
    let result = await reqUpdateChecked(skuId,isChecked);
    if(result.code == 200){
      return 'ok';
    }else{
      return Promise.reject(new Error('请求失败'));
    };
  },
  // 修改全选状态
  updateAllChecked({dispatch,getters},isChecked){
    // 如果isChecked'1',发请求全部改为1，
    //  getters.cartInfoList.forEach((item)=>{
    //    dispatch('updateChecked',{skuId:item.skuId,isChecked})
    // });
    // 需要知道全部修改之后返回的promise，组件中才能判断，Promise中有一个all方法，
    let promiseAll = [];
    getters.cartInfoList.forEach((item)=>{
      // 接收updateChecked返回的promise
      let promise = dispatch('updateChecked',{skuId:item.skuId,isChecked});
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },

  // 删除勾选的商品
  deleteAllCartByChecked({dispatch,getters}){
    let promiseAll = [];
    getters.cartInfoList.forEach((item)=>{
      if(item.isChecked == '1'){
        let promise = dispatch('deleteCartById',item.skuId)
        promiseAll.push(promise);
      }
    });
    return Promise.all(promiseAll);
  }

};
const getters = {
  cartList(state){
    return state.cartList[0] || {};
  },
  // 商品参数
  cartInfoList(state){
    if(!state.cartList[0]){
      return []
    }else{
      return state.cartList[0].cartInfoList || [];
    }
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};