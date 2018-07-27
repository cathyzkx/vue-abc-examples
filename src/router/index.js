import Vue from 'vue'
import Router from 'vue-router'
import { TestPage, Directives1, Directives2, Directives3, GlobalAPI1, Barcode } from '@/pages'
import { Layout, MainPage } from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: TestPage
        }]
    },

    // Vue基础知识
    {
      path: '/vue',
      component: Layout,
      children: [
        {
          path: 'directives',
          component: MainPage,
          children: [
            {
              path: '1',
              component: Directives1
            },
            {
              path: '2',
              component: Directives2
            },
            {
              path: '3',
              component: Directives3
            }]
        },
        {
          path: 'globalAPI',
          component: MainPage,
          children: [
            {
              path: '1',
              component: GlobalAPI1
            }]
        }]
    },

    // Vue插件/Js库
    {
      path: '/plugin',
      component: Layout,
      children: [
        {
          path: 'JsBarcode',
          component: Barcode
        }]
    }
  ],

  // history模式下做锚点定位的方法
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) { // 如果你的连结是带#这种， to.hash就会有值, 例如 #vmodel
      return {
        selector: to.hash // 透过to.hash的值来找到对应元素
      }
    }
  }
})
