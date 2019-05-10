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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
