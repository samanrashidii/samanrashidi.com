import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import NotFound from './views/NotFound.vue';
import Project from './views/Project.vue';

// const Index =  () => import('./views/Index.vue');
// const NotFound =  () => import('./views/NotFound.vue');
// const Project =  () => import('./views/Project.vue');

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
      component: Project,
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
