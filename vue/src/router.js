import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/portfolio/:id',
      name: 'portfolio',
      component: ()=> import('./views/Project.vue'),
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: {name : 'not-found'}
    }
  ],
});
