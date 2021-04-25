<template>
  <div id="About">
    <about-me/>
    <statistics/>
    <parallax/>
  </div>
</template>

<script>
import AboutMe from '@/components/about/AboutMe.vue';
import Statistics from '@/components/about/Statistics.vue';
import Parallax from '@/components/about/Parallax.vue';

export default {
  components: {
    aboutMe: AboutMe,
    statistics: Statistics,
    parallax: Parallax
  }
}
</script>
