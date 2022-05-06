<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" :class="{disabled:pageNo == 1}">
          <a :style="{'pointer-events':pageNo == 1?'none':'auto'}" @click="changePageNo(pageNo - 1)">«上一页</a>
        </li>
        <!-- 第一页 -->
        <li :class="{active:pageNo == 1}" v-if="startAndEnd.start != 1">
          <a @click="changePageNo('1')">1</a>
        </li>
        <!-- startAndEnd.start起始页为2的时候,显示 -->
        <li class="dotted" v-if="startAndEnd.start > 1"><span>...</span></li>
        <!-- 中间连续部分 -->
        <template v-for="(page,index) in startAndEnd.end">
          <li
            :class="{active:pageNo == page}"
            v-if="page >= startAndEnd.start"
            :key="index"
          >
            <a @click="changePageNo(page)">{{page}}</a>
          </li>
        </template>

        <li class="dotted" v-if="startAndEnd.end <pageTotal "><span>...</span></li>
        <!-- 最后一页 -->
        <li :class="{active:pageNo == pageTotal}" v-if="startAndEnd.end != pageTotal">
          <a @click="changePageNo(pageTotal)">{{pageTotal}}</a>
        </li>

        <li class="next" :class="{disabled:pageNo == pageTotal}">
          <a :style="{'pointer-events':pageNo == pageTotal?'none':'auto'}" @click="changePageNo(pageNo + 1)">下一页»</a>
        </li>
      </ul>
      <div><span>共{{pageTotal}}页&nbsp;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props:['total','count','pageNo','pageSize'],
  computed:{
    // 计算总页数
    pageTotal(){
      return Math.ceil(this.total / this.pageSize);
    },

    // 计算中间连续页的起始和结束,获取到区间用于遍历
    startAndEnd(){
      // 有5页和7页之分的(一般来说是5或7页)
      // 将需要的数据解构出来,方便使用
      let {count,pageTotal,pageNo} = this;
      // 用于存储开始与结束页
      let start=0,end=0;
      // 并非所以的总数都是大于5的
      if(count>pageTotal){
        // 总页数小于连续页数的
        start = 1;
        end = pageTotal;
      }else{
        // 总页数大于连续页数的
        // 1 2 3 4 5 6 7 8 9
        // 当前页 -|+ 连续页取半,(5:2,7:3)
        start = pageNo - parseInt(count/2);
        end = pageNo + parseInt(count/2);

        // 开始页有负数情况,进行纠正
        if(start <  1){
          start = 1;
          end = count;
        }
        //结束页有大于总页数的情况,进行纠正
        if(end > pageTotal){
          start = pageTotal - count + 1;
          end = pageTotal;

        }



      }
      return {start,end}


    }

  },
  methods:{
    changePageNo(index){
      if(index < 1){
        index = 1;
      }
      if(index > this.pageTotal){
        index = this.pageTotal;
      }
      this.$emit('changePageNo',index);
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  width: 800px;
  height: 66px;
  overflow: hidden;

  margin: 0 auto;
  // background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;

  .sui-pagination {
    ul {
      float: left;
      border: 1px solid #e0e9ee;
      li{
        display: inline-block;
        border-right: 1px solid #e0e9ee;
        a{
          display: inline-block;
          padding: 9px 18px;

        }
        span{
          display: inline-block;
          padding: 9px 18px;

        }
        &:last-child{
          border-right: 0;
          background-color: #f7f7f7;
        }
        &:first-child{
          background-color: #f7f7f7;
        }
        &.active{
          a{
            color: #e1251b;
            cursor: default;
          }
        }
        &.prev,&.next{
          a{
            color:rgb(14, 13, 13);
          }
        }
        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }
      }

    }
    div {
      margin-left: 10px;
      color: #333;
      // font-size: 14px;
      float: right;
      padding: 9px 18px;
      border: 1px solid #e0e9ee;
    }
  }
}
</style>