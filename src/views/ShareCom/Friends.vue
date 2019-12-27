<template>
  <div id="container"> 
   <div class="con" v-for="(item,i) of list.data" :key="i"> <!-- 整体内容 -->
    <div class="left">  <!-- 左边头像  -->
   <img class="width" :src="require('../../assets/chat/28.jpg')">
    </div>
    <div class="right"> <!-- 右边整体内容 -->
     <div class="center">
      <p class="mm">{{item.name}}</p>
      <p class="ss">{{item.time}}</p>
      </div>
      <div class="int">{{msgg}}</div>
        <div class="contai">
          <img class="img" :src="require('../../assets/chat/d.jpg')">
          <img class="img" :src="require('../../assets/chat/e.jpg')">
          <img class="img" :src="require('../../assets/chat/f.jpg')">
          <img class="img" :src="require('../../assets/chat/g.jpg')">
          <img class="img" :src="require('../../assets/chat/h.jpg')">
          <img class="img" :src="require('../../assets/chat/i.jpg')">
      </div>
    </div>
   </div>
  </div>
</template>
<script>
import mess from "./messagelist.json"
import bus from '../../components/bus.js'
export default {
  data(){
    return{
      list:mess, 
      msgg:'宝宝的百天照,走过路过记得点赞哦'
    }
  },
  beforeDestroy(){
    bus.$off("msg")
  },
 props:["name"],
  created(){
      bus.$on('msg',data=>{
        this.msgg=data
      }
      )
    }
}
</script>

<style scoped>
.con{
  display:flex;
  justify-content: space-between;
}
.int{
  margin:0;
  text-align:left;
  margin-bottom:0.34rem;
  font-size:1rem;
  font-weight: 500;


}
.width{
  width:2rem;
  height:2rem;
}
.contai{
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  padding-right:0.7rem;
}
.left{
  margin:0.6rem;
}
.center{
  display:flex;
  justify-content: space-around;
}
.mm{
  /* margin-right:13rem; */
  font-weight:400;
  margin:1rem 13rem 0.5rem 0rem;
  text-align:left;
}
.ss{
margin-right:0.5rem;
font-size:0.8rem;
}
.img{
  width:6rem;
  height:6rem;
  border:0.2rem solid white;
}
</style>



