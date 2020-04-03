<template>
    <div id="statistics" class="has-shape shape-4 white-color center-aligned" :style="{backgroundImage : `url(${getImgUrl(Statistics.background)})`}">
      <div class="frame">
        <div class="section-title">
          <span>{{Statistics.sectionSub}}</span>
          <h1>{{Statistics.sectionTitle}}</h1>
        </div>
        <div class="section-content">
          <div class="stat-box-wrapper">
            <div class="stat-box" v-for="(statistic, index) in Statistics.data" :key="index">
              <lottie-player
                :src="statistic.image"  background="transparent"  :speed="statistic.speed"  style="width: 200px; height: 200px; margin:0 auto;"  loop  autoplay >
              </lottie-player>
              <div class="stat-box-info">
                <strong><span class="counter-up">{{statistic.statData}}</span><span v-if="statistic.percentage"> %</span></strong><div>{{statistic.name}}</div>
              </div>
            </div>
          </div>
          <div class="skill-box">
            <Skill v-for="(skill, index) in Statistics.skills" :key="index" :skill="skill" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Skill from '@/components/Skill.vue';

export default {
  components: {
    Skill,
  },
  computed: {
    ...mapGetters([
        'Statistics',
    ])
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/images/${pic}`);
    }
  }
};
</script>

<style scoped>
  .lottie-wrapper svg path{
    stroke: #ffffff;
  }
</style>
