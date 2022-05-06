<template>
  <div class="floor">
    <div class="floor-container">
      <div class="floor-title">
        <h4>家用电器</h4>
        <ul class="title-list">
          <li class="title-item active"><a href="">热门</a><span>|</span></li>
          <li class="title-item"><a href="">大家电</a><span>|</span></li>
          <li class="title-item"><a href="">生活电器</a><span>|</span></li>
          <li class="title-item"><a href="">厨房电器</a><span>|</span></li>
          <li class="title-item"><a href="">应季电器</a><span>|</span></li>
          <li class="title-item"><a href="">空气/净水</a><span>|</span></li>
          <li class="title-item"><a href="">高端电器</a></li>
        </ul>
      </div>
      <div class="products">
        <div class="products-left">
          <ul class="left">
            <li>节能补贴</li>
            <li>空气净化器</li>
            <li>滚筒洗衣机</li>
          </ul>
          <ul class="right">
              <li>4K电视</li>
              <li>IH电饭煲</li>
              <li>电热水器</li>
            </ul>
            <img src="./images/floor-1-1.png" alt="">
        </div>
        <div class="center">
          <Carsouel :bannerList="bannerList"/>
        </div>
        <div class="products-right">
          <div class="left">
            <div class="top">
              <img src="./images/floor-1-2.png" alt="">
            </div>
            <div class="bottom">
              <img src="./images/floor-1-3.png" alt="">
            </div>
          </div>
          <div class="right">
            <div class="top">
              <img src="./images/floor-1-5.png" alt="">
              </div>
              <div class="bottom">
                <img src="./images/floor-1-6.png" alt="">
              </div>
          </div>
          <div class="main">
            <img src="./images/floor-1-4.png" alt="">
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'Floor',
  data(){
    return {
      bannerList:[
        {id:"1",imgUrl:'/images/floor-1-b01.png'},
        {id:"2",imgUrl:'/images/floor-1-b02.png'},
        {id:"3",imgUrl:'/images/floor-1-b03.png'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.floor{
  margin-bottom: 10px;
  .floor-container{
    width: 1200px;
    margin: 0 auto;
    // background-color: skyblue;
    .floor-title{
      height: 48px;
      border-bottom: 2px solid #c81623;
      overflow: hidden;
      line-height: 48px;
      h4{
        float: left;
        color: #c81623;
        font-size: 18px;
      }
      .title-list{
        margin-right: 20px;
        float: right;
        .title-item{
          font-size: 12px;
          float: left;
          span{
            padding: 0 10px;
          }
          a:hover{
            color: blue;
          }
        }
        .active{
          a{
            color: inherit;
          }
          color: #e21f11;
        }
      }
    }
    .products{
      display: flex;
      .products-left{
        margin: 15px 10px;
        width: 210px;
        text-align: center;

        .left{
          float: left;

        }
        .right{
          float: right;

        }
        li{
          padding: 5px 10px;
          border-bottom: 1px solid #333;
        }
        img{
          margin-top: 20px;
        }
      }
      .center{
        // box-sizing: border-box;
        width: 330px;
        height: 100%;
      }
      .products-right{
        border-bottom:#333 solid 1px;

        .left-right(@float){
          float: @float;
          .top{
            border-bottom: solid 1px #333;
            img{
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .bottom{
            img{
              width: 100%;
              vertical-align: middle;
            }
          }
        }
        .left{
          .left-right(left);
        }
        .right{
          .left-right(right);
        }
        .main{
          overflow: hidden;
          border-left: 1px solid #333;
          border-right: 1px solid #333;
        }
      }

    }
  }
}
</style>