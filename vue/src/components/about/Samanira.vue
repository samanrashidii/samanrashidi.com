<template>
    <div id="samanira" class="has-shape shape-2 has-slime-2">
      <div class="frame clearFixAfter">
        <div class="half-box reveal right-aligned has-large-right-padding">
          <img class="samanira-main-logo" :src="getImgUrl(Samanira.logo)" :alt="Samanira.logoAlt" />
          <br />
          <a class="bttn bounce site-2" :href="Samanira.url" target="_blank">{{Samanira.readMore}}</a>
        </div>
        <div class="half-box reveal left-aligned">
          <h4 v-html="Samanira.sectionSub"></h4>
          <p class="justified">{{Samanira.sectionDescription}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
        'Samanira',
    ])
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/images/${pic}`);
    }
  }
};
</script>
