import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/pages/TestPage'
import Directives1 from '@/pages/Directives1'
import Directives2 from '@/pages/Directives2'
import Directives3 from '@/pages/Directives3'
import GlobalAPI from '@/pages/GlobalAPI'
import Barcode from '@/pages/Barcode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
