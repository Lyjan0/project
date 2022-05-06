import VueRouter from 'vue-router';
import Vue from 'vue';
import routers from './routers';
import store from '@/store';

Vue.use(VueRouter);

// 重写push 和 replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve && reject){
    // 这里的originPush并非VueRouter管理的,所以要改变一下this指向
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
};

VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve && reject){
    // 这里的originPush并非VueRouter管理的,所以要改变一下this指向
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

let router = new VueRouter({
  routes:routers
});

// 路由守卫
router.beforeEach(async (to,from,next)=>{
  // 判断用户登录后可放行的路由

  let token = store.state.user.token;
  // 用于登录后，判断是否有用户信息
  // userInfo是一个对象，空对象判断时也为 true，所以取对象 里的值
  let name = store.state.user.userInfo.name;
  if(token){
    // 登录了，可放行去一些其他路由，如search，home
    // 但不能再去注册和登录了
    // next('/home'|| '/search')
    // 判断是否去的的注册和登录
    if(to.path=='/login'||to.path=='/register'){
      // 是去登录和注册，让其跳转加首页
      next('/');  // next('/home')
    }else{
      // 不是去注册和登录
      // 判断是否有用户信息
      if(name){
        // 有放行
        next();
      }else{
        // 登录了，就是有token了，但没有校验token获取用户信息
        // 本来在home中的派发actions放到 这里，去获取，
        try {
          // 等待结果返回
          await store.dispatch('userInfo');
          // 成功 放行
          next();
        } catch (error) {
          // token失效了，清除token，去登录重新获取token
          try {
            await store.dispatch('userLoginout');
            // 成功跳转到登录，重新登录
            next('/login');
          } catch (error) {
            alert(error.message);
          }
        }

      }
    }
  }else{
    // 未登录，交易相关的trade、支付相关的pay、paysuccess，用户中心不能去
    if(to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1){
      // 让用户去登录,
      // 如果想让用户登录完，跳转到一开始想要去的页面，可以带上query参数
      next('/login?redirect=' + to.path);
    }else{
      // 不是上面的页面，可以放行
      next();
    }

  }
})

export default router;
