import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'

// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import App from './App/App.vue'
// Vue.use(ElementUI)

Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
