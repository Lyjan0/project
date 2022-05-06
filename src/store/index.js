import Vue from 'vue';
import Vuex,{ Store } from 'vuex';

import home from './home';
import search from './search';
import detail from './detail';
import shopCart from './shopCart';
import user from './User';
import trade from './trade';
Vue.use(Vuex);

export default new Store({
  modules:{
    home,
    search,
    detail,
    shopCart,
    trade,
    user
  }
})