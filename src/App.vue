<template>
  <div id="app">
    <Header />
    <!-- 路由入口 -->
    <router-view></router-view>
    <Footer v-if="$route.meta.show"/>
  </div>
</template>

<script>
// 引入组件
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    // 派发actions，获取全局组件三级联动数据，
    this.$store.dispatch('getThreeLevelLinkage');
  }
}
</script>

<style >
</style>
