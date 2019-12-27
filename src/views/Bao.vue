<template>
  <div>
    <h3>欢迎进入</h3>
    <img src="../assets/community/宝宝面_03.png" alt="">
    <div class="foot"></div>
  </div>
</template>
<script>
export default {
  
  created() { 
    setTimeout(()=>{
      this.$router.push('/Login')
    },3000)
  }
}
  
</script>
<style scoped>
  h3{
    color:rgb(42, 201, 201);
    text-align: center;
    text-shadow:4px 4px 4px rgb(241, 195, 68);
    position: relative;
    top:2rem
  }
  img{
    width:50%;
    margin-left:6.5rem;
    margin-top:20rem;
  }
  .foot {
  position: fixed;
  top: 38rem;
  width: 100%;
  height: 4rem;
  background: #fff;
  z-index: 3;
}
.foot1 {
  position: fixed;
  top: 63.5rem;
  width: 100%;
  height: 4rem;
  background: #fff;
  z-index: 3;
}
#container {
  position: relative;
}
</style>