import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/view/login'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: '', redirect: 'login' },
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [
//     {}
//   ]
// })
// export default router
