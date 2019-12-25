<template>
  <div id="container">
    <!-- 背景图 -->
    <div class="bg">
      <table></table>
      <div class="heager">
      <div class="into">
      <img  src='../../assets/chat/3.png'>
      <p class="fai">宝宝</p>
      </div>
      <img class="cai" src="../../assets/chat/1.png"  @click="change">
    </div>
    <div class="secound">
      <img class="secound-left" src="../../assets/chat/2.png">
      <div class="secound-right">
        <span class="name">{{name}}</span>
        <p class="age">出生第{{age}}天</p>
      </div>
    </div>
    </div>
    <!-- 页面标题 -->
    <div class="title">
      <img class="yell" src="../../assets/chat/5.png" >
      <p class="la">分享宝宝的精彩瞬间</p>
    </div>
    <friends :name="name"></friends>
    <!-- <home-footer></home-footer> -->
  </div>
</template>
<script>
import friends from "./Friends.vue"
import HomeFooter from "../pages/footer";
export default {
  data(){
    return{
      name:"小仙女",
      age:4
    }
  },
  components:{friends,HomeFooter},
  methods:{
    change(){
    this.$router.push("/Shar")
    }
  
  }
}
</script>

<style scoped>
#container{
  width:100%;
}
p{
  margin:0
}
.bg{
 background-image:url("../../../public/img/2.jpg");
 width:100%;
 height:13rem;
 color: #000;
 background-size:cover;
}
.into{
  display:flex;
 }
.fai{
  padding-top:0.42rem;
}
.cai{
margin-right:0.3rem;
}
.heager{
  margin:0.5rem;
  display:flex;
  justify-content:space-between;
}
.secound{
display:flex;
justify-content:flex-start;
margin-left:0.9rem;
margin-top:1.5rem;
}
.secound-right{
  margin-left:0.8rem;
  text-align:left;
}
.name{
  font-size:1rem;
   color:rgba(27, 41, 43, 0.596);
   font-weight: 800;
}
.age{
  margin-top:0.4rem;
  font-size:0.7rem;
  color:rgba(27, 41, 43, 0.596);
  font-weight: 400;
}
.title{
  display:flex;
  height:2rem;
  background:rgb(243, 179, 240);
}
.la{
  margin-left:0.9rem;
  padding-top:0.4rem;
  color:rgb(105, 91, 84);

}
.yell{
  margin-left:0.6rem;
}
</style>



