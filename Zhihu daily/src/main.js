// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'mui-master/dist/css/mui.css'
import 'mui-master/examples/hello-mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'
import mui from 'mui-master/dist/js/mui.js'
import {Swipe,SwipeItem} from 'mint-ui'

Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

Vue.config.productionTip = false
//Vue.http.options.root="http://127.0.0.1:3008/";
//全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;

//携带认证 加上这个之后cookie的uid会被返回
axios.defaults.withCredentials=true;
Vue.prototype.$http=axios;
Vue.prototype.mui=mui;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
