import Vue from 'vue';
import vueHeadful from 'vue-headful';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.component('vue-headful', vueHeadful);

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
  router,
  render: h => h(App),
}).$mount('#app');
