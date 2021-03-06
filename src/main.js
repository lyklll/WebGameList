import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(Vant)

import components from './components'
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
