import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/components/TestPage'
import Directives1 from '@/components/Directives1'
import Directives2 from '@/components/Directives2'
import Directives3 from '@/components/Directives3'
import GlobalAPI from '@/components/GlobalAPI'
import myTest from '@/components/myTest'

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
      path: '/myTest',
      name: 'myTest',
      component: myTest
    }
  ]
})
