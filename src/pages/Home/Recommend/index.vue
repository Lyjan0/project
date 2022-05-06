<template>
  <div class="recommend">
    <div class="recommend-container">
      <ul class="recommendList">
        <li class="clock">
          <div class="time">
            <img src="./images/clock.png" alt="">
            <h4>今日推荐</h4>
          </div> 
        </li>
        <li class="banner"> <img src="./images/today01.png" alt=""> </li>
        <li class="banner"> <img src="./images/today02.png" alt=""> </li>
        <li class="banner"> <img src="./images/today03.png" alt=""> </li>
        <li class="banner"> <img src="./images/today04.png" alt=""> </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommend'
}
</script>

<style  lang="less" scoped>
.recommend{
  .recommend-container{
    width: 1200px;
    margin: 15px auto;
    // background-color: rosybrown;
    .recommendList{
      overflow: hidden;     
        li{
          float: left;
          img{
            vertical-align: middle;
            &:hover{
              opacity:0.8;
            }
          }
        }
        .clock{
          width:205px;
          height: 163px;
          position: relative;
          background-color: #5c5251;
          
          
          .time{
            position: absolute;
            left:50%;
            top: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            h4{
              font-size: 18px;
              color: #fff;
            }
          }
        }
        
    }
  }
}
</style>