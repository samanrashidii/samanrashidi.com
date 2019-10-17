<template>
  <div class="index">
    <app-navigation/>
		<app-home/>
		<app-about/>
		<app-portfolio/>	
		<app-contact/>
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
		appNavigation: Navigation,
		appHome: Home,
		appAbout: About,
		appPortfolio: Portfolio,
		appContact: Contact,
  },
  metaInfo: {
    title : 'Saman Rashidi ~ Senior Front-end developer',
    meta: [
      {
        vmid : 'description',
        name : 'description',
        content : 'My name is Saman and I specialize in Front-end web development.'
      },
      {
        vmid : 'og:title',
        name : 'og:title',
        content : 'Saman Rashidi ~ Senior Front-end developer'
      },
      {
        vmid : 'og:description',
        name : 'og:description',
        content : 'My name is Saman and I specialize in Front-end web development.'
      },
      {
        vmid : 'og:url',
        name : 'og:url',
        content : 'http://www.samanrashidi.com'
      },
      {
        vmid : 'twitter:title',
        name : 'twitter:title',
        content : 'Saman Rashidi ~ Senior Front-end developer'
      },
      {
        vmid : 'twitter:description',
        name : 'twitter:description',
        content : 'My name is Saman and I specialize in Front-end web development.'
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
