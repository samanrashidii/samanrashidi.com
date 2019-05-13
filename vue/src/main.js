import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Meta from 'vue-meta'

Vue.config.productionTip = false;
Vue.use(Meta);

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
