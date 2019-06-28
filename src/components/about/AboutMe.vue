<template>
    <div id="about-me" class="has-shape shape-4 white-color center-aligned">
      <div class="frame">
        <div class="reveal">
          <div class="section-title">
            <span>{{AboutMe.sectionSub}}</span>
            <h1>{{AboutMe.sectionTitle}}</h1>
          </div>
          <div class="section-content">
            <p class="justified" v-html="AboutMe.aboutDescription"></p>
          </div>
          <div class="pagination">
            <div class="pagination-content">
              <div class="pagination-item" v-for="(certificate, index) in Certificates" :key="index">
                <a :href="require(`@/assets/images/certificates/${certificate.image}`)" :data-lightbox="certificate.name" :data-title="certificate.title"><img :src="require(`@/assets/images/certificates/${certificate.thumb}`)" :alt="getAlt(index)" /></a>
              </div>
            </div>
            <div class="pagination-navigation">
              <div class="pagination-current"></div>
              <div class="pagination-dots">
                <button class="pagination-dot" v-for="(certificate, index) in Certificates" :key="index">
                  <span class="pagination-number">{{index+1}}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img itemprop="image" :class="Owner.firstname.toLowerCase()" :src="getImgUrl(AboutMe.image)" :alt="Owner.fullname" />
      </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
        'Owner',
        'AboutMe',
        'Certificates'
    ])
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/images/${pic}`);
    },
    getAlt(index){
      return this.Owner.fullname + ' ' + this.Certificates[index].title;
    }
  },
};
</script>
