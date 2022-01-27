/* eslint-disable no-unused-vars */
import { reqAddressInfo, reqOrderInfo } from "@/api"
const state = {
  address: [],
  orderInfo: {}
}
const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const actions = {
  async getUserAddress({ commit }) {
    const res = await reqAddressInfo()
    if (res.code === 200) {
      commit('GETUSERADDRESS', res.data)
    }
  },
  async getOrderInfo({ commit }) {
    const res = await reqOrderInfo()
    console.log(res)
    if (res.code === 200) {
      commit('GETORDERINFO', res.data)
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