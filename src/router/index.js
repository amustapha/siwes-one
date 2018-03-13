import Vue from 'vue'
import Router from 'vue-router'
import Reactive from '@/components/Reactive'
import TestPage from '../components/TestPage'
import Greeter from '../components/Greeter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reacive',
      component: Reactive
    },
    {
      path: '/test',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/greet',
      name: 'GReetings',
      component: Greeter
    }
  ]
})
