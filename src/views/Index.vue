<template>
  <div class="index">
    <AppNavigation/>
		<AppHome/>
		<AppAbout/>
		<AppPortfolio/>	
		<AppContact/>
		<AppFooter/>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'index',
  components: {
		AppNavigation: Navigation,
		AppHome: Home,
		AppAbout: About,
		AppPortfolio: Portfolio,
		AppContact: Contact,
  },
  metaInfo: {
    title : 'Saman Rashidi ~ Front-end Developer',
    meta: [
      {
        vmid : 'description',
        name : 'description',
        content : "Hi I'm Saman and specialized in Front-end Development. I'm coding most of the time with Vuejs, Javascript, Sass and HTML"
      },
      {
        vmid : 'og:title',
        name : 'og:title',
        content : 'Saman Rashidi ~ Front-end Developer'
      },
      {
        vmid : 'og:description',
        name : 'og:description',
        content : "Hi I'm Saman and specialized in Front-end Development. I'm coding most of the time with Vuejs, Javascript, Sass and HTML"
      },
      {
        vmid : 'og:url',
        name : 'og:url',
        content : 'http://www.samanrashidi.com'
      },
      {
        vmid : 'twitter:title',
        name : 'twitter:title',
        content : 'Saman Rashidi ~ Front-end Developer'
      },
      {
        vmid : 'twitter:description',
        name : 'twitter:description',
        content : "Hi I'm Saman and specialized in Front-end Development. I'm coding most of the time with Vuejs, Javascript, Sass and HTML"
      },
      {
        vmid : 'twitter:url',
        name : 'twitter:url',
        content : 'http://www.samanrashidi.com'
      }
    ]
  },
  mounted(){
    Saman();
  }
};
</script>
