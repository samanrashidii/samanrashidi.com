<template>
  <div class="index">
    <vue-headful
        :title="pageTitle"
        :description="pageDescription"
        :ogTitle="pageTitle"
        :ogDescription="pageDescription"
        :url="pageUrl"
    />
    <app-navigation></app-navigation>
		<app-home></app-home>
		<app-about></app-about>
		<app-portfolio></app-portfolio>	
		<app-contact></app-contact>
		<app-footer></app-footer>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'index',
  data(){
    return {
      pageTitle: `${this.store.webAuthorFullName} ~ Web Designer and Senior Front-end Developer`,
      pageDescription: `My name is ${this.store.webAuthorFirstName} and I specialize in Front-end Web Development. I started working with Edoramedia company since October 2014 and the owner of SamanirA framework`,
      pageUrl: `${this.$route.fullPath}`
    }
  },
  components: {
		appNavigation: Navigation,
		appHome: Home,
		appAbout: About,
		appPortfolio: Portfolio,
		appContact: Contact,
		appFooter: Footer,
  },
};
</script>
