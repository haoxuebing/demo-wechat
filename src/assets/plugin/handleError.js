import Vue from 'vue';

export default {
    install(Vue) {
        Vue.handleError = function(err, msg) {
            if (typeof arguments[0] === 'string') {
                err = {msg: arguments[0]};
            }
            Vue.$vux.toast.show({
                text: err.msg || err.message || msg || '请求失败',
                type: 'text',
                position: 'bottom'
            })
        }
        Object.defineProperty(Vue.prototype, '$handleError', {value: Vue.handleError})
    }
}