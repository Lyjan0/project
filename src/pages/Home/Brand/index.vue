<template>
  <div class="brand">
    <div class="brand-container">
      <ul class="brandList">
        <li class="brandItem"><img src="./images/brand_03.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_05.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_07.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_09.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_11.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_13.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_15.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_17.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_19.png" alt="" class="img"></li>
        <li class="brandItem"><img src="./images/brand_21.png" alt="" class="img"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Brand'
}
</script>

<style lang="less" scoped>
.brand{
  margin-bottom: 10px;
  .brand-container{
    width: 1200px;
    margin: 0 auto;
    // background-color: red;
    .brandList{
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      .brandItem{
         width: 120px;
        float: left;
        height: 37px;
        .img{
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }
        &:first-child{
          .img{
             border-left: 0;
          }

          }
      }
    }
  }
}
</style>