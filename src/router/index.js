/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import store from '@/store'

// 使用插件
Vue.use(VueRouter)



// 配置路由
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(async(to, from, next) => {
  const token = store.state.user.token
  const name = store.state.user.userInfo.name
  if (!token) {
    const toPath = to.path
    if (toPath.indexOf('/center') !== -1) {
      next(`/login?redirect=${toPath}`)
    }else {
      next()
    }
  } else {
    if (to.path === '/login') next('/')
    else {
      if (name) next()
      else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch(error) {
          await store.dispatch('logout')
        }
      }
    }
  }
})

export default router