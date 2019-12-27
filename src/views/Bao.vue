<template>
  <div>
    <h3>欢迎进入</h3>
    <img src="../assets/community/宝宝面_03.png" alt="">
  </div>
</template>
<script>
export default {
  
  created() { 
    setTimeout(()=>{
      this.$router.push('/Reg')
    },2000)
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
</style>