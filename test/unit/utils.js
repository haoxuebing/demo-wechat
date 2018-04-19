require('es6-promise').polyfill()
import Vue from 'vue';
import Vuex from 'vuex'
import Router from 'vue-router'
Vue.use(Vuex);
Vue.use(Router)
/**
 * 由各个vuex modules创建store
 * @param  {Object}  userModules    - 用户需要自定义的module store对象， key值要与store/index.js中定义的模块名字相同，达到覆盖目的
 * @return {Object} vuex store
 */
exports.createStore = function(userModules = {}) {
    return new Vuex.Store({
        modules: Object.assign({}, getModules(), userModules)
    })
}

function getModules() {
    let rs = require.context('../../src/store/modules', false, /\.js$/);
    let modules = {};
    rs.keys().forEach(key => {
        let moduleName = key.split('_')[1].split('.')[0];
        if (!modules[moduleName]) {
            modules[moduleName] = rs(key).default;
        }
    })
    return modules;
}
//-------------------------
/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */
exports.createTest = function(Compo, propsData = {}, mounted = false) {
    if (propsData === true || propsData === false) {
      mounted = propsData;
      propsData = {};
    }
    let {store, router} = propsData;
    let options = Object.assign(
        {}, 
        store? {store}: null,
        router? {router}: null,
        { propsData }
    )
    const Ctor = Vue.extend(Compo);
    return new Ctor(options).$mount();
  };