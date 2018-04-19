// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
const FastClick = require('fastclick');

import Axios from './assets/plugin/axios'
import CheckResp from './assets/plugin/checkResp'
import handleError from './assets/plugin/handleError';
import { LoadingPlugin, ToastPlugin } from 'vux';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

Vue.use(Axios)
Vue.use(CheckResp)
Vue.use(handleError)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body);
sessionStorage.clear();
router.beforeEach((to, from, next) => {
	if(to.meta && to.meta.title){
		document.title = to.meta.title;
	}
	if(!sessionStorage.getItem('dev-wechat-current-url')){
		sessionStorage.setItem('dev-wechat-current-url',document.URL);
	}
	next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
