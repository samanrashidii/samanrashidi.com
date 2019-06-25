import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import {store} from './store/store.js'

// Global Components

import AppFooter from './components/global/AppFooter.vue';

Vue.component('AppFooter', AppFooter);

// Required External Files

require('@/assets/css/saman.css');
require('@/assets/css/style.css');
require('@/assets/css/media.css');

// Vue Meta

Vue.config.productionTip = false;

// Vue VeeValidate

Vue.use(VeeValidate, {
  events: 'keyup',
});

// Vue Store Data

Vue.store = Vue.prototype.store = {
  webAuthorFirstName: 'Saman',
  webAuthorLastName: 'Rashidi',
  webAuthorFullName: 'Saman Rashidi',
};

// Vue Router

router.beforeEach((to, from, next)=> {
  window.scrollTo(0, 0);
  next();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log('SW registration failed');
    }
  }
}

window.addEventListener('load', () => {
  registerSW();
});

// Create Vue

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
