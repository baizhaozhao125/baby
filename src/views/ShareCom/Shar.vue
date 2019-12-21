<template>
  <div id="container">
    <div class="fa">
    <a href="" @click="clear">取消</a>
    <van-button type="primary" @click="open">发表</van-button>
    </div>
    <input type="text" class="va" v-model="text">
    <div class="sh">
  <van-uploader  v-model="fileList" multiple :max-count="9"/>
  </div>
  <div class="uu">
  <van-cell-group>
  <van-cell title="所在位置" icon="location-o" value="" is-link> </van-cell >
  <van-cell title="提醒谁看" icon="shop-o" value="" is-link></van-cell >
   <van-cell title="谁可以看" icon="shop-o" value="公开" is-link></van-cell >
</van-cell-group>
  </div>
  </div>
</template>
<script>
import bus from '../../components/bus.js'
export default {
   data() {
    return {
       fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      ],
      text:"这一刻的想法..."
    }
  },
   methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    clear(){
      this.$router.push('/Share')
    },
    open(){
       bus.$emit('msg',this.text)
        this.$router.push('/Share')
        
    }
  }
}
</script>
<style scoped>
.uu{
  margin-top:5rem;
}
a{
  color: #000;
  text-decoration:none;
}
.sh{
  margin-top:4.5rem;
  margin-bottom:6rem;
}
.fa{
  margin:1rem 0.3rem 2rem 0.3rem;
  display: flex;
  justify-content: space-between;
}
.va{
  width:100%;
  border:0;
 padding-left:0.7rem;
 font-size:1.13rem;
}
</style>
