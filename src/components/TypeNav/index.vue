<template>
  <div class="type-nav">
    <div class="type-cantainer clearfix">
      <div class="navList">
        <div @mouseleave="leaveIndex" @mouseenter="enterShow">
          <h2 class="all">全部商品分类</h2>
          <transition name="sort">
            <div class="all-nav" v-show="show">
              <!-- 事件委派:goSearch,使一级,二级,三级分类的点击都能跳转到search路由 -->
              <div class="all-nav-list" @click="goSearch">
                <template  v-for="(threeLevel,index) in threeLevelLise">
                  <!-- 一级分类 -->
                  <div
                    class="item"
                    v-if="index < 15"
                    :key="threeLevel.categoryId"
                    @mouseenter="changeIndex(index)"
                    :class="{cur: currentIndex==index}"
                  >
                    <h3>
                      <!-- 点击跳转的时候,给a标签带上分类名和id -->
                      <a
                        :data-categoryName="threeLevel.categoryName"
                        :data-category1Id="threeLevel.categoryId"
                      >
                        {{threeLevel.categoryName}}
                      </a>
                    </h3>
                    <!-- 二级分类 -->

                    <div class="all-nav-list2" :style="{display:currentIndex==index?'block':'none'}">
                      <div
                        class="subitem"
                        v-for="c2 in threeLevel.categoryChild"
                        :key="c2.categoryId"
                      >
                        <dl>
                          <dt>
                            <a
                              :data-categoryName="c2.categoryName"
                              :data-category2Id="c2.categoryId"
                            >
                              {{c2.categoryName}}
                            </a>
                          </dt>
                          <dd v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                            <span></span>
                            <!-- 三级分类 -->
                            <a
                              :data-categoryName="c3.categoryName"
                              :data-category3Id="c3.categoryId"
                            >
                              {{c3.categoryName}}
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </template>

              </div>
            </div>
          </transition>
        </div>

        <ul class="navItem">
          <li><a href="">服装城</a></li>
          <li><a href="">美妆馆</a></li>
          <li><a href="">尚品汇超市</a></li>
          <li><a href="">全球购</a></li>
          <li><a href="">闪购</a></li>
          <li><a href="">团购</a></li>
          <li><a href="">有趣</a></li>
          <li><a href="">秒杀</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
/**********************************************************************************************/
/**********************************************************************************************/
import {mapState} from 'vuex';
export default {
  name:'TypeNav',
  data(){
    return {
      // 保存当前鼠标移入的是哪一个一级分类
      currentIndex: -1,
      // // 决定分类导航是否展示
      show: true,
    }
  },
  beforeMount(){
    // 在挂载前先判断,
    // if(this.$route.path.indexOf('/home')  != -1){
    //   this.show = false;
    // }
  },
  mounted(){
    // 挂载完毕的时候，派发actions，获取数据
    // 是全局组件，且要多次发请求，把派发放在app组件中，只派发一次
    // this.$store.dispatch('getThreeLevelLinkage');
    // 挂载时,判断是否为search路由
    if(this.$route.path.indexOf('/home') == -1){
      this.show = false;
    }
  },
  computed:{
    // 计算三级联动数据
    ...mapState({threeLevelLise:(state)=> state.home.threeLevel || []})
  },
  methods:{
    // 鼠标移入全部分类,展示一级分类
    enterShow(){
      if(this.$route.path.indexOf('/home') == -1){
        this.show = true;
      }
    },
    // 鼠标移入,展示二级导航
    changeIndex(index){
      this.currentIndex = index;
    },
    // 鼠标移出不展示二级导航
    leaveIndex(){
      if(this.$route.path.indexOf('/home') == -1){
        this.show = false;
      }

      this.currentIndex = -1;
    },

    // 跳转到search路由,
    goSearch(event){
      // html5中使用data-前缀设置我们需要的自定义属性,来进行一些数据的存放
      // 获取数据如:data-expense:element.dataset.expense
      // 命名方式:驼峰法:data-categoryName,使用时categoryname,
      // -:data-category-name,使用时categoryName
      let element = event.target;
      let {categoryname,category1id,category2id,category3id} = element.dataset;
      // 进行判断,是否点击了a标签,点击后收集参数
      if(categoryname){
        // 存在就是a标签
        // 跳转的路由
        let location = {name:'search'};
        // 收集query参数
        let query = {
          categoryName:categoryname
        }
        // 判断是哪一级分类
        if(category1id){
          // 一级
          query.category1Id = category1id;
        }else if(category2id){
          // 二级
          query.category2Id = category2id;
        }else if(category3id){
          query.category3id = category3id;
        }

        // 收集完合并路径和参数
        location.query = query;
        // 进行跳转
        // 跳转前应该还要考虑一个从输入框输入的params参数
        if(this.$route.params){
          // params存在,添加到参数中
          location.params = this.$route.params;

        }
        this.$router.push(location);
      }
    }


  }

}
/**********************************************************************************************/
/**********************************************************************************************/
</script>

<style lang="less" scoped>
.type-nav {
  .type-cantainer{
    border-bottom:solid 2px #e1251b;
    .navList{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;
      // 全部分类
      .all{
        width: 210px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #e1251b;
        color: #fff;
        font-size: 14px;
      }
      // 横向导航
      .navItem {
        li{
          float: left;
          line-height: 45px;
          font-size: 14px;
          margin: 0 25px;
          font-size: 14px;
          a{
            font-size: 15px;
            color:#333;
          }
        }
      }
      // 全部分类一级导航
      .all-nav{
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        background-color: #fafafa;

        z-index: 999;
        // pointer-events: none;
        height: 465px;


        .all-nav-list{
          overflow: auto;

          .item{
            h3{
              line-height: 30px;
              padding: 0 20px;
              a{
                text-decoration: none;
                font-size: 15px;
                color: #333;
              }
            }

            // 二级导航
            .all-nav-list2{
              position:absolute;
              top: 0;
              left: 210px;
              z-index: 1000 !important;
              width: 734px;
              min-height: 463px;
              background-color: #f7f7f7;
              border: solid 1px #ddd;
              display: none;
              .subitem{
                width: 650px;
                // height: 100px;
                overflow: hidden;
                padding: 5px 25px;
                // background-color: skyblue;
                line-height: 22px;
                dl{

                  zoom: 1;
                  dt{
                    width:50px;
                    float: left;
                  }
                  dd{
                    float: left;
                    span{
                      width: 1px;
                      height: 10px;
                      border: solid 1px #ccc;
                      margin: 0 10px;
                    }
                  }
                }

              }
            }
          }
        }
      }
      // 过渡动画开启
      .sort-enter{
        height: 0;
      }
      // 过渡动画结束
      .sort-enter-to{
        height: 465px;
      }
      // 过度中间
      .sort-enter-active{
        transition: all 0.35s linear;
        overflow: hidden;
      }

    }
  }
}
.cur{
  background-color: skyblue;
}
</style>