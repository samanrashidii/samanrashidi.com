<template>
  <div class="portfolio-page">
    <template v-for="(portfolio, index) in portfolios">
      <div class="specific-portfolio" itemscope itemtype="http://schema.org/Website" v-if="portfolio.url == $route.params.id"  :key="index">
        {{ getPnData(portfolio.name) }}
        <div class="potfolio-banner" :style="{backgroundImage : 'url(' + portfolio.pageBanner + ')'}">
            <h1><div itemprop="name">{{portfolio.name}}</div><span>by <strong itemprop="author">{{store.webAuthorFullName}}</strong></span></h1>
            <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('#footer').animatescroll({scrollSpeed:4800,easing:'easeInSine'})"></a>
        </div>
        <div class="portfolio-content has-shape shape-4 has-slime-2">
            <div class="frame">
                <div class="content-box-wrapper" v-for="(content, index) in portfolio.pageItems" :key="index">
                  <div class="divider" v-if="index == 1"></div> 
                  <div class="reveal">
                      <div class="content-box" :class="{'tablet': index == 1, 'mobile': index == 2}">
                          <div class="content-image">
                              <img itemprop="image" :src="content.image" :alt="portfolio.name +' '+ content.type + ' version website'" />
                          </div>
                          <div class="content-text">
                              <h6 itemprop="description"><span class="site-color">"</span> {{content.description}} <span class="site-color">"</span></h6>
                          </div>
                          <div class="clearFix"></div>
                      </div>
                  </div>
                  <div class="divider reverse" v-if="index == 1"></div>
                </div>

                <div class="button-holder center-aligned">
                    <a itemprop="url" class="bttn has-icon web-icon" :href="portfolio.siteUrl" target="_blank">Open This Project in Web</a>
                    <a class="bttn has-icon home-icon" href="javascript:void(0)" @click="goToLink({name: 'home'})">Back to Homepage</a>
                </div>

                <div class="button-holder center-aligned">
                    <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('.potfolio-banner').animatescroll({scrollSpeed:1200,easing:'easeInSine'})"></a>
                </div>

            </div>
        </div>
      </div>  
    </template>
    <app-footer></app-footer> 
  </div>         
</template>

<script>
import Footer from '@/components/Footer.vue';
import PortfolioItems from '@/assets/portfolio.json';
export default {
  name: 'Project',
  data() {
    return {
      portfolios: PortfolioItems,
      pnData : '',
      pID : this.$route.params.id
    }
  },
  components: {
		appFooter: Footer,
  },
  metaInfo() {
    return {
      title : `Saman Rashidi ~ Portfolio ~ ${this.pnData}`,
      meta: [
        {
          name : 'description',
          content : `I'm a senior Front-end developer and ${this.pnData} website is one of my projects`
        },
        {
          name : 'og:title',
          content : `Saman Rashidi ~ Portfolio ~ ${this.pnData}`
        },
        {
          name : 'og:description',
          content : `I'm a senior Front-end developer and ${this.pnData} website is one of my projects`
        },
        {
          name : 'og:url',
          content : `http://www.samanrashidi.com/portfolio/${this.pID}`
        }
      ]
    }
  },
  watch:{
    $route(to, from){
      this.$route.params.id = to.params.id;
    }
  },
  methods: {
      goToLink(linkName){
        this.$router.push(linkName)
      },
      getPnData(pndata){
        this.pnData = pndata;
      }
  }
};
</script>
