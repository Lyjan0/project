<template>
  <header class="header">
    <!-- 头部导航开始 -->
    <div class="top">
      <div class="container">
        <div class="top-left">
        <ul v-if="!userName">
          <li>尚品汇欢迎您！</li>
          <li>请<router-link to="/login">登录</router-link></li>
          <li><router-link to="/register" class="a-register">免费注册</router-link></li>
        </ul>
        <ul v-else>
          <li>尚品汇欢迎您！</li>
          <li><a>{{userName}}</a></li>
          <li><a @click="loginout" class="a-register">退出登录</a></li>
        </ul>
        </div>
        <div class="top-right">
          <ul>
            <li><router-link to="/center">我的订单</router-link></li>
            <li><a href="#" class="a-register">我的购物车</a></li>
            <li><a href="#" class="a-register">我的尚品汇</a></li>
            <li><a href="#" class="a-register">尚品汇会员</a></li>
            <li><a href="#" class="a-register">企业采购</a></li>
            <li><a href="#" class="a-register">关注尚品汇</a></li>
            <li><a href="#" class="a-register">合作招商</a></li>
            <li><a href="#" class="a-register">商家后台</a></li>
          </ul>
        </div>
      </div>
      <!-- 头部导航结束 -->
    </div>
    <!-- 头部第二行：图标与搜索 -->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="尚品汇">
          <img src="./images/logo.png" alt="logo">
        </router-link>
      </h1>
      <div class="searchArea">
        <form class="searchForm">
          <input type="text" id="autocomplete" v-model="keyword">
          <button @click="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
/****************************************************************/
/****************************************************************/
export default {
  name:'Header',
  data(){
    return {
      keyword:'',
    }
  },
  methods:{
    // 跳转到search页面
    goSearch(){
      // 同样在header页面中,需要合并所有的参数
      let location = {name:'search',params:{keyword:this.keyword || undefined}};
      if(this.$route.query){
        location.query = this.$route.query;
      }
      this.$router.push(location);
    },


    // 退出登录
    loginout(){
      try {
        this.$store.dispatch('userLoginout');
        // 退出成功，回到首页
        this.$router.push('/home');
      } catch (error) {
        alert(error.message);
      }
    }
  },
  computed:{
    // 用户信息展示
    userName(){
      return this.$store.state.user.userInfo.name;
    }
  }
}
/****************************************************************/
/****************************************************************/
</script>

<style lang="less" scoped>
@max-width: 1200px;
.ul-li(){
  ul > li{
    float: left;
    margin-right: 10px;
    .a-register{
      border-left: 1px solid #b3aeae;
      padding-left:10px;
    }
  }
}

.header{
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: @max-width;
      margin: 0 auto;
      overflow: hidden;
      .top-left {
        float: left;
        .ul-li();
      }
      .top-right {
        float: right;
        .ul-li();
      }
    }
  }

  & > .bottom {
    width: @max-width;
    margin: 0 auto;
    overflow: hidden;
    .logoArea {
      float: left;
      .logo {
        img{
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;
      .searchForm {
        overflow: hidden;
        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0 4px;
          border:solid 2px #ea4a36;
          // float:left;
          &:focus {
            //去除有焦点时的阴影
            outline: none;
          }

        }
        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          float: right;
          border: none;
          color: #fff;
          // 鼠标样式，pointer为小手
          cursor: pointer;
        }
      }
    }


  }
}
</style>