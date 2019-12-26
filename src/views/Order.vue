<template>
  <div id="parent">
    <!--  -->
    <van-nav-bar
      title="订单信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--  -->
    <van-cell @click="Address" title="请填写收货人地址" style="margin-top:0.5rem" is-link icon="location-o" />
    <!--  -->
    <van-cell title="支付方式" size="large" style="margin-top:1rem"/>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="支付宝支付" clickable @click="radio = '1'" icon="../assets/Cart/zhifubao.png">
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <van-cell title="微信支付" clickable @click="radio = '2'" icon="../assets/Cart/weixin.png">
          <van-radio slot="right-icon" name="2" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <!--  -->
    <van-cell title="亲宝优品" style="margin-top:1rem"/>
    <!--  -->
    <van-card
      num="1"
      tag="满减"
      price="9.90"
      desc="规格:西瓜红"
      title="婴儿洗澡水温计"
      thumb="../assets/Cart/1.jpg"
    ></van-card>
    <van-card
      num="1"
      tag="满减"
      price="29.00"
      desc="规格:3盒*200支"
      title="婴儿纸轴双头棉签200支装"
      thumb="../assets/Cart/2.jpg"
    ></van-card>
    <van-card
      num="1"
      tag="满减"
      price="19.00"
      desc="颜色:指甲刀套装 薄雾蓝"
      title="指甲护理4件套"
      thumb="../assets/Cart/3.jpg"
    ></van-card>
    <!--  -->
    <van-submit-bar :price="3050" button-text="提交订单" />
    <div style="margin-top:4rem"></div>
  </div>
</template>

<script>
export default {
  data() {
    return { radio: "1" };
  },
  methods:{
    onClickLeft() {
      this.$router.push({ path: "/shopping" });
    },
    Address(){
      this.$router.push({ path: "/Address" });
    }
  }
};
</script>

<style  lang="scss" scoped>
#parent {
  background: #e8e8e8;
  width: 100%;
}
.content-title {
  display: flex;
  background:#fff;
  height:3rem
}
.w {
  margin: auto;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>