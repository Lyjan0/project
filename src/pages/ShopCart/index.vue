<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="cartInfo in cartInfoList"
          :key="cartInfo.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cartInfo.isChecked"
              @change="updateChecked(cartInfo.skuId,$event)"
            >
          </li>
          <li class="cart-list-con2">
            <img :src="cartInfo.imgUrl">
            <div class="item-msg">{{cartInfo.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{cartInfo.skuPrice + '.00'}}</span>
          </li>
          <li class="cart-list-con5">
            <a @click="handler('sub',$event,cartInfo)" class="mins">-</a>
            <input @change="handler('input',$event,cartInfo)" autocomplete="off" type="text" :value="cartInfo.skuNum" minnum="1" class="itxt">
            <a @click="handler('add',$event,cartInfo)" class="plus">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cartInfo.skuPrice * cartInfo.skuNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a @click="deleteCartByskuId(cartInfo.skuId)" class="sindelet">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          @click="updateAllChecked($event)"
          :checked="isAllChecked && cartInfoList.length > 0"
        >
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCartByChecked">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{selectAllGoodsAndPrice().sum}}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{selectAllGoodsAndPrice().lumpSum}}</i>
        </div>
        <div class="sumbtn">
          <router-link to="/trade" class="sum-btn" >结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/****************************************************************/
/****************************************************************/
  import {mapGetters} from 'vuex';
  export default {

    name: 'ShopCart',
    mounted(){
      // 挂载完发请求
      this.getData();
    },
    methods:{
      // 派发actions获取数据
      getData(){
        this.$store.dispatch('getCartList');
      },

      // 计算数量
      async handler(type,event,cartInfo){
        let disNum = 0;
        switch (type){
          case 'add':
            disNum = 1;
            break;
          case 'sub':
            if(cartInfo.skuNum > 1){
              disNum = -1;
            }else{
              disNum = 0;
            };
            break;
          case 'input':
            if(isNaN(cartInfo.skuNum) || cartInfo.skuNum < 1){
              disNum = 0;
            }else{
              disNum = parseInt(event.target.value) - cartInfo.skuNum ;
            };
            break;
        }
        // 通知服务器修改数据
        try {
          await this.$store.dispatch('addOrUpdateShopCart',{skuId:cartInfo.skuId,skuNum:disNum});
          // 成功，发请求
          this.getData();
        } catch (error) {
          alert(error.message);
        }
      },

      // 删除商品
      async deleteCartByskuId(skuId){
        try {
          await this.$store.dispatch('deleteCartById',skuId);
          // 等待修改成功，重新发请求，获取新数据
          this.getData();
        } catch (error) {
          alert(error.message);
        }
      },

      // 修改选中状态
      async updateChecked(skuId,event){
        let num  = event.target.checked ? '1' : '0';
        try {
          await this.$store.dispatch('updateChecked',{skuId,isChecked:num});
          // 等待成功，重新获取服务器数据，
          this.getData();
        } catch (error) {
          alert(error.message);
        }
      },

      // 修改全选状态
      async updateAllChecked(event){
        let isChecked = event.target.checked ? '1' : '0';
        try {
          // 等待全部修改完的promise
          await this.$store.dispatch('updateAllChecked',isChecked);
          this.getData();
        } catch (error) {
          alert(error.message);
        }
      },

      // 删除选中的状态
      async deleteAllCartByChecked(){
        try {
          await this.$store.dispatch('deleteAllCartByChecked');
          // 成功
          this.getData();
        } catch (error) {
          alert(error.message);
        }
      },

      // 选择的商品数量与总价
      selectAllGoodsAndPrice(){
        let sum = 0;
        let lumpSum = 0;
        this.cartInfoList.forEach((item)=>{
          if(item.isChecked == '1'){
            sum += 1;
            lumpSum += item.skuNum * item.skuPrice;
          }
        });
        return {sum,lumpSum};
      }
    },
    computed:{
      ...mapGetters(['cartList','cartInfoList']),

      // 计算全选的状态
      isAllChecked(){
        return this.cartInfoList.every(item => item.isChecked == '1');
      },
      // // 计算选中多少商品
      // selectAllGoods(){
      //   let sum = 0;
      //   this.cartInfoList.forEach((item)=>{
      //     if(item.isChecked == '1'){
      //       sum += item.skuNum;
      //     }
      //   });
      //   return sum;
      // },
      // // 计算总价
      // price(){

      // }
    },


  }
  /****************************************************************/
  /****************************************************************/
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 25%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
        }

        .cart-th3,
        .cart-th4,
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 15%;
          }

          .cart-list-con2 {
            width: 35%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }

          .cart-list-con3 {
            width: 10%;

            .item-txt {
              text-align: center;
            }
          }

          .cart-list-con4 {
            width: 10%;

          }

          .cart-list-con5 {
            width: 17%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 10%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 13%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>