<template>
  <div id="parent">
    <van-nav-bar title="添加收货地址" 
    @click-left="onClickLeft"
    left-arrow
    left-text="返回"/>
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      
    />
    <!--  -->
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: []
    };
  },
  methods:{
    onClickLeft(){
      this.$router.push('/order')
    }
  }
};
</script>

<style lang="scss" scoped>
#parent {
  position: relative;
}
.foot {
  position: fixed;
  top: 38rem;
  width: 100%;
  height: 4rem;
  background: #fff;
  z-index: 3;
}
</style>