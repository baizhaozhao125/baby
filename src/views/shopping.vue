<template>
  <div class="parent">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell title="已满足'0.99元超值换购" is-link value="去换购" />
    <van-cell value="再够160.1元立享'满199减20,满299减30 进入...'" is-link />

    <van-card
      tag="满减"
      price="9.90"
      desc="规格:西瓜红"
      title="婴儿洗澡水温计"
      thumb="../assets/Cart/1.jpg"
    >
      <div slot="footer">
        <div class="num">{{$store.getters.getAge}}</div>
        <van-button @click="add1">+</van-button>
        <van-button @click="sub1">-</van-button>
      </div>
    </van-card>
    <van-card
      tag="满减"
      price="29.00"
      desc="规格:3盒*200支"
      title="婴儿纸轴双头棉签200支装"
      thumb="../assets/Cart/2.jpg"
    >
      <div slot="footer">
        <div class="num">{{$store.getters.getAge}}</div>
        <van-button @click="add2">+</van-button>
        <van-button @click="sub2">-</van-button>
      </div>
    </van-card>
    <van-cell value="再够2减立享'69元3件,89元4件 进入活..." is-link />
    <van-card
      tag="满减"
      price="19.00"
      desc="颜色:指甲刀套装 薄雾蓝"
      title="指甲护理4件套"
      thumb="../assets/Cart/3.jpg"
      class="numr"
    >
      <div slot="footer">
        <div class="num">{{$store.getters.getAge}}</div>
        <van-button @click="add">+</van-button>
        <van-button @click="sub">-</van-button>
      </div>
    </van-card>
    <van-submit-bar  @submit="aaaaa" :price="3050" button-text="提交订单">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
    <div style="margin-top:4rem"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/Product" });
    },
    onClickRight() {
      Toast("按钮");
    },
    aaaaa() {
      this.$router.push({ path: "/order" });
    },
    add(){
      this.$store.commit("addNum")
    },
    sub(){
      this.$store.commit("subNum")
    },
    add1(){
      this.$store.commit("addNum")
    },
    sub1(){
      this.$store.commit("subNum")
    },
    add2(){
      this.$store.commit("addNum")
    },
    sub2(){
      this.$store.commit("subNum")
    }
  }
};
</script>

<style scoped>
.one {
  display: flex;
}
.parent {
  background: #e8e8e8;
}
.num{
  position:absolute;
  font-size:1rem;
  margin-bottom:1rem;
  left: 21rem;
  bottom:3.5rem
}
.numr{
  position: relative;
}
</style>