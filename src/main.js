// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'

import 'babel-polyfill'
import 'animate.css'
import '@/assets/styles/iconfont.css'
import '@/assets/styles/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.prototype.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
