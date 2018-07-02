import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/404'
import Login from '@/view/login'
import Index from '@/view/index'
import Home from '@/view/home/'
import GoodsManage from '@/view/goodsManage/'
import AddGoods from '@/view/goodsManage/add'
import OrderList from '@/view/orderManage/list'
import Aftersale from '@/view/orderManage/aftersale'
import User from '@/view/personalInfo/'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', redirect: '/admin/' },
    {
      path: '/admin/',
      component: Index,
      name: '',
      children: [
        {
          path: '',
          name: '首页',
          component: Home
        },
        {
          path: '/admin/goodslist',
          name: '商品列表',
          component: GoodsManage
        },
        {
          path: '/admin/addgoods',
          name: '添加商品',
          component: AddGoods
        },
        {
          path: '/admin/orderlist',
          name: '订单列表',
          component: OrderList
        },
        {
          path: '/admin/aftersale',
          name: '售后列表',
          component: Aftersale
        },
        {
          path: '/admin/user',
          name: '个人信息',
          component: User
        }
      ]
    },
    // {
    //   path: '/goodsmanage',
    //   component: Index,
    //   children: [
    //     {
    //       path: '/goodslist',
    //       name: '商品列表',
    //       component: GoodsManage
    //     },
    //     {
    //       path: '/addgoods',
    //       name: '添加商品',
    //       component: AddGoods
    //     }
    //   ]
    // },
    // {
    //   path: '/ordermanage',
    //   component: Index,
    //   children: [
    //     {
    //       path: '/orderlist',
    //       name: '订单列表',
    //       component: OrderList
    //     },
    //     {
    //       path: '/aftersale',
    //       name: '售后列表',
    //       component: Aftersale
    //     }
    //   ]
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    { path: '*', component: NotFound }
  ]
})
