<template>
  <div class='rank'>
    <div class="rank-container">
      <div class="rankList">
        <div class="rankList-item active">
          <div class="img-container"></div>
          <h4>热卖排行</h4>
        </div>
        <div class="rankList-item">
          <div class="img-container"></div>
          <h4>特价排行</h4>
        </div>
        <div class="rankList-item">
          <div class="img-container"></div>
          <h4>新品排行</h4>
        </div>
      </div>
      <div class="rank-products">
          <div class="products-item">
            <img src="./images/1.jpg" alt="" class="img">
            <p class="description">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</p>
            <span class="price">定金：<em>￥</em>100.00</span>
          </div>
          <div class="products-item">
            <img src="./images/1.jpg" alt="" class="img">
            <p class="description">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</p>
            <span class="price">定金：<em>￥</em>100.00</span>
          </div>
          <div class="products-item">
            <img src="./images/1.jpg" alt="" class="img">
            <p class="description">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</p>
            <span class="price">定金：<em>￥</em>100.00</span>
          </div>
          <div class="products-item">
            <img src="./images/1.jpg" alt="" class="img">
            <p class="description">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</p>
            <span class="price">定金：<em>￥</em>100.00</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Rank'
}
</script>

<style lang="less" scoped>
.rank{
  .rank-container{
    width: 1200px;
    height: 438px;
    margin:0 auto;
    .rankList{
      width: 312px;
      margin: 5px auto;
      display: flex;
      .rankList-item{
        width: 100px;
        flex:1;
        .img-container{
          background-image: url('./images/bg0.png');
          margin: 10px auto;
          width: 35px;
          height: 35px;
          background-repeat:no-repeat ;
        }
        h4{
          text-align: center;
          font-size: 16px;
        }
      }
      .active{
        .img-container{
          background-position: -35px 0;
        }

        color: red;
      }
      & .rankList-item:hover{
        color:blue;
      }
    }
    .rank-products{
      display: flex;
      justify-content: space-around;
      .products-item{
        margin: 5px;
        width: 270px;
        border: 1px red solid;
        .img{
          width:200px;
          height: 200px;
          display: block;
          margin: 5px auto;
        }
        .description{
          margin: 20px 10px 10px;
          line-height: 20px;
        }
        .price{
          display: inline-block;
          margin: 10px 10px;
          color: red;
          font-size: 18px;
        }
      }
    }
  }
}
</style>