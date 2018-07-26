import Vue from 'vue'
import Router from 'vue-router'
import { TestPage, Directives1, Directives2, Directives3, GlobalAPI, Barcode } from '@/pages'
import Layout from '@/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '',
        component: TestPage
      }]
    },
    {
      path: '/directives',
      name: 'Directives',
      component: Layout,
      children: [{
        path: '',
        component: Directives1
      }]
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/Directives1',
      name: 'Directives1',
      component: Directives1
    },
    {
      path: '/Directives2',
      name: 'Directives2',
      component: Directives2
    },
    {
      path: '/Directives3',
      name: 'Directives3',
      component: Directives3
    },
    {
      path: '/GlobalAPI',
      name: 'GlobalAPI',
      component: GlobalAPI
    },
    {
      path: '/Barcode',
      name: 'Barcode',
      component: Barcode
    }
  ]
})
