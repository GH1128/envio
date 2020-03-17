import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from './router';

import './mock/index.js'
import './assets/rem'
import 'lib-flexible'
import 'vant/lib/index.css';
import {NavBar   , Toast, Popup, Dialog, Circle, DropdownMenu, DropdownItem, Field } from 'vant';

import { Notify } from 'vant';
//引入样式重置
import './assets/reset.css'



Vue.use(Vant);
Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Circle);
Vue.use(Field);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Notify);

Vue.prototype.$bus = new Vue()



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
