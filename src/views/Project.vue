<template>
  <div class="portfolio-page">
    <template>
      <div class="specific-portfolio" itemscope itemtype="http://schema.org/Website">
        <div class="potfolio-banner" :style="{backgroundImage : `url(${getImgUrl(pn.pageBanner)})`}">
            <h1><div itemprop="name">{{pn.name}}</div><span>by <strong itemprop="author">{{ Owner.fullname }}</strong></span></h1>
            <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('#footer').animatescroll({scrollSpeed:4800,easing:'easeInSine'})"></a>
        </div>
        <div class="portfolio-content has-shape shape-4 has-slime-2">
            <div class="frame">
                <div class="content-box-wrapper" v-for="(content, index) in pn.pageItems" :key="index">
                  <div class="divider" v-if="index == 1"></div> 
                  <div class="reveal">
                      <div class="content-box" :class="{'tablet': index == 1, 'mobile': index == 2}">
                          <div class="content-image">
                              <img itemprop="image" :src="require(`@/assets/images/portfolio/${content.image}`)" :alt="pn.name +' '+ content.type + ' version website'" />
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
                    <a itemprop="url" class="bttn has-icon web-icon" :href="pn.siteUrl" target="_blank">{{Project.bttnText1}}</a>
                    <a class="bttn has-icon home-icon" href="javascript:void(0)" @click="goToLink({name: 'home'})">{{Project.bttnText2}}</a>
                </div>

                <div class="button-holder center-aligned has-arrow-button">
                    <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('.potfolio-banner').animatescroll({scrollSpeed:1200,easing:'easeInSine'})"></a>
                </div>

            </div>
        </div>
      </div>  
    </template>
    <other-projects :currentProject="this.pn.url" />
    <AppFooter/> 
  </div>         
</template>

<script>
import OtherProjects from '@/components/OtherProjects.vue';
import {mapGetters} from 'vuex';
export default {
  name: 'Project',
  props: ["id"],
  data() {
    return {
      pageReady: true,
      pn : {},
      pageID : this.id,
    }
  },
  components: {
    otherProjects: OtherProjects
  },
  metaInfo() {
    return {
      changed (newInfo, addedTags, removedTags) {
        console.log(addedTags)
      },
      title : `Saman Rashidi ~ Portfolio ~ ${this.pn.name}`,
      meta: [
        {
          vmid: 'description',
          name : 'description',
          content : `I'm a senior Front-end developer and ${this.pn.name} website is one of my projects`
        },
        {
          vmid: 'og:title',
          name : 'og:title',
          content : `Saman Rashidi ~ Portfolio ~ ${this.pn.name}`
        },
        {
          vmid : 'og:description',
          name : 'og:description',
          content : `I'm a senior Front-end developer and ${this.pn.name} website is one of my projects`
        },
        {
          vmid : 'og:url',
          name : 'og:url',
          content : `http://www.samanrashidi.com/portfolio/${this.pageID}`
        },
        {
          vmid : 'twitter:title',
          name : 'twitter:title',
          content : `Saman Rashidi ~ Portfolio ~ ${this.pn.name}`
        },
        {
          vmid : 'twitter:description',
          name : 'twitter:description',
          content : `I'm a senior Front-end developer and ${this.pn.name} website is one of my projects`
        },
        {
          vmid : 'twitter:url',
          name : 'twitter:url',
          content : `http://www.samanrashidi.com/portfolio/${this.pageID}`
        }
      ]
    }
  },
  watch:{
    $route(to, from){
      this.pageID = to.params.id;
    }
  },
  created(){
    if(this.getJsonData === undefined){
      this.pageReady = false;
      this.$router.push({name:'not-found'});
    } else{
      this.pn = this.Projects.find(item => item.url == this.pageID);
    }
    this.checkURL();
  },
  updated(){
    this.checkURL();
  },
  computed: {
    ...mapGetters([
      'Project',
      'Projects',
      'Owner'
    ]),
    getJsonData(){
      return this.Projects.find(item => item.url == this.pageID);
    }
  },
  methods: {
    goToLink(linkData){
      this.$router.push(linkData)
    },
    checkURL(){
      if(this.$route.params.id !== this.pn.url){
        this.pageReady = false;
        this.$router.push({name:'not-found'});
      }
    },
    getImgUrl(pic) {
      if(this.pageReady){
        return require(`@/assets/images/portfolio/${pic}`);
      }
    }
  }
};
</script>

<style scoped>

#footer.has-shape::before{display:none !important;}

.specific-portfolio{
  width: 100%;
  overflow: hidden;
  background:#161616;
}

.potfolio-banner{
  position: relative;
  display: table;
  width: 100%;
  height: 700px;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed; 
}

.potfolio-banner h1{
  display: table-cell;
  vertical-align: middle;
  font-family: 'Effra-light';
  font-size: 75px;
  color:#ffffff;
  text-shadow:0 0 12px #181818;
}

.potfolio-banner.no-textshadow h1{text-shadow: none;}

.potfolio-banner h1 span{
  display: block;
  font-size: 30px;
}

.potfolio-banner h1 strong{
  font-family: 'Effra-light';
  color:#0a9abd;
}

.portfolio-content{
  width: 100%;
  color:#ffffff;
  padding:200px 0 140px 0;
}

.portfolio-content p{padding-top:0;}

.content-text{
  float: left;
  width: 45%;
  padding-top:80px;
}

.content-box.mobile .content-text{padding-top:190px;}
.content-box.mobile .content-image{text-align: center;}

.content-box.tablet .content-text{padding-top:120px;}
.content-box.tablet .content-image{
  float: right;
  text-align: right;
}

.content-text h6{
  font-family: 'Effra-light';
  line-height: 2;
}

.content-image{
  float: left;
  width: 55%;
}

.divider{
  position: relative;
  width: 60%;
  margin:120px auto;
  border-top:2px dashed #ffffff;
}

.divider::before{
  content:'';
  position: absolute;
  left:0;
  top:-80px;
  display: block;
  width: 2px;
  height: 80px;
  border-left:2px dashed #ffffff;
}

.divider::after{
  content:'';
  position: absolute;
  right:0;
  top:0;
  display: block;
  width: 2px;
  height: 80px;
  border-left:2px dashed #ffffff;
}

.divider.reverse{width: 45%;}
.divider.reverse::before{top:0;}
.divider.reverse::after{top:-80px;}

.portfolio-content .button-holder{margin-top:100px;}

.portfolio-content .button-holder a.bttn:hover{
  color:#ffffff;
  background-color: #0a9abd;
  border-color: #0a9abd !important;
}

</style>
