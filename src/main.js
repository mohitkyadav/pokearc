// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import PokeArc from './components/PokeArc.vue'
import FindPoke from './components/FindPoke.vue'
import Favorite from './components/Fav.vue'
import About from './components/About.vue'
import Settings from './components/Settings.vue'

import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
// import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueResource)

Vue.component('PokeArc', PokeArc)
Vue.component('FindPoke', FindPoke)
Vue.component('Favorite', Favorite)
Vue.component('About', About)
Vue.component('Settings', Settings)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
