<template>
  <div id="container">
    <!-- 顶部图表 -->
    <div class="all">
      <img class="d2" src="../../assets/chat/11.png" />
      <p class="size">分享</p>
      <img class="d1" src="../../assets/chat/10.png" />
    </div>
    <!-- 分享图片 -->
    <div>
      <div class="frist">
        <a href="https://m.jd.com/">
          <img class="tu" src="../../assets/chat/12.jpg" />
        </a>
      </div>
      <div class="frist">
        <a href="https://m.jd.com/">
          <img class="tu" src="../../assets/chat/14.jpg" />
        </a>
      </div>
      <div class="frist">
        <a href="https://m.jd.com/">
          <img class="tu" src="../../assets/chat/18.jgp.jpg" />
        </a>
      </div>
      <div class="frist">
        <a href="https://m.jd.com/">
          <img class="tu" src="../../assets/chat/19.jpg" />
        </a>
      </div>
      <div class="frist">
        <a href="https://m.jd.com/">
          <img class="tu" src="../../assets/chat/20.jpg" />
        </a>
      </div>
    </div>
    <!-- 加空div显示页面全部的内容 -->
    <div style="margin-top:3rem;"></div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "../pages/footer";
export default {
  components: {
    HomeFooter
  }
};
</script>
<style lang="scss" scoped>
.all{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-top: 0.5rem;
  width:100%;
}
.all img{
  width:6%;
  height:6%
}
.all p{
  font-size: 1.2rem;
  margin:0;padding:0;
}
.tu {
  width: 19rem;
  height: 9.5rem;
  padding:0.5rem 2rem;
  margin-left:1.5%
}
</style>

