import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api'
// search 模块的小仓库
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async categoryList({ commit }) {
    const res = await reqCategoryList()
    if (res.code === 200) {
      commit('GETCATEGORYLIST', res.data)
    }
  },
  async getBannerList({ commit }) {
    const res = await reqGetBannerList()
    if (res.code === 200) commit('GETBANNERLIST', res.data)
  },
  async getFloorList({ commit }) {
    const res = await reqFloorList()
    if (res.code === 200) commit('GETFLOORLIST', res.data)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}