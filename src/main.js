// This file is part of eni-capitulo-demo.
//
//   eni-capitulo-demo is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   eni-capitulo-demo is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with eni-capitulo-demo. If not, see <https://www.gnu.org/licenses/>.

import Vue from 'vue'
import VueMatomo from 'vue-matomo'
import App from './App.vue'
import router from './router'
import store from './store'
import 'sisdai-css/dist/sisdai.min.css'
import SisdaiComponentes from 'sisdai-componentes/src/index'

// Componentes y directivas de la biblioteca
Vue.use(SisdaiComponentes)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

if (process.env.VUE_APP_MATOMO_SITEID !== 0) {
  Vue.use(VueMatomo, {
    host: 'https://retru.conacyt.mx/',
    siteId: process.env.VUE_APP_MATOMO_SITEID,
    trackerFileName: 'matomo',
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    debug: true,
  })
}
