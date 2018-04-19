import Axios from 'axios';
import enums from '@/constants/enum';

const instance = Axios.create({
  baseURL: `${feConfig.api.base}`,
  withCredentials: true
})

instance.interceptors.request.use(function (config) {
  return config
})

const INVALID_COOKIE = 1003;
instance.interceptors.response.use(function (response) {
  if(response && (INVALID_COOKIE === response.data.code || 3001 === response.data.code)){
	  let url = `${feConfig.baseUrl}/bind/verify`;
	  location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${feConfig.appId}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_base#wechat_redirect`;
  }
  return response.data
}, function (err) {
  if (err.response) {
    return Promise.reject(err.response.data)
  }
  return Promise.reject({ code: 1024, message: err.message })
})

function axios(options) {
  let cookie = null;
  if (options.cookie) {
    cookie = `${options.cookie.key}=${options.cookie.value}`;
    delete options.cookie;
  }
  const instance = Axios.create(Object.assign({
    timeout: 4000
  }, options, cookie? {headers: { 'Cookie': cookie }}: {}));
  return instance;
}

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.http = instance;
  Vue.axios = axios;
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
