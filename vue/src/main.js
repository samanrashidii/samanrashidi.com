import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta';
import VeeValidate from 'vee-validate';
import {store} from './store/store.js'

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(VeeValidate, {
  events: 'keyup'
});

Vue.store = Vue.prototype.store = {
  webAuthorFirstName: 'Saman',
  webAuthorLastName: 'Rashidi',
  webAuthorFullName: 'Saman Rashidi',
};

router.beforeEach((to, from, next)=> {
  window.scrollTo(0, 0);
  next();
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
