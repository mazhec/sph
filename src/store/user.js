/* eslint-disable no-unused-vars */
import { reqGetCode, reqUserLogin, reqUserRegister, reqUserInfo, reqLogout } from "@/api"
const state = {
  code: '',
  token: sessionStorage.getItem('SPHTOKEN') || '',
  userInfo: {}
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    console.log(token)
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  LOGOUT(state) {
    state.token = ''
    state.userInfo = {}
  }
}
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    const res = await reqGetCode(phone)
    console.log(res)
    if (res.code === 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    const res = await reqUserRegister(user)
    // console.log(res)
    if (res.code === 200) return 'ok'
    else return Promise.reject(new Error('faile'))
  },
  async userLogin({ commit }, user) {
    const res = await reqUserLogin(user)
    if (res.code === 200) {
      commit('USERLOGIN', res.data.token)
      sessionStorage.setItem('SPHTOKEN', res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async getUserInfo({ commit }) {
    const res = await reqUserInfo()
    if (res.code === 200) {
      commit('GETUSERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async logout({ commit }) {
    const res = await reqLogout()
    if (res.code === 200) {
      commit('LOGOUT')
      sessionStorage.removeItem('SPHTOKEN')
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}