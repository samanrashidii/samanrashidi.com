<template>
    <div id="statistics" class="has-shape shape-4 white-color center-aligned">
      <div class="frame">
        <div class="reveal">
          <div class="section-title">
            <span>{{sectionSub}}</span>
            <h1>{{sectionTitle}}</h1>
          </div>
          <div class="section-content">
            <div class="stat-box-wrapper">
              <div class="stat-box" v-for="(statistic, index) in statistics" :key="index">
                <img :src="require(`@/assets/images/${statistic.image}`)" :alt="statistic.name" />
                <div class="stat-box-info">
                  <strong><span class="counter-up">{{statistic.statData}}</span><span v-if="statistic.percentage"> %</span></strong><div>{{statistic.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      sectionSub: 'some',
      sectionTitle: 'Statistics',
      statistics: [
        {
          name: 'Lines of Codes',
          image: 'code.png',
          statData: 568377,
        },
        {
          name: 'Cups of Coffee',
          image: 'coffee.png',
          statData: 3524,
        },
        {
          name: 'Successful Projects',
          image: 'project.png',
          statData: 63,
        },
        {
          name: 'HTML 5',
          image: 'html.png',
          statData: 99,
          percentage: true,
        },
        {
          name: 'CSS 3',
          image: 'css.png',
          statData: 99,
          percentage: true,
        },
        {
          name: 'Vanilla Javascript - jQuery - Vuejs',
          image: 'javascript.png',
          statData: 70,
          percentage: true,
        },
      ],
    };
  },
};
</script>
