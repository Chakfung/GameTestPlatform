import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './plugins/element.js'
import http from './http'

import './assets/css/icon-font/iconfont.css'
import $ from 'jquery'

// import ECharts from 'vue-chartjs'
// import 'echarts/lib/chart/line'
// Vue.component('chart', ECharts)

Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  $,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
