<template>
  <div id="container">
    <div id="all">
      <van-cell-group>
        <van-field
          v-model="uname"
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('请输入2-8字母或中文汉字')"
        />
        <van-field v-model="upwd" type="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
      <van-cell-group>
        <van-button class="btn" @click="btn">登 录</van-button>
        <br />
        <a href>忘记密码?</a>
        <a @click="reg">注册</a>
      </van-cell-group>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    reg() {
      this.$router.push("/Reg");
    },
    btn() {
      var reg1 = /^([a-zA-Z]|[\u4e00-\u9fa5]){3,8}$/;
      var reg2 = /^[a-zA-Z\d\.\?]{4,12}$/;
      if (!reg1.test(this.uname)) {
        alert("请输入用户名为3-8位字母或汉字");
        return;
      }
      if (!reg2.test(this.upwd)) {
        alert("请输入密码为4-13位字母或符号");
        return;
      }
      var url = "/login";
      var obj = { uname: this.uname, upwd: this.upwd };
      console.log(obj);
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res);
        if (res.data.code == -1) {
          alert("用户名或密码错误");
        } else {
          alert("登录成功");
          this.$router.push("/Share");
        }
      });
    }
  }
};
</script>
<style scoped>
#all {
  text-align: center;
  margin-top: 11rem;
  background-color: black;
}
.btn {
  width: 75%;
  background-color: rgb(49, 201, 82);
  border-radius: 0.8rem;
  margin-top: 1.5rem;
  color: #fff;
}
a {
  color: darkred;
  font-size: 0.3rem;
}
.foot {
  position: fixed;
  top: 38rem;
  width: 100%;
  height: 4rem;
  background:#fff;
  z-index:3;
}
#container{position: relative;}
</style>