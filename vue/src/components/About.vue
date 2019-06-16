<template>
  <div id="About">
    <about-me/>
    <samanira/>
    <statistics/>
    <parallax/>
  </div>
</template>

<script>
import AboutMe from '@/components/about/AboutMe.vue';
import Samanira from '@/components/about/Samanira.vue';
import Statistics from '@/components/about/Statistics.vue';
import Parallax from '@/components/about/Parallax.vue';

export default {
  components: {
    aboutMe: AboutMe,
    samanira: Samanira,
    statistics: Statistics,
    parallax: Parallax,
  },
};
</script>
