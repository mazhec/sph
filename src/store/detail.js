import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
import { getUUID } from '@/utils/uuid_token'
const state = {
  goodsInfo: {},
  // 游客临时身份
  uuid_token: getUUID()
}
const mutations = {
  GETGOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo
  }
}
const actions = {
  async getGoodsInfo({ commit }, skuId) {
    const res = await reqGoodsInfo(skuId)
    if (res.code === 200) commit('GETGOODSINFO', res.data)
  },
  // 将产品id添加到购物车中
  // eslint-disable-next-line no-unused-vars
  async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
    const res = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  // 路径导航简化的数据
  categoryView: state => state.goodsInfo.categoryView || {},
  // 简化产品信息的数据
  skuInfo: state => state.goodsInfo.skuInfo || {},
  // 产品售卖属性的简化
  spuSaleAttrList: state => state.goodsInfo.spuSaleAttrList || []
}

export default {
  state,
  mutations,
  actions,
  getters
}