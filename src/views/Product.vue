<template>
  <div class="parent">
    <!-- 两个标签 -->
    <van-tabs v-model="activeName">
      <van-tab title="社区" name="a">内容 1</van-tab>
      <van-tab title="优品" name="b">
        <!-- 轮播图 -->
        <div class="swipe">
          <van-swipe :autoplay="3000" indicator-color="white">
            <!-- <van-swipe-item>
              <img src="../assets/Details/swipe1.jpg" alt />
            </van-swipe-item>-->
            <van-swipe-item>
              <img src="../assets/Details/swipe2.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/Details/swipe3.jpg" alt />
            </van-swipe-item>
            <!-- <van-swipe-item>
              <img src="../assets/Details/swipe4.jpg" alt />
            </van-swipe-item>-->
          </van-swipe>
        </div>
        <!-- 导航图标01 -->
        <div class="icon">
          <img src="../assets/Details/icon1.png" alt />
          <img src="../assets/Details/icon2.png" alt />
          <img src="../assets/Details/icon3.png" alt />
          <img src="../assets/Details/icon4.png" alt />
          <img src="../assets/Details/icon5.png" alt />
        </div>
        <div class="icon_p">
          <p>纸尿裤</p>
          <p>喂养用品</p>
          <p>玩具早教</p>
          <p>童装童鞋</p>
          <p>最新上架</p>
        </div>
        <!-- 导航02 -->
        <div class="icon">
          <img src="../assets/Details/icon6.png" alt />
          <img src="../assets/Details/icon7.png" alt />
          <img src="../assets/Details/icon8.png" alt />
          <img src="../assets/Details/icon9.png" alt />
          <img src="../assets/Details/icon10.png" alt />
        </div>
        <div class="icon_p">
          <p>睡袋棉品</p>
          <p>内衣女装</p>
          <p>护肤美妆</p>
          <p>居家生活</p>
          <p>爆款榜单</p>
        </div>
        <van-notice-bar
          text="神马宝贝计划 妈咪&宝宝 吃穿玩用 全部5折起 超值抢购 快快来抢 妈妈在也不用我买不起纸尿裤啦"
          left-icon="volume-o"
        />
        <!-- 商品列表 -->
        <div class="product">
          <div class="tabName">
            <van-tabs v-model="active">
              <van-tab title="孕期">
                <!-- 商城图片 -->
                <div class="p_list">
                  <div class="p_item" v-for="(item,i) of row" :key="i">
                    <!-- 商品图片 -->
                    <img :src="item.pic" />
                    <!-- 商品名称 -->
                    <h4>{{item.title}}</h4>
                    <span>{{item.subtitle}}</span>
                    <h5>¥{{item.price}}</h5>
                  </div>
                </div>
                <van-button @click="loadMore" type="primary" size="large">点击加载更多</van-button>
              </van-tab>
              <van-tab ellipsis="false" title="0-12个月">
                <!-- 商城图片 -->
                <div class="p_list">
                  <div class="p_item">
                    <!-- 商品图片 -->
                    <img src="../assets/Details/product_img3.jpg" />
                    <!-- 商品名称 -->
                    <h4>绵柔纸尿裤/拉拉裤</h4>
                    <span>1片吸干6次尿 秒吸秒干</span>
                    <h5>¥88</h5>
                  </div>
                </div>
                <van-button @click="loadMore" type="primary" size="large">点击加载更多</van-button>
              </van-tab>
              <van-tab title="1-3岁">
                <!-- 商城图片 -->
                <div class="p_list">
                  <div class="p_item">
                    <!-- 商品图片 -->
                    <img src="../assets/Details/product_img3.jpg" />
                    <!-- 商品名称 -->
                    <h4>1</h4>
                    <span>2</span>
                    <h5>¥88</h5>
                  </div>
                </div>
                <van-button @click="loadMore" type="primary" size="large">点击加载更多</van-button>
              </van-tab>
              <van-tab title="3岁+">
                <!-- 商城图片 -->
                <div class="p_list">
                  <div class="p_item" >
                    <!-- 商品图片 -->
                    <img src="../assets/Details/product_img3.jpg" />
                    <!-- 商品名称 -->
                    <h4>绵柔纸尿裤/拉拉裤</h4>
                    <span>1片吸干6次尿 秒吸秒干</span>
                    <h5>¥88</h5>
                  </div>
                </div>
                <van-button @click="loadMore" type="primary" size="large">点击加载更多</van-button>
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <img id="red" @click="red" src="../assets/Details/red.png" />
    <img id="shop" @click="shop" src="../assets/Details/shop.png" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pno:0,
      row:[],
      activeName: "b",
      active: 0
    };
  },
  created:function(){
    this.loadMorer()
  },
  methods: {
    // 加载更多
    loadMore() {},
    // 跳转到购物车页面
    shop() {},
    // 红包消息提示
    red() {
      this.$toast("恭喜领取成功,快去花钱吧");
    },
     loadMorer(){
      // 创建变量URL
      var url="/product"
      //创建变量obj
      this.pno++
      var obj={pno:this.pno}
      //发送ajax请求
      this.axios.get(url,{params:obj}).then(res=>{
        var list1=res.data.data
        this.row=list1
        console.log(this.row)
        // var rows=this.list.concat(res.data.data)
        // this.list =rows
        // this.list=res.data.data
     })
     }
  }
};
</script>
<style scoped>
/* 红包图标 */
#red {
  position: fixed;
  bottom: 7rem;
  right: 1rem;
}
/* 购物车按钮 */
#shop {
  position: fixed;
  bottom: 1.85rem;
  right: 1rem;
}
/* 商城 父元素 product*/

/* 商城详细描述样式 */
.p_list {
  /* 弹性布局 子元素两端对齐 */
  display: flex;
  flex-wrap: wrap; /*子元素换行 */
  justify-content: space-between;
  margin-top: 0.5rem;
}
/* 一个商品 */
.p_item {
  width: 48%; /*一半 */
  border: 1px solid #ccc; /*边框 */
  border-radius: 5px; /*圆角 */
  padding: 2px; /*加点内边距 */
  margin: 2px 0; /*加点外边距 */
  display: flex;
  flex-direction: column; /*按列排 */
  min-height: 257px;
  align-items: flex-start;
}
/* 商品里的图片 */
.p_item img {
  width: 100%;
}
/* 商城标签 */
/* .tabName {
  float: right;
  margin-top: -2rem;
  margin-right: 0.8rem;
} */
/* 导航图标样式 充满屏幕 */
.swipe img {
  width: 100%;
}
.icon {
  /* 弹性 */
  display: flex;
  /* 子元素对齐 两端有空白*/
  justify-content: space-around;
}
.icon_p {
  display: flex;
  justify-content: space-around;
  font-size: 0.9rem;
}
.icon_p p {
  margin: 0.5rem 0;
}
</style>