import Vue from 'vue'
import Router from 'vue-router'
import exampleDemo from '@/exampleDemo/exampleDemo'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: exampleDemo
    }
  ]
})
