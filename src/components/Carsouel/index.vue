<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="banner in bannerList"
        :key="banner.id"
      >
        <img :src="banner.imgUrl" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name:'Carsouel',
  props:['bannerList'],
  mounted(){
    // console.log(this.bannerList);
  },

  watch:{
    bannerList:{
      immediate:true,
      handler(){
        
        this.$nextTick(()=>{

          var mySwiper = new Swiper(
            this.$refs.cur,
            {
              //循环模式
              loop:true,
              //如果需要分布页器
              pagination:{
                el:'.swiper-pagination',
                //点击小球切换图片
                clickable:true,
              },
              //如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            }
          )
        })
      }
    }
  }
}
</script>


<style lang="less" scoped>
</style>