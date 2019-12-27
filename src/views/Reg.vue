<template>
  <div id="contaoner">
    <div id="bll">
      <van-cell-group class="reg">
        <van-field v-model="uname" clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="upwd" type="password" label="密 码" placeholder="请输入密码" />
        <van-field v-model="pass" type="password" label="确认密码" placeholder="请再次确认密码" />
        <van-field v-model="phone" type="password" label="手机号" placeholder="请输入手机号" />
        <van-field v-model="email" type="text" label="邮 箱" placeholder="请输入邮箱" />
      </van-cell-group>
      <van-button class="bn" @click="reg">注册</van-button>
      <p id="imgurl"></p>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      pass: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    reg() {
      //用户名验证
      var reg = /^([a-zA-Z0-9]|[\u4e00-\u9fa5]){3,12}$/;
      if (!reg.test(this.uname)) {
        alert("用户名不正确");
        return;
      }
      //密码验证
      var regupwd = /^[a-zA-Z0-9]{4,18}$/;
      if (!regupwd.test(this.upwd)) {
        alert("密码不能含有非法字符，长度在4-18位");
        return;
      }
      //确认密码
      if (this.upwd != this.pass) {
        alert("两次密码不一致");
        return;
      }
      //验证手机号
      var regphone = /^1[3-9]\d{9}$/;
      if (!regphone.test(this.phone)) {
        alert("手机号码格式不正确");
        return;
      }
      //验证邮箱
      var regEmail = /^\w+@\w+(\.[a-zA-z]{2,3})$/;
      if (!regEmail.test(this.email)) {
        alert("请输入正确的邮箱号");
        return;
      }
      var url = "/reg";
      this.axios
        .post(
          url,
          `uname=${this.uname}&upwd=${this.upwd}&phone=${this.phone}&email=${this.email}`
        )
        .then(result => {
          console.log(result.data);
          if ((result.affectedRows = 0)) {
            alert("用户名或密码错误");
          } else {
            alert("注册成功");
            this.$router.push("/Login");
          }
        });
    }
  }
};
</script>
<style scoped>
.reg {
  padding: 0 3rem;
}
#bll {
  margin-top: 6rem;
}
.do {
  display: flex;
  justify-content: space-between;
}
.hide {
  display: none;
}
.activt {
  display: block;
}
.span {
  width: 40%;
  height: 1rem;
  background: url("../assets/chat/8.png");
  background-repeat: no-repeat;
  margin-top: 0.7rem;
}
.bn {
  width: 75%;
  background-color: rgb(243, 177, 77);
  border-radius: 0.8rem;
  margin-top: 1.5rem;
  margin-left: 3rem;
  color: beige;
}
#imgurl {
  width: 15rem;
  height: 15rem;
  background-image: url("../assets/community/_20191225194515_03.png");
  background-repeat: no-repeat;
  margin-top: 11rem;
  margin-left: 6.5rem;
  margin-bottom: 0;
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





