<template>
  <div class="like">
    <div class="like-container">
      <div class="like-banner">
        <h4>猜你喜欢</h4>
        <a href="#">换一换<i></i></a>
      </div>
      <div class="productsList">
        <div class="productsItem">
          <img src="./images/like_01.png" alt="">
          <h4>阳光美包新款单肩包女包时尚子母包四件套女</h4>
          <span><em>￥</em>116.0</span>
        </div>
        <div class="productsItem">
          <img src="./images/like_02.png" alt="">
          <h4>阳光美包新款单肩包女包时尚子母包四件套女</h4>
          <span><em>￥</em>116.0</span>
        </div>
        <div class="productsItem">
          <img src="./images/like_03.png" alt="">
          <h4>阳光美包新款单肩包女包时尚子母包四件套女</h4>
          <span><em>￥</em>116.0</span>
        </div>
        <div class="productsItem">
          <img src="./images/like_01.png" alt="">
          <h4>阳光美包新款单肩包女包时尚子母包四件套女</h4>
          <span><em>￥</em>116.0</span>
        </div>
        <div class="productsItem">
          <img src="./images/like_02.png" alt="">
          <h4>阳光美包新款单肩包女包时尚子母包四件套女</h4>
          <span><em>￥</em>116.0</span>
        </div>
        <div class="productsItem">
          <img src="./images/like_03.png" alt="">
          <h4>阳光美包新款单肩包女包时尚子母包四件套女</h4>
          <span><em>￥</em>116.0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'Like'
}
</script>

<style lang="less" scoped>
.like{
  margin-bottom: 10px;
  .like-container{
    width: 1200px;
    margin: 0 auto;
    // background-color: red;
    // overflow: hidden;
    .like-banner{
      overflow: hidden;
      font-size:18px;
      h4{
        float: left;

      }
      a{
        float: right;
        // line-height: 20px;
        position: relative;
        i{
          // margin-top: 10px;
          // position: absolute;
          // top: 50%;
          display: inline-block;
          width: 40px;height: 20px;
          background-image: url('~@/assets/icons.png');
          background-position: 140px -104px;
        }
      }
    }
    .productsList{
      border: 1px solid #333;
      display: flex;
      justify-content:space-between;
      .productsItem{
        text-align: center;
        // background-color: red;
        width: 180px;
        h4{
          // text-align: center;
          margin:10px auto;
          width: 140px
        }
        span{
          display:inline-block;
          color: red;
          margin-bottom: 20px;
        }
        img{
          margin-top: 10px;
          transition: all 400ms;
          &:hover{
            opacity:0.8;
            transform:scale(1.1);
          }
        }
      }
    }
  }
}
</style>