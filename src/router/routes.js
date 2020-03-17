// 引入路由组件
import Login from '../compentens/login/login'
import Home from '../compentens/home/home'
import RollOver from '../compentens/rollOver/rollOver'
import History from '../compentens/history/history'
import Shop from '../compentens/shop/shop'
import Detail from '../compentens/detail/detail'
import Personal from '../compentens/personal/personal'
import Loan from '../compentens/loan/loan'
// 并暴露路由的数组配置
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }, {
    path: '/rollOver',
    component: RollOver
  }, {
    path: '/history',
    component: History
  }, {
    path: '/shop',
    component: Shop
  },{
    path:'/detail',
    component:Detail
  },{
    path:'/personal',
    component:Personal
  },{
    path:"/Loan",
    component:Loan
  },
    { path: '/', redirect:'/home'}
  
]
