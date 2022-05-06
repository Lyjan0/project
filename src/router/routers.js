export default [
    {
      path:'/home',
      component:() => import('@/pages/Home'),
      // show决定Footer是否展示
      meta:{show:true}
    },
    {
      name:'search',
      path:'/search/:keyword?',
      component:() => import('@/pages/Search'),
      meta:{show:true}
    },
    {
      name:'detail',
      path:'/detail/:id?',
      component:() => import('@/pages/Detail'),
      meta:{show:true}
    },
    {
      name:'addcartsuccess',
      path:'/addcartsuccess',
      component:() => import('@/pages/AddCartSuccess'),
      meta:{show:true}
    },
    {
      name:'shopcart',
      path:'/shopcart',
      component:() => import('@/pages/ShopCart'),
      meta:{show:true}
    },
    {
      name:'register',
      path:'/register',
      component:() => import('@/pages/Register'),
      meta:{show:true}
    },
    {
      name:'login',
      path:'/login',
      component:() => import('@/pages/Login'),
      meta:{show:true}
    },
    {
      name:'trade',
      path:'/trade',
      component:() => import('@/pages/Trade'),
      meta:{show:true},
      // 独享守卫
      beforeEnter:(to,from,next)=>{
        // 去交易页面，必须从购物车进入
        if(from.path.indexOf('/shopcart') != -1){
          // 从购物车页面来的，放行
          next();
        }else{
          // 不是，留在当前页面
          next(false);
        }
      }
    },
    {
      name:'pay',
      path:'/pay',
      component:() => import('@/pages/Pay'),
      meta:{show:true},
      // 支付独享守卫
      beforeEnter:(to,from,next)=>{
        if(from.path.indexOf('/trade') != -1){
          // 从购物车进入，放行
          next();
        }else{
          // 不是，中断导航，留在当前页面
          next(false);
        }
      }
    },
    {
      name:'paysuccess',
      path:'/paysuccess',
      component:() => import('@/pages/PaySuccess'),
      meta:{show:true}
    },
    {
      name:'center',
      path:'/center',
      component:() => import('@/pages/Center'),
      meta:{show:true},
      children:[
        {
          name:'myorder',
          path:'myorder',
          component:() => import('@/pages/Center/MyOrder'),
        },
        {
          name:'grouporder',
          path:'/center/grouporder',
          component: () => import('@/pages/Center/GroupOrder'),
        },
        {
          path:'/center',
          redirect:'/center/myorder',
        }
      ]
    },
    // 重定向到首页
    {
      path:'/',
      redirect:"/home"
    }
  ]