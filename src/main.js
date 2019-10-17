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

// Vue Config

Vue.config.productionTip = false;

// Vue VeeValidate

Vue.use(VeeValidate, {
  events: 'keyup',
});

// Vue Router

router.beforeEach((to, from, next) => {
  window.scrollTo({ 
    top: 0,
    behavior: 'smooth',
  });
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
