import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// 导入所有vant 所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
//引入axios
import axios from "axios";
Vue.use(Vant);
//配置服务端基础地址
axios.defaults.baseURL = "http://127.0.0.1:4000/"
//配置发放请求保存session信息
axios.defaults.withCredentials = true;
//将axios注册vue
Vue.prototype.axios = axios;
Vue.config.productionTip = false
// 引入vuex
import Vuex from "vuex"
// 注册vuex
Vue.use(Vuex)
var store = new Vuex.Store({
  state: { num: 21 },
  mutations: {
    addNum(state) { state.num++ },
    subNum(state) { state.num-- }
  },
  getters: {
    getAge(state) { return state.num }
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  store
}).$mount('#app')
