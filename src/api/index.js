import requests from './requests.js';
import mockRequests from './mockAjax.js';

// 请求三级联动的数据
// /api/product / getBaseCategoryList
// get
export const reqThreeLevelLinkage = () => requests({
  url:'product/getBaseCategoryList',
  method:'get'
});

// mock轮播图数据
export const reqBannerList = () => mockRequests.get('/banner');


// 搜索商品
// /api/list  post
/*
参数例子
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}

*/
export const reqSearchList = (data) => requests({
  url:'/list',
  method:'post',
  data,
});

// 获取商品详情
// /api/item/{ skuId } get
export const reqDetailList = (skuId) => requests({
  url:`/item/${skuId}`,
  method:'get'
});

//  添加到购物车(或者对已有物品进行数量改动)
// /api/cart/addToCart/{ skuId }/{ skuNum }
// POST  (在请求头中需要加入UUID的标识;请求头的名称叫userTempId)
export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({
  url:`cart/addToCart/${skuId}/${skuNum}`,
  method:'post',
});

// 获取购物车列表
// /api/cart/cartList
export const reqCartList = () => requests({
  url:'cart/cartList',
  method:'get'
});

// 删除商品
// /api/cart/deleteCart/{skuId}
// delete
export const reqDeleteCartById = (skuId) => requests({
  url:`cart/deleteCart/${skuId}`,
  method:'delete'
});

// 修改商品选中状态
// /api/cart/checkCart/{skuID}/{isChecked}
// GET
export const reqUpdateChecked = (skuID,isChecked) => requests({
  url:`cart/checkCart/${skuID}/${isChecked}`,
  method:'get'
});
// 获取验证码
// /api/user/passport/sendCode/{phone}
// get
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'get'
});

// 用户注册
// /api/user/passport/register
// post
// phone,password,code

export const reqUserRegister = (data) => requests({
  url:'/user/passport/register',
  data,
  method:'post'
});

// 用户登录
// /api/user/passport/login
// POST
export const reqUserLogin = (data) => requests({
  url:'/user/passport/login',
  data,
  method:'post'
});

// 登录成功，跳转到home,token检验，获取用户信息
// /user/passport / auth / getUserInfo
// get
export const reqGetUserInfo = () => requests({
  url:'/user/passport/auth/getUserInfo',
  method:'get'
});

// 退出登录
// /api/user/passport/logout
// get
export const reqUserLoginout = () => requests({
  url:'/user/passport/logout',
  method:'get'
});


//  获取交易地址数据
// /user/userAddress/auth/findUserAddressList
// GET
export const reqUserAddressList = () => requests({
  url:'/user/userAddress/auth/findUserAddressList',
  method:'get',
});

// 获取交易商品信息
// /api/order/auth/trade
// get
export const reqGetOrderInfo = () => requests({
  url:'/order/auth/trade',
  method:'get',
});

//  提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// post
export const reqsubmitOrder = (tradeNo,data) => requests({
  url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
  data,
  method:'post'
});

// 获取订单支付信息
// /api/payment/weixin/createNative/{orderId}
export const reqOrderPay = (orderId) => requests({
  url:`/payment/weixin/createNative/${orderId}`,
  method:'get'
});

// 查询支付状态
// /api/payment/weixin/queryPayStatus/{orderId}
// get
export const reqPayStatus = (orderId) => requests({
  url: `/payment/weixin/queryPayStatus/${orderId}`,
  method:'get',
});

// 获取我的订单值列表
// /api/order/auth/{page}/{limit}
// get
export const reqMyOrderList = (page,limit) => requests({
  url:`/order/auth/${page}/${limit}`,
  method:'get'
});