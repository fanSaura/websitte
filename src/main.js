// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store/index.js'
import './assets/fonts/iconfont.css'
/*import $ from 'jquery'*/
/*import './assets/js/jquery.min.js'*/


Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
