import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Counter from './components/Counter.vue'
import Login from './pages/Login.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/hello', component: Hello },
  { path: '/user/login', component: Login },
  { path: '/counter', component: Counter }
]

export default new VueRouter({
	linkActiveClass: 'active',
	routes
})
