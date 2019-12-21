<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>亲宝宝</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>育儿</span>
        <img
          :src="props.active ? icon.active_yuer : icon.inactive_yuer"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item @click="pushUrl">
        <span>生活</span>
        <img
          :src="props.active ? icon.active_shenghuo : icon.inactive_shenghuo"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>消息</span>
        <img
          :src="props.active ? icon.active_xiaoxi : icon.inactive_xiaoxi"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item>
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
  data() {
    return {
      active: 4,
      icon: {
        active: "../assets/Cart/1.png",
        inactive: "../assets/Cart/1.png",
        active_yuer: "../assets/Cart/2.png",
        inactive_yuer: "../assets/Cart/2.png",
        active_shenghuo: "../assets/Cart/3.png",
        inactive_shenghuo: "../assets/Cart/3.png",
        active_xiaoxi: "../assets/Cart/4.png",
        inactive_xiaoxi: "../assets/Cart/4.png",
        active_wode: "../assets/Cart/5.png",
        inactive_wode: "../assets/Cart/5.png"
      }
    };
  },
  methods:{
     pushUrl(){
      // 跳转到商城(生活)
      this.$router.push("/Product");
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
