// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 定义路由组件
const Login = require('./components/login/login.vue')

// 定义路由，配置路由映射
const routes = [
  { path: '/', redirect: '/Login' },
  { path: '/Login', component: Login }
]

// 创建router实例
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
