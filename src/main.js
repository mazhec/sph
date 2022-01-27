import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, Message, MessageBox } from 'element-ui'

import VueLazyload from 'vue-lazyload'
import hzw from '@/assets/hzw.gif'

import myPlugins from '@/plugins/myPlugins'

Vue.use(myPlugins, {
  name: 'upper'
})

Vue.use(VueLazyload, {
  loading: hzw
})

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

import '@/plugins/validate'

// 引入路由
import router from './router'

// Vue.config.productionTip = false

// 引入仓库
import store from '@/store'
import * as API from '@/api'
// console.log(API)

// 引入MockServer.js----mock虚拟数据
// eslint-disable-next-line no-unused-vars
import MockServer from '@/mock/mockServer'

import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
