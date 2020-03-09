import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';             //引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';
import verify from '../static/js/verify.min.js';//引入verif验证码组件
// import reveal from '../static/js/reveal.js';
import $ from 'jquery'					//引入jq


Vue.prototype.verify = verify;   // 引入verif验证码组件
// Vue.prototype.reveal = reveal;   // 引入verif验证码组件
Vue.use(ElementUI);  //注册element组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
