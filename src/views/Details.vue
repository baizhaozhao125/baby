<template>
  <div>
    <div v-for="(item,i) of list1" :key="i">
      <van-nav-bar
        title="商品"
        left-arrow
        style="position:fixed; top:0;
            width:100%;"
        @click-left="goBack"
      />
      <div class="det">
        <!-- 使用轮播 并关闭autoplay -->
        <van-swipe indicator-color="white">
          <van-swipe-item>
            <img :src="item.pic" alt="#" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="item.uic" alt="#" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="item.qic" alt="#" />
          </van-swipe-item>
        </van-swipe>
        <div class="desc">
          <h3>{{item.title}}</h3>
          <span class="s1">{{item.subtitle}}</span>
          <div class="title">
            <p class="p1">直供价{{item.price}}</p>
            <p style="text-decoration: line-through;">¥178</p>
          </div>
        </div>
      </div>
      <!-- 单元格 有点击事件 跳转 -->
      <van-cell style="background-color:#FFF0F5;" is-link value="新人首单包邮 满200立减50" />
      <van-cell title="优惠" is-link value="2包减10,4包减50" />
      <van-cell title="领券" is-link value="20元无门槛券;" />
      <van-cell title="服务" is-link value="满58包邮·30天退货" />
      <!-- 评价 不会写暂时留空-->
      <!-- 推荐 -->
      <h5 style="margin:0.5rem 0 0.5rem 0.4rem;">你可能还需要</h5>
      <div class="p_list">
        <div class="p_item" v-for="(item,i) of list " :key="i">
          <img src="../assets/Details/product_img3.jpg" />
          <p>婴儿干湿纯棉巾</p>
          <p>¥59</p>
        </div>
      </div>
      <div style="margin-bottom:2.9rem;"></div>
      <van-goods-action style="z-index:10">
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: "../assets/Details/product_img1.jpg",
          price: "¥88"
        },
        {
          img: "../assets/Details/product_img1.jpg",
          price: "¥88"
        },
        {
          img: "../assets/Details/product_img1.jpg",
          price: "¥88"
        },
        {
          img: "../assets/Details/product_img1.jpg",
          price: "¥88"
        },
        {
          img: "../assets/Details/product_img1.jpg",
          price: "¥88"
        },
        {
          img: "../assets/Details/product_img1.jpg",
          price: "¥88"
        }
      ],
      list1: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    goBack() {
      this.$router.push("/Product");
    },
    loadMore() {
      // 创建变量URL
      var url = "/details";
      //创建变量obj
      var id = this.$route.query.id;
      console.log(id);
      var obj = { did: id };
      //发送ajax请求
      this.axios
        .get(url, { params: obj })
        .then(res => {
          this.list1 = res.data.data;
          console.log(this.list1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
/* 推荐 需要更多 */
.p_list {
  /* 弹性 */
  display: flex;
  /* 两端有空白 */
  justify-content: space-around;
  /* 子元素换行 */
  flex-wrap: wrap;
}

.p_item {
  width: 31%; /**/
  border-radius: 5%; /*圆角 */
  padding: 0.2px; /*加点内边距 */
  margin: 0.02rem 0; /*加点外边距 */
}
.p_item img {
  width: 100%;
  border-radius: 10%;
}
.p_item p {
  margin: 0.2rem 0;
}
.p_item p:last-child {
  color: red;
}
/* 标题以及价格 */
.desc {
  border: 1px solid #ccc;
}
.title {
  display: flex;
}
.desc h3 {
  margin: 0.5rem 0.3rem;
}
.s1 {
  color: #ccc;
}
.p1 {
  color: red;
  font-size: 1.5rem;
  margin: 0.5rem 0.3rem;
}
/* 轮播图大小 */
.det img {
  width: 100%;
}
</style>