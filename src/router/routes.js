// 引入路由组件
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'

// // 二级路由组件
// import MyOrder from '@/pages/Center/MyOrder'
// import GroupOrder from '@/pages/Center/GroupOrder'

export default [
  {
    path: '/',
    component: () => import('@/pages/Home'),
  },
  {
    path: '/center',
    component: () => import('@/pages/Center'),
    meta: { show: true },
    name: 'center',
    redirect: '/center/myorder',
    children: [
      {
        path: 'myorder',
        component: () => import('@/pages/Center/MyOrder'),
      },
      {
        path: 'grouporder',
        component: () => import('@/pages/Center/GroupOrder')
      }
    ]
  },
  {
    path: '/paysuccess',
    component: () => import('@/pages/PaySuccess'),
    meta: { show: true },
    name: 'paysuccess'
  },
  {
    path: '/pay',
    component: () => import('@/pages/Pay'),
    meta: { show: true },
    name: 'pay',
    beforeEnter: (to, from, next) => {
      if (from.path === '/trade') {
        next()
      } else {
        next(from.path)
      }
    }
  },
  {
    path: '/home',
    component: () => import('@/pages/Home'),
    meta: { show: true }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: { show: false }
  },
  {
    path: '/shopcart',
    component: () => import('@/pages/ShopCart'),
    meta: { show: true },
    name: 'shopcart'
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
    meta: { show: true },
    name: 'trade',
    beforeEnter: (to, from, next) => {
      if (from.path === '/shopcart') {
        next()
      } else {
        next(from.path)
      }
    }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: { show: false }
  },
  {
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'),
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/detail/:skuId?',
    component: () => import('@/pages/Detail'),
    meta: { show: true },
    name: 'detail'
  },
  {
    path: '/addcartsuccess/',
    component: () => import('@/pages/AddCartSuccess'),
    meta: { show: true },
    name: 'addcartsuccess'
  },
  {
    path: '*',
    redirect: '/home'
  }
]