import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "project" */ './views/Project.vue'),
    },
  ],
});
