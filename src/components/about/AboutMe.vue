<template>
    <div id="about-me" class="has-shape shape-4 white-color center-aligned">
      <div class="frame">
        <div class="section-title">
          <span>{{AboutMe.sectionSub}}</span>
          <h1>{{AboutMe.sectionTitle}}</h1>
        </div>
        <div class="reveal">
          <div class="about-wrapper">
            <img itemprop="image" :class="Owner.firstname.toLowerCase()" src="@/assets/images/samanrashidii.png" :alt="Owner.fullname" />
            <div class="section-content">
              <p class="left-aligned" v-html="AboutMe.aboutDescription" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
        'Owner',
        'AboutMe'
    ])
  }
};
</script>
