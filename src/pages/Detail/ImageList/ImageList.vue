<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(skuImage,index) in skuImageList"
        :key="index"
      >
        <img
        :class="{active:currentIndex==index}"
          :src="skuImage.imgUrl"
          :data-img="'img'"
          :data-index="index"

        >
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default    {
    name: "ImageList",
    data(){
      return {
        currentIndex:0,
        imgs: this.$refs.img,
      }
    },
    props:['skuImageList'],
    methods:{
      changeCurrentIndex(index){
        this.currentIndex = index;
        this.$bus.$emit('getIndex',this.currentIndex);

      }
    },
    watch:{
      skuImageList:{
        immediate:true,
        handler(){
          this.$nextTick(()=>{
            let thid = this;
            var mySwiper = new Swiper(
              this.$refs.cur,

              {
                //循环模式
                // loop:true,
                //如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                // 显示图片的个数
                slidesPerView: 3,
                // 一次切换图片个数
                slidesPerGroup: 1,
                // 阻止冒泡
                preventClicksPropagation:false,
                //绑定事件
                on:{
                  click: function(event){
                    let {index,img} = event.target.dataset;
                    if(img){
                      thid.changeCurrentIndex(index);
                      // console.log('realIndex:'+this.realIndex,'activeIndexthis:'+ this.activeIndex,'snapIndex:'+this.snapIndex);
                      // thid.currentIndex = this.clickedIndex - this.activeIndex;
                      // console.log('clickedIndex'+this.clickedIndex , "activeIndex:"+this.activeIndex);
                      // thid.$bus.$emit('getIndex',index);
                    }
                    // console.log(this);
                },
                }
              }
            );

          })
        }
      },


  }

  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;

    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: space-around;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;
        pointer-events:auto;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>