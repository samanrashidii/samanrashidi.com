<template>
  <div class="portfolio-page">
    <vue-headful
          :title="pageTitle"
          :description="pageDescription"
          :ogTitle="pageTitle"
          :ogDescription="pageDescription"
          :url="pageUrl"
      />
    <div class="specific-portfolio" itemscope itemtype="http://schema.org/Website" v-for="(portfolio, index) in portfolios" :key="index">
      <template v-if="portfolio.url == $route.params.id">
      <div class="potfolio-banner" :style="{backgroundImage : 'url(' + portfolio.pageBanner + ')'}">
          <h1><div itemprop="name">{{portfolio.name}}</div><span>by <strong itemprop="author">{{store.webAuthorFullName}}</strong></span></h1>
          <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('#footer').animatescroll({scrollSpeed:4800,easing:'easeInSine'})"></a>
      </div><!-- portfolio-banner end -->
      <div class="portfolio-content has-shape shape-4 has-slime-2">
          <div class="frame">
              <div class="content-box-wrapper" v-for="(content, index) in portfolio.pageItems" :key="index">
                <div class="divider" v-if="index == 1"></div><!-- divider end -->  
                <div class="reveal">
                    <div class="content-box" :class="{'tablet': index == 1, 'mobile': index == 2}">
                        <div class="content-image">
                            <img itemprop="image" :src="content.image" :alt="portfolio.name +' '+ content.type + ' version website'" />
                        </div><!-- content-image end -->
                        <div class="content-text">
                            <h6 itemprop="description"><span class="site-color">"</span> {{content.description}} <span class="site-color">"</span></h6>
                        </div><!-- content-text end -->
                        <div class="clearFix"></div><!-- clearFix end -->
                    </div><!-- content-box end -->
                </div><!-- reveal end -->
                <div class="divider reverse" v-if="index == 1"></div><!-- divider end -->
              </div>

              <div class="button-holder center-aligned">
                  <a itemprop="url" class="bttn has-icon web-icon" :href="portfolio.siteUrl" target="_blank">Open This Project in Web</a>
                  <a class="bttn has-icon home-icon" href="javascript:void(0)" @click="goToLink({name: 'home'})">Back to Homepage</a>
              </div><!-- button-holder end -->

              <div class="button-holder center-aligned">
                  <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('.potfolio-banner').animatescroll({scrollSpeed:1200,easing:'easeInSine'})"></a>
              </div><!-- button-holder end -->

          </div><!-- frame end -->
      </div><!-- portfolio-content end -->
      </template>
    </div><!-- specific-portfolio end -->    
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
      pageID : this.$route.params.id,
      pageTitle: `${this.store.webAuthorFullName} ~ Portfolio ~ ${this.$route.params.id}`,
      pageDescription: 'My name is Saman and I specialize in Front-end Web Development.',
      pageUrl: `${this.$route.fullPath}`,
      portfolios: PortfolioItems,
    };
  },
  components: {
		appFooter: Footer,
  },
  watch:{
    $route(to, from){
      this.$route.params.id = to.params.id
    }
  },
  methods: {
      goToLink(linkName){
          this.$router.push(linkName)
      }
  }
};
</script>
