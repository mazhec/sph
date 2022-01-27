import { reqGetSearchInfo } from '@/api'
// search 模块的小仓库
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    console.log('searchList:', searchList)
    state.searchList = searchList
  }
}
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params={}) {
    const res = await reqGetSearchInfo(params)
    console.log(res)
    if (res.code === 200) commit('GETSEARCHLIST', res.data)
  }
}
const getters = {
  goodsList: state => state.searchList.goodsList || [],
  trademarkList: state => state.searchList.trademarkList || [],
  attrsList: state => state.searchList.attrsList || []
}

export default {
  state,
  mutations,
  actions,
  getters
}