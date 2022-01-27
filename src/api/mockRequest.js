import axios from "axios"

import nprogress from "nprogress"
import 'nprogress/nprogress.css'

// 利用axios对象的方法create，创建一个axios实例
const request = axios.create({
  // 配置对象
  baseURL: '/mock',
  // 请求超时时间
  timeout: 10000
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use(config => {
  nprogress.start()
  return config
})

request.interceptors.response.use(res => {
  nprogress.done()
  return res.data
}, error => {
  console.log(error)
  return Promise.reject(new Error('faile'))
})

export default request
