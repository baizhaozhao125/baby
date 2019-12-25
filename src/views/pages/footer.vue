<template>
  <!-- 底部导航 -->
  <div style="z-index:1">
    <van-tabbar v-model="active">
      <van-tabbar-item @click="pushQ">
        <span>亲宝宝</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item @click="pushY">
        <span>育儿</span>
        <img
          :src="props.active ? icon.active_yuer : icon.inactive_yuer"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item @click="pushS">
        <span>生活</span>
        <img
          :src="props.active ? icon.active_shenghuo : icon.inactive_shenghuo"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item @click="pushX">
        <span>活动</span>
        <img
          :src="props.active ? icon.active_xiaoxi : icon.inactive_xiaoxi"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item @click="pushW">
        <span>我的</span>
        <img
          :src="props.active ? icon.active_wode : icon.inactive_wode"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
  data() {
    return {
      active: 0,
      icon: {
        active: "./assets/Cart/qinbaobao1.png",
        inactive: "./assets/Cart/qinbaobao.png",
        active_yuer: "./assets/Cart/yuer1.png",
        inactive_yuer: "./assets/Cart/yuer.png",
        active_shenghuo: "./assets/Cart/shenghuo1.png",
        inactive_shenghuo: "./assets/Cart/shenghuo.png",
        active_xiaoxi: "./assets/Cart/xiaoxi1.png",
        inactive_xiaoxi: "./assets/Cart/xiaoxi.png",
        active_wode: "./assets/Cart/wode1.png",
        inactive_wode: "./assets/Cart/wode.png"
      }
    };
  },
  methods: {
    pushQ() {
      this.$router
        .push("/share")
        .then(res => {})
        .catch(err => {});
    },
    pushY() {
      this.$router
        .push("/Community")
        .then(res => {})
        .catch(err => {});
    },
    pushS() {
      this.$router
        .push("/Product")
        .then(res => {})
        .catch(err => {});
    },
    pushX() {
      this.$router
        .push("/Chat")
        .then(res => {})
        .catch(err => {});
    },
    pushW() {
      this.$router
        .push("/Cart")
        .then(res => {})
        .catch(err => {});
    }
  }
};
</script>

<style>
</style>