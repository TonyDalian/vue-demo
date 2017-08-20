import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './vuex/store'
import axios from 'axios'
Vue.prototype.$http = axios



/*import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Counter from './components/Counter.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/hello', component: Hello },
  { path: '/counter', component: Counter }
]

const router = new VueRouter({
	routes
})
*/

/*new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')*/

new Vue({
	el: '#app',
	store,
	router,
	...App
	/*render: h => h(App)*/
	
	// template: '<App/>',
	// components: { App }
})


