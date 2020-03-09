import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './assets/style/reset.less'
import './assets/style/common.less'
import './assets/style/iconfont/iconfont.css'

import { Menu, Progress} from 'ant-design-vue'
Vue.use(Menu)

import { Upload, Dialog } from 'element-ui';
Vue.use(Upload)
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

