<template>
  <div id="container">
    <div id="all">
      <h2>登 录</h2>
      <van-cell-group class="lo">
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
    <p id="imgurl"></p>
    <div class="foot"></div>
    <div class="foot1"></div>

    <!-- <div class="imgg"></div> -->
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
        // alert("请输入用户名为3-8位字母或汉字");
        this.$messagebox("请输入用户名为3-8位字母或汉字");
        return;
      }
      if (!reg2.test(this.upwd)) {
        // alert("请输入密码为4-13位字母或符号");
        this.$messagebox("请输入密码为4-13位字母或符号");
        return;
      }
      var url = "/login";
      var obj = { uname: this.uname, upwd: this.upwd };
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == -1) {
          // alert("用户名或密码错误");
          this.$messagebox("用户名或密码错误");
        } else {
          // alert("登录成功");
          this.$messagebox("登陆成功");
          this.$router.push("/Product");
        }
      });
    }
  }
};
</script>
<style scoped>
.lo {
  padding: 0 1.5rem;
}
h2 {
  position: relative;
  top: -7rem;
  color: rgb(104, 80, 80);
}
#all {
  text-align: center;
  position: relative;
  top: 11rem;
  /* background-color: black; */
}
.btn {
  width: 75%;
  background-color: rgb(245, 180, 83);
  border-radius: 0.8rem;
  margin-top: 1.5rem;
  color: #fff;
}
a {
  color: darkred;
  font-size: 0.3rem;
  margin-top: 3rem;
}
#imgurl {
  width: 15rem;
  height: 15rem;
  background-image: url("../assets/community/_20191225194515_03.png");
  background-repeat: no-repeat;
  margin-top: 18rem;
  margin-left: 6.5rem;
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