// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
var instance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000
});
Vue.prototype.$http = instance;




Vue.config.productionTip = false
import './assets/css/main.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
