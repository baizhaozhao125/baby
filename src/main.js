import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入样式重置
// import './style/sty.css';
// 导入所有vant 所有组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
