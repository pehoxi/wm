// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui';
import App from './App'
import router from './router'
import store from './store';
import VueLazyload from 'vue-lazyload';

import loading from './common/imgs/loading.gif';
Vue.use(VueLazyload, {


  loading, //懒加载的图片

})
import './mock/mockServer';   //加载mock
//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { },
  render : h => h(App),
}).$mount('#app')
