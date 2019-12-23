<template>
  <div class="parent">
    <!-- <div class="top">
      <img src="../assets/Details/r2.png" alt />
      <h3 class="h1">纸尿裤</h3>
    </div>-->
    <van-nav-bar
     @click-left="onClickLeft"
      title="纸尿裤"
      left-arrow
      style="position:fixed; top:0;
            width:100%;"
    />
    <!-- 搜索框 -->
    <van-search placeholder="鲸吸纸尿裤" />
    <!-- 图标 -->
    <div class="icon_img">
      <img src="../assets/Details/product_img2.jpg" />
      <img src="../assets/Details/product_img2.jpg" />
      <img src="../assets/Details/product_img2.jpg" />
      <img src="../assets/Details/product_img2.jpg" />
      <img src="../assets/Details/product_img2.jpg" />
    </div>
    <div class="p1">
      <p>纸尿裤</p>
      <p>拉拉裤</p>
      <p>试用装</p>
      <p>干湿巾</p>
      <p>清洁</p>
    </div>
    <h4 style="margin:0.5rem 18rem 0.5rem 0.5rem;">爆款推荐</h4>
    <div class="product">
      <div class="P_detail">
        <img src="../assets/Details/product_img3.jpg" />
        <h4>绵柔纸尿裤</h4>
        <span class="s1">¥88</span>
        <span class="s2">8包减100</span>
      </div>
      <div class="P_detail">
        <img src="../assets/Details/product_img1.jpg" />
        <h4>绵柔纸尿裤</h4>
        <span class="s1">¥88</span>
        <span class="s2">8包减100</span>
      </div>
      <div class="P_detail">
        <img src="../assets/Details/product_img5.jpg" />
        <h4>绵柔纸尿裤</h4>
        <span class="s1">¥88</span>
        <span class="s2">8包减100</span>
      </div>
    </div>
    <div class="product">
      <div class="P_detail">
        <img src="../assets/Details/product_img3.jpg" />
        <h4>绵柔纸尿裤</h4>
        <span class="s1">¥88</span>
        <span class="s2">8包减100</span>
      </div>
      <div class="P_detail">
        <img src="../assets/Details/product_img1.jpg" />
        <h4>绵柔纸尿裤</h4>
        <span class="s1">¥88</span>
        <span class="s2">8包减100</span>
      </div>
      <div class="P_detail">
        <img src="../assets/Details/product_img5.jpg" />
        <h4>绵柔纸尿裤</h4>
        <span class="s1">¥88</span>
        <span class="s2">8包减100</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //返回到商城详情页
    onClickLeft() {
      this.$router.push("/Product");
    }
  }
};
</script>
<style scoped>
/* 整体商品 */
.product {
  display: flex; /*浮动 */
  justify-content: space-around; /*对齐 两端有空白 */
}
/* 商品卡片 */
.P_detail {
  border: 1px solid #ccc;
  padding: 0.3rem;
}
/* 商品里面所有图片的宽度  */
.P_detail img {
  width: 100%;
}
/* 商品标题 */
.P_detail h4 {
  margin: 0.5rem;
}
/* 商品 价格 */
.s1 {
  color: red;
  margin-right: 0.3rem;
}
/* 商品 优惠 */
.s2 {
  color: red;
  border: 0.07rem solid #f00;
  border-radius: 25%;
  /* padding:-0.1rem; */
}

.p1 p {
  margin: 0.45rem 0; /*上下外边距 */
}
/* 图标下的文字 */
.p1 {
  display: flex; /*浮动 */
  justify-content: space-around; /*两端有空白 */
}
/* 搜索框下的图标 */
.icon_img {
  display: flex; /*浮动 */
  justify-content: space-around; /*两端有空白 */
}
/* 图标大小 */
.icon_img img {
  width: 15%;
}

/* 顶部标签 */
.top {
  margin-top: 0.85rem;
  display: flex;
}
.h1 {
  /* margin-left:9rem; */
  margin: 0 8.75rem;
}
</style>