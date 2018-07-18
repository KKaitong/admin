import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/404'
import Login from '@/view/login'
import Index from '@/view/index'
import Home from '@/view/home/'
// import GoodsManage from '@/view/goodsManage/'
import GoodsList from '@/view/goodsManage/list'
import AddGoods from '@/view/goodsManage/add'
import OrderList from '@/view/orderManage/list'
import Aftersale from '@/view/orderManage/aftersale'
import User from '@/view/personalInfo/'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/',
    //   component: Index,
    //   name: '',
    //   children: [
    //     {
    //       path: '',
    //       name: '首页',
    //       component: Home
    //     },
    //     {
    //       path: 'goods',
    //       component: GoodsManage,
    //       children: [
    //         {path: '', name: '商品列表', component: GoodsList},
    //         {path: 'add', name: '添加商品', component: AddGoods}
    //       ]
    //     },
    //     {
    //       path: 'order',
    //       component: GoodsManage,
    //       children: [
    //         {path: 'orderlist', name: '订单列表', component: OrderList},
    //         {path: 'aftersale', name: '售后列表', component: Aftersale}
    //       ]
    //     },
    //     {
    //       path: 'user',
    //       name: '个人信息',
    //       component: User
    //     }
    //   ]
    // },
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
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: '首页',
          component: Home
        }
      ]
    },
    {
      path: '/goods',
      component: Index,
      name: '商品管理',
      children: [
        {
          path: 'list',
          name: '商品列表',
          component: GoodsList
        },
        {
          path: 'add',
          name: '添加商品',
          component: AddGoods
        }
      ]
    },
    {
      path: '/order',
      component: Index,
      name: '订单管理',
      children: [
        {
          path: 'orderlist',
          name: '订单列表',
          component: OrderList
        },
        {
          path: 'aftersale',
          name: '售后列表',
          component: Aftersale
        }
      ]
    },
    {
      path: '/user',
      component: Index,
      children: [
        {
          path: '',
          name: '用户列表',
          component: User
        }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
