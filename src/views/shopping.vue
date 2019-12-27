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
    <van-card
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
    </van-card>
    <van-submit-bar  @submit="aaaaa" :price="3050" button-text="提交订单">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
    <div style="margin-top:4rem"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:1,
      num1:1,
      num2:1,
      list:[]
    };
  },
  created(){
    this.loadMore()
  },
  methods: {
    loadMore(){
      this.axios.get("/findcart").then(res=>{
        var row=res.data.data
        this.list=row
        console.log( this.list)
        if(res.data.code==-2){
          this.$router.push("/Login")
        }
      })

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
    add(){
      this.num++
    },
    sub(){
      this.num--
    },
    add1(){
      this.num1++
    },
    sub1(){
      this.num1--
    },
    add2(){
      this.num2++
    },
    sub2(){
      this.num2--
    },
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