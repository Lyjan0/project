import Vue from 'vue'
import App from './App.vue'

// 三级联动组件，注册为全局组件
import TypeNav from './components/TypeNav';

// 轮播图
import Carsouel from '@/components/Carsouel';

//分页器
import Pager from '@/components/Pager';
// 引入路由器
import router from './router'

// 引入仓库
import store from '@/store';

// 引入mockServe.js
import '@/mock/mockServe';

// 引入swiper样式
import '../node_modules/swiper/css/swiper.css';

// 引入表单验证
import '@/plugins/validate.js'

// 引入api
import * as API from '@/api';

// 按需引入element-ui
import {MessageBox} from 'element-ui';

// 挂载到原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component()
// 注册全局组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsouel.name,Carsouel);
Vue.component(Pager.name,Pager);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeMount(){
    Vue.prototype.$bus = this;
    // 挂载到vue上
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount('#app')
