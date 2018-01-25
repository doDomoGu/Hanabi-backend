import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    // name: 'User',
    // meta: { title: '用户', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'User',
        component: _import('user/index'),
        meta: { title: '用户', icon: 'user' }
      }/* ,
      {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }*/
    ]
  },

  {
    path: '/room',
    component: Layout,
    redirect: '/room/index',
    children: [
      {
        path: 'index',
        name: 'Room',
        component: _import('room/index'),
        meta: { title: '房间', icon: 'user' }
      }
    ]
  },

  {
    path: '/game',
    component: Layout,
    redirect: '/game/index',
    name: 'Game',
    meta: { title: '游戏', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'GameList',
        component: _import('game/index'),
        meta: { title: '进行中的', icon: 'user' }
      },
      {
        path: 'history',
        name: 'GameHistory',
        component: _import('game/history'),
        meta: { title: '历史记录', icon: 'user' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    hidden: true,
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: _import('table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

