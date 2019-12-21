<template>
  <div id="container">
  <div id="all">
  <van-cell-group>
  <van-field
    v-model="username" 
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('请输入2-8字母或中文汉字')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
   
  />
</van-cell-group>
<van-cell-group>
  <van-field
  
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
  <van-button id="btn" @click="btn" style="">登 录</van-button><br>
   <a href="">忘记密码?</a> <a @click="zhuce" href="">注册</a> 
</van-cell-group>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods: {
   btn(){
      var reg1=/^([a-zA-Z]|[\u4e00-\u9fa5]){2,8}$/
      var reg2=/^[A-Z]([a-zA-Z\d\.\?]){6,12}$/
      if(!reg1.test(this.username)){
          alert("用户名请输入2-8字母或中文汉字")    
          return;     
      };
      if(!reg2.test(this.password)){
        alert("密码请输入以大写字母开头7-13位字母或特殊符号")
        return;
      }
      if(reg1.test(this.username)&&reg2.test(this.password)){
        alert("登陆成功")
        this.$router.push('/Community')
      }
    }
   
  },
  zhuce(){
    this.$router.push('/Reg')
  }
}
</script>
<style scoped>
  #all{
     text-align: center;
      margin-top:11rem;
      background-color: black
  }
  #btn{
    width:75%;
    background-color:rgb(49, 201, 82);
    border-radius:0.8rem;
    margin-top:1.5rem;

  }
  a{
    color:darkred;
    font-size:0.3rem;
  }
</style>