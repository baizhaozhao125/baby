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

    <van-cell value="再够2减立享'69元3件,89元4件 进入活..." is-link />

    <div class="card">
      <div class="card_img">
        <img
          style="width:5.625rem;height:5.625rem;margin:1rem 0 0 1rem;"
          src="../../public/assets/Cart/3.jpg"
        />
      </div>
      <div class="card_item">
        <p>指甲护理4件套</p>
        <p>颜色:指甲刀套装 薄雾蓝</p>
        <p>¥19.00</p>
      </div>
      <div class="card_btn" slot="footer">
        <div style="margin:0rem 0 1.2rem 4rem;">{{num2}}</div>
        <van-button @click="add2">+</van-button>
        <van-button @click="sub2">-</van-button>
      </div>
    </div>
    <!-- <van-card
      tag="满减"
      price="19.00"
      desc="颜色:指甲刀套装 薄雾蓝"
      title="指甲护理4件套"
      thumb="../assets/Cart/3.jpg"
      class="numr"
    >
      <div slot="footer">
        <div class="num">{{num2}}</div>
        <van-button @click="add2">+</van-button>
        <van-button @click="sub2">-</van-button>
      </div>
    </van-card>-->
    <van-submit-bar @submit="aaaaa" :price="3050" button-text="提交订单">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
    <div style="margin-top:4rem"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      num1: 1,
      num2: 1,
      list: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.axios.get("/findcart").then(res => {
        var row = res.data.data;
        this.list = row;
        console.log(this.list);
        if (res.data.code == -2) {
          this.$router.push("/Login");
        }
      });
    },
    onClickLeft() {
      this.$router.push({ path: "/Product" });
    },
    onClickRight() {
      Toast("按钮");
    },
    aaaaa() {
      this.$router.push({ path: "/order" });
    },
    add() {
      this.num++;
    },
    sub() {
      this.num--;
    },
    add1() {
      this.num1++;
    },
    sub1() {
      this.num1--;
    },
    add2() {
      this.num2++;
    },
    sub2() {
      if (this.num2 <= 1) {
        this.num2=1
      } else {
        this.num2--;
      }
    }
  }
};
</script>

<style scoped>
/* 商品卡片的样式 */
.card {
  display: flex;
  background: #fafafa;
}
/* 商品样式的文字 */
.card_item {
  margin-top: 1rem;
}
.card_item p {
  margin: 0.3rem 0.3rem;
  font-size: 0.6rem;
}
.card_item :nth-child(2) {
  color: #aaa;
}
.card_item :last-child {
  color: #f00;
}
.card_btn {
  margin: 3rem 2rem 2rem 1rem;
}
.one {
  display: flex;
}
.num {
  position: absolute;
  font-size: 1rem;
  margin-bottom: 1rem;
  left: 21rem;
  bottom: 3.5rem;
}
.numr {
  position: relative;
}
</style>