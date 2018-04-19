import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
	base: `${feConfig.baseRoute}`,
	mode:'history',
	scrollBehavior: () => ({x: 0, y: 0}),
	routes: [
		{
		  path: '/',
		  name: 'download',
		  component: resolve => require(['@/views/download'], resolve)
		},
		//404
		{
			path: '*',
			name: 'notFound',
			component: resolve => require(['@/views/NotFound'], resolve),
			meta: {title: '404'}
		}
	]
})


export default router;
