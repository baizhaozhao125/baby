<template>
  <div>
    <van-nav-bar
      title="商品"
      left-arrow
      style="position:fixed; top:0;
            width:100%;"
    />
    <div class="d_img">
      <img src="../assets/Details/product_img3.jpg" alt />
      <img src="../assets/Details/product_img3.jpg" alt />
      <img src="../assets/Details/product_img3.jpg" alt />
      <img src="../assets/Details/product_img3.jpg" alt />
      <img src="../assets/Details/product_img3.jpg" alt />
      <img src="../assets/Details/product_img3.jpg" alt />
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<style scoped>
.d_img img {
  width: 100%;
}
</style>