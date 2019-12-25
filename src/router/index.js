import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Product from '../component/Product.vue'
import Community from '../views/Community.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/Login',
		name: 'login',
		component: Login,
	},
	{

		path: '/mainContainer',
		name: 'mainContainer',
		component: () => import( /* webpackChunkName: "about" */ '../views/ShareCom/container.vue'),
		children: [{
				path: '/Community',
				name: 'Community',
				component: Community,
				component: () => import( /* webpackChunkName: "about" */ '../views/Community.vue')
			},
			{
				path: '/Share',
				name: 'Share',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/ShareCom/Share.vue')
			},
			{
				path: '/Details',
				name: 'Details',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Details.vue')
			},
			{
				path: '/Chat',
				name: 'Chat',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/ChatCom/Chat.vue')
			},
			{
				path: '/Shar',
				name: 'Shar',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/ShareCom/Shar.vue')
			},
			{
				path: '/Reg',
				name: 'Reg',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '../views/Reg.vue')
			},
			{
				path: '/shopping',
				name: 'shopping',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "shopping" */ '../views/shopping.vue')
			},
			{
				path: '/Cart',
				name: 'Cart',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "cart" */ '../views/Cart.vue')
			},
			{
				path: '/Details',
				name: 'Details',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "details" */ '../views/Details.vue')
			},
			{
				path: '/Product',
				name: 'Product',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "product" */ '../views/Product.vue')
			},
			{
				path: '/ProductDiapers',
				name: 'ProductDiapers',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "productdiapers" */ '../views/ProductDiapers.vue')
			}
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
