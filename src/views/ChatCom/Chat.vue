<template>
  <div id="container">
    <!-- 顶部图表 -->
    <div class="all">
    <img class="d2" src="../../assets/chat/11.png" >  
    <p class="size">分享</p>
    <img class="d1" src="../../assets/chat/10.png" >                                                                                                                                                                                                                       
    </div>
  <!-- 分享图片 -->
  <div class="frist">
    <img class="tu" src="../../assets/chat/12.jpg" >
  </div>
  <div class="frist">
    <img class="tu" src="../../assets/chat/14.jpg" >
  </div>
  <div class="frist">
  <img class="tu" src="../../assets/chat/18.jgp.jpg" >
  </div>
  <div class="frist">
  <img class="tu" src="../../assets/chat/19.jpg" >
  </div>
  <div class="frist">
  <img class="tu" src="../../assets/chat/20.jpg" >
  </div>
  <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "../pages/footer";
export default {
  components: {
    HomeFooter
  },
}
</script>
<style scoped>
.all{
  display: flex;
  justify-content:space-between;
}
.tu +.tu{
width:88%;
height:8rem;
border:1.5rem solid white;
}
.tu{
width:88%;
height:8rem;
border-top:1.5rem solid white;
border-right:1.5rem solid white;
border-left:1.5rem solid white;
}
.d1{
  width:1.4rem;
  height:1.4rem;
  margin-right:1rem;
  margin-top:1.3rem;
}
.d2{
  width:1.4rem;
  height:1.4rem;
  margin-left:1rem;
  margin-top:1.3rem;
}
.size{
  font-size:1rem;
  margin-top:1.5rem;
  font-weight: 600;
}
</style>

