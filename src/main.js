import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import routes from './routes.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

library.add(faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
const router = new VueRouter({routes});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
