
<template>
  <div id="parent">
    <!-- 顶部 -->
    <div class="content-title">
      <a href>
        <van-icon name="scan" size="30px" />
      </a>
      <span class="w">我的</span>
    </div>
    <!-- 个人信息 -->
    <van-cell-group class="user">
      <van-icon size="40" name="../assets/Cart/touxiang.jpg" class="MT"></van-icon>
      <van-cell title="用户名" label="亲,个人信息还未完善!" is-link />
    </van-cell-group>
    <div class="wodo-tips">
      <label class="tips">
        <van-icon name="add-o" size="1.6rem" />
        <span>添加宝宝</span>
      </label>
      <label class="tips">
        <van-icon name="envelop-o" size="1.6rem" />
        <span>意见反馈</span>
      </label>
      <label class="tips">
        <van-icon name="setting-o" size="1.6rem" />
        <span>通用设置</span>
      </label>
    </div>
    <!-- 单元 -->
    <div class="d1"></div>
    <van-cell title="我的宝豆" is-link value="签到领取宝豆" icon="../assets/Cart/baodou.png" />
    <div class="d1"></div>
    <van-cell title="亲宝优品" is-link value="新人满200立减100" icon="../assets/Cart/youpin.png" />
    <van-cell title="童书" is-link value="五折封顶 买一赠一" icon="../assets/Cart/tongshu.png" />
    <div class="d1"></div>
    <van-cell title="亲宝小伴" is-link value="AI早教机" icon="../assets/Cart/xiaoban.png" />
    <div class="d1"></div>
    <van-cell title="购物车" is-link icon="../assets/Cart/gouwuche.png" url="/shopping" />
    <van-cell title="我的订单" is-link icon="../assets/Cart/dingdan.png" />
    <van-cell title="优惠券" is-link icon="../assets/Cart/youhuijuan.png" />
    <div class="d1"></div>
    <van-cell title="收藏" is-link icon="../assets/Cart/shoucang.png" />
    <div class="d2"></div>
    <!-- <home-footer></home-footer> -->
  </div>
</template>

<script>
// import HomeFooter from "./pages/footer";
export default {
  name: "home",
  components: {
    // HomeFooter
  },
  data() {
    return {
      active: "",
      icon: {
        active: "./assets/Cart/qinbaobao.png",
        inactive: "./assets/Cart/qinbaobao.png",
        active_yuer: "./assets/Cart/yuer.png",
        inactive_yuer: "./assets/Cart/yuer.png",
        active_shenghuo: "./assets/Cart/shenghuo.png",
        inactive_shenghuo: "./assets/Cart/shenghuo.png",
        active_xiaoxi: "./assets/Cart/xiaoxi.png",
        inactive_xiaoxi: "./assets/Cart/xiaoxi.png",
        active_wode: "./assets/Cart/wode.png",
        inactive_wode: "./assets/Cart/wode.png"
      }
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>



<style lang="scss" scoped>
.content-title {
  display: flex;
}
.w {
  margin: auto;
  font-size: 1.2rem;
  font-weight: bold;
}
.wodo-tips {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0 10px 0;
  .tips {
    display: flex;
    height: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      margin-top: 5px;
    }
  }
}
.d1 {
  width: 100%;
  height: 1rem;
  background: #e8e8e8;
}
.d2 {
  width: 100%;
  height: 25rem;
  background: #e8e8e8;
}
.user {
  display: flex;
  margin-top: 10px;
}
.MT {
  margin-top: 10px;
}
</style>
