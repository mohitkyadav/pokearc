import Vue from 'vue'
import Router from 'vue-router'
import PokeArc from '@/components/PokeArc'

Vue.use(Router)

export default new Router({
  // Remove # from the URL
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PokeArc',
      component: PokeArc
    }
  ]
})
