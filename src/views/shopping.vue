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
      num="1"
      tag="满减"
      price="9.90"
      desc="规格:西瓜红"
      title="婴儿洗澡水温计"
      thumb="../assets/Cart/baodou.png"
    >
      <div slot="footer">
        <van-button>+</van-button>
        <van-button>-</van-button>
      </div>
    </van-card>
    <van-card
      num="1"
      tag="满减"
      price="29.00"
      desc="规格:3盒*200支"
      title="婴儿纸轴双头棉签200支装"
      thumb="../assets/Cart/baodou.png"
    >
      <div slot="footer">
        <van-button>+</van-button>
        <van-button>-</van-button>
      </div>
    </van-card>
    <van-cell value="再够2减立享'69元3件,89元4件 进入活..." is-link />
    <van-card
      num="1"
      tag="满减"
      price="19.00"
      desc="颜色:指甲刀套装 薄雾蓝"
      title="指甲护理4件套"
      thumb="../assets/Cart/baodou.png"
    >
      <div slot="footer">
        <van-button>+</van-button>
        <van-button>-</van-button>
      </div>
    </van-card>
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox >全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/cart" });
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style scoped>
.one {
  display: flex;
}
.parent{
  background:#e8e8e8;
}
</style>