<template>
  <div class="spec-preview">
    <!-- 原图 -->
    <img :src="imgObj.imgUrl" />
    <!-- 用于绑定鼠标移动样式 -->
    <div class="event" @mousemove="handler"></div>
    <!-- 放大区域 -->
    <div class="big" >
      <img :src="imgObj.imgUrl" ref="big"/>
    </div>
    <!--  遮罩层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data(){
      return {
        currtentIndex: 0,
      }
    },
    props:['skuImageList'],
    computed:{
      // 计算图片地址,解决数据未回来时的报错
      imgObj(){
        return this.skuImageList[this.currtentIndex] || {};
      }
    },
    methods:{
      handler(event){
        // 获取遮罩层
        let mask = this.$refs.mask;
        // 获取放大区域
        let big = this.$refs.big;

        // 计算遮罩层的left和top
        let left = event.offsetX - mask.offsetWidth/2;
        let top = event.offsetY - mask.offsetHeight/2;

        // 约束遮罩层的范围
        if(left<=0) left = 0;
        if(left>=mask.offsetWidth) left = mask.offsetWidth;
        if(top<=0) top = 0;
        if(top>=mask.offsetHeight) top = mask.offsetHeight;

        // 设置遮罩层的位置
        mask.style.left = left + 'px';
        mask.style.top = top + 'px';

        // 放大
        big.style.left = -2*left + 'px';
        big.style.top = -2*top + 'px';
      }
    },
    mounted(){
      this.$bus.$on('getIndex',(index)=>{
        this.currtentIndex = index;
      })
    }

  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>