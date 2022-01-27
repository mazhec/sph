/* eslint-disable no-unused-vars */
import { reqCartList, reqDeleteCart, reqUpdateCheckedById } from "@/api"
const state = {
  cartList: []
}
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  async getCartList({ commit }) {
    const res = await reqCartList()
    if (res.code === 200) commit('GETCARTLIST', res.data)
  },
  async deleteCartListBySkuId({ commit }, skuId) {
    const res = await reqDeleteCart(skuId)
    if (res.code === 200) return 'ok'
    else Promise.reject(new Error('faile'))
    console.log(res)
  },
  async updateCheckedById({ commit }, { skuId, checked}) {
    const res = await reqUpdateCheckedById(skuId, checked)
    if (res.code === 200) return 'ok'
    else Promise.reject(new Error('faile'))
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      const res = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
      PromiseAll.push(res)
    })
    return Promise.all(PromiseAll)
  },
  updateAllCartIsChecked({ dispatch, getters }, checked) {
    let promiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      const res = item.isChecked !== checked ? dispatch('updateCheckedById', { skuId: item.skuId, checked }) : ''
      promiseAll.push(res)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartList: state => state.cartList[0] || {}
}

export default {
  state,
  mutations,
  actions,
  getters
}