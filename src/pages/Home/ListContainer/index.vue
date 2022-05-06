<template>
  <div class="list-container">
    <div class="container">
      <!-- 轮播图区域 -->
      <div class="center">
        <Carsouel :bannerList="bannerList" />
      </div>
      <!--右边区域 -->
      <div class="right">
        <!-- 播报 -->
        <div class="new">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr">更多></span>
          </h4>
          <!-- <div class=".space"></div> -->
          <ul class="news-list">
            <li>[特惠]备战开学季 全民半价购数码</li>
            <li>[公告]备战开学季 全民半价购数码</li>
            <li>[特惠]备战开学季 全民半价购数码</li>
            <li>[公告]备战开学季 全民半价购数码</li>
            <li>[特惠]备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <!--  lifeservices-->
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i><span class="service-intro">白条</span>
          </li>
        </ul>
        <!-- 活动 -->
        <div class="activity">
          <img src="./images/ad1.png" alt="活动海报" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*************************************************************/
/*************************************************************/
import {mapState} from 'vuex';
export default {
  name: "ListContainer",
  mounted(){
    // 挂载完毕派发actions.获取轮播图数据
    this.$store.dispatch('getBannerList');
    // console.log(this.bannerList)
  },

  computed:{
    // 计算轮播图数据
    ...mapState({bannerList: state => state.home.bannerList || []}),
  }
};
/*************************************************************/
/*************************************************************/
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  // background-color: red;
  margin: 8px auto;
  .container {
    height: 450px;
    margin-left: 210px;
    // background-color: skyblue;

    //中间轮播图区域
    .center {
      box-sizing: border-box;
      width: 720px;
      height: 450px;
      // padding: 5px;
      float: left;
      // background-color: red;

    }

    //右边区域
    .right {
      margin-left:20px;
      float: left;
      width: 250px;
      // background-color: slateblue;
      .new {
        border: solid 1px #e4e4e4;
        h4 {
          overflow: hidden;
          width: 220px;
          margin: 0 auto;
          padding: 10px 10px;
          border-bottom: solid 1px #e4e4e4;
          span {
            float: right;
          }
        }

        .news-list {
          margin: 2px 10px;
          li {
            padding: 5px 10px;
          }
        }
      }
      .lifeservices {
        border-left: solid 1px #e4e4e4;
        border-right: solid 1px #e4e4e4;
        display: flex;
        flex-wrap: wrap;
        .life-item {
          border-left: solid 1px #e4e4e4;
          border-bottom: solid 1px #e4e4e4;
          height: 64px;
          width: 25%;
          margin-left:-1px;
          text-align: center;
          .list-item {
            background-image: url(./images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }
          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }
          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }
          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }
          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .activity{
        margin-top: 14px;
        img{
          opacity: 0.8;
          transition: all 400ms;
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>