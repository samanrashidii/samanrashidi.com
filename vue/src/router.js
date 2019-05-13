import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import NotFound from './views/NotFound.vue';
import Project from './views/Project.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/portfolio/:id',
      name: 'portfolio',
      component: Project
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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
       console.log(to.hash)
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
  },
});
