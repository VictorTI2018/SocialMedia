// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './helpers/session'
import './helpers/http'
import './helpers/events'

Vue.config.productionTip = false

import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import VGrid from './components/VGrid.vue'
import VCard from './components/VCard.vue'

Vue.component('v-header', VHeader)
Vue.component('v-footer', VFooter)
Vue.component('v-grid', VGrid)
Vue.component('v-card', VCard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
