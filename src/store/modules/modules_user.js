import * as TypesUser from '../types/types_user';
import Vue from 'vue';
export default {
  state: {
    isLogin: false,
    config:{}
  },
  mutations: {
    [TypesUser.USER_SET_WECHAT_CONFIG](state, payload){
      state.config = payload || {};
    }
  },
  actions: {
    //获取微信SDK配置
    [TypesUser.USER_GET_WECHAT_CONFIG](ctx,url){
      return Vue.http.get('/v1/configs/jssdk-config',{
        params:{url}
      }).then(function (resp) {
        return Vue.checkResp(resp);
      }).then(data => {
        ctx.commit(TypesUser.USER_SET_WECHAT_CONFIG, data);
        return data;
      }).catch(err=> {
        //统一错误处理
        ctx.commit(TypesUser.USER_SET_WECHAT_CONFIG, null);
        throw err;
      });
    }
  },
  getters: {
    ifLogin() {
      // 根据cookie判断；
      return document.cookie.indexOf(feConfig.cookie) !== -1
    },
    currentUrl(){
      return sessionStorage.getItem('dev-wechat-current-url');
    }
  }
}
