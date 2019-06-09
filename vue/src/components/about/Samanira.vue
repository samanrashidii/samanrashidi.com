<template>
    <div id="samanira" class="has-shape shape-2 has-slime-2">
      <div class="frame clearFixAfter">
        <div class="half-box reveal right-aligned has-large-right-padding">
          <img class="samanira-main-logo" :src="logo" :alt="logoAlt" />
          <br />
          <a class="bttn bounce site-2" :href="url" target="_blank">{{readMore}}</a>
        </div>
        <div class="half-box reveal left-aligned">
          <h4 v-html="sectionSub"></h4>
          <p class="justified">{{sectionDescription}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      sectionSub: 'Created <strong class="site-color has-small-x-margin">SamanirA</strong> framework @ May 2017',
      sectionDescription: 'SamanirA is an easy HTML/CSS/JS framework for Front-end Developers who wants to quickly build a project from 0 to 100% without wasting time to define CSS classes or write some Javascript functions.',
      portfolioTitle: 'websites',
      readMore: 'Read more',
      logo: '/images/samanira.png',
      logoAlt: 'Samanira Logo',
      url: 'http://www.samanira.com'
    }
  }
};
</script>
