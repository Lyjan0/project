<template>
  <footer class="footer">
    <div class="cantainer ">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>全员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <ul class="footerItemCon">
            <img src="./images/wx_cz.jpg" alt="微信二维码">
          </ul>
        </div>
      </div>

      <!-- 版权 -->
      <div class="copyright">
        <ul class="helpLink">
          <li>关于我们<span class="space"></span></li>
          <li>联系我们<span class="space"></span></li>
          <li>关于我们<span class="space"></span></li>
          <li>商家入驻<span class="space"></span></li>
          <li>营销中心<span class="space"></span></li>
          <li>友情链接<span class="space"></span></li>
          <li>关于我们<span class="space"></span></li>
          <li>营销中心<span class="space"></span></li>
          <li>友情链接<span class="space"></span></li>
          <li>关于我们</li>
        </ul>
          <p>地址：北京市昌平区宏褔科技园综合楼6层</p>
          <p>京ICP备19006430号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style lang="less" scoped>
@max-width: 1200px;
.footer{
  background-color: #eaeaea;
  .cantainer { 
    // background-color: red;
    width: @max-width;
    margin: 0 auto;
    // 开启BFC，清除浮动
    .footerList {
      // border-top: solid 1px #e4e1e1;
      border-bottom: solid 1px #e4e1e1;
      padding: 20px 0;
      padding-left: 60px;
      overflow: hidden;
      .footerItem{
        
        float: left;
        // width: calc((@max-width - 60px)/6);
        width: 16.6%;
        h4{
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }
        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;
      .helpLink{
        text-align: center;
        // background-color: red;
        overflow: hidden;
        li{  
          // 改变为行内元素，使父级元素中text-align: center;起作用/
          // 如果使用布局，则会重置，不起作用
          // float:left;
          display:inline;
          .space {
            width: 1px;
            height: 13px;
            border-left: solid 1px #666;
            margin: 8px 10px;
          }
        }
      }
      p{
        // background-color: red;
          margin:10px 0;
          text-align: center;

      }
    }
  }
}
</style>