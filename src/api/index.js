import request from "./request"
import mockRequest from "./mockRequest"

// 三级联动接口
export const reqCategoryList = () => request.get('/product/getBaseCategoryList')

export const reqGetBannerList = () => mockRequest.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequest.get('/floor')

export const reqGetSearchInfo = params => request({
  url: '/list',
  method: 'post',
  data: params
})

// 获取产品详情信息的接口
export const reqGoodsInfo = skuId => request.get(`/item/${skuId}`)

// 将产品添加到购物车中（或者更新一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取购物车列表
export const reqCartList = () => request.get(`/cart/cartList`)

// 删除购物产品
export const reqDeleteCart = skuId => request.delete(`cart/deleteCart/${skuId}`)

// 修改商品的选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => request.get(`cart/checkCart/${skuId}/${isChecked}`)

// 获取验证码
export const reqGetCode = phone => request.get(`user/passport/sendCode/${phone}`)

// 注册
export const reqUserRegister = data => request.post(`/user/passport/register`, data)

// 登录
export const reqUserLogin = data => request.post(`/user/passport/login`, data)

// 获取用户信息【带着用户token】
export const reqUserInfo = () => request.get(`/user/passport/auth/getUserInfo`)

// 退出登录
export const reqLogout = () => request.get(`/user/passport/logout`)

// 获取用户地址信息
export const reqAddressInfo = () => request.get(`/user/userAddress/auth/findUserAddressList`)

// 获取商品清单
export const reqOrderInfo = () => request.get(`/order/auth/trade`)

// 提交订单接口
export const reqSubmitOrder = (tradeNo, data) => request.post(`/order/auth/auth/submitOrder?tradeNo=${tradeNo}`, data)

// 获取支付信息
export const reqPayInfo = orderId => request.get(`/payment/weixin/createNative/${orderId}`)

// 获取支付订单状态
export const reqPayStatus = orderId => request.get(`payment/weixin/queryPayStatus/${orderId}`)

// 获取个人中心的数据
export const reqMyOrderList = (page, limit) => request.get(`/order/auth/${page}/${limit}`)
