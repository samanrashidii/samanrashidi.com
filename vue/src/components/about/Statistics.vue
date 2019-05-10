<template>
    <div id="statistics" class="has-shape shape-4 white-color center-aligned">
      <div class="frame">
        <div class="reveal">
          <div class="section-title">
            <span>some</span>
            <h1>Statistics</h1>
          </div>
          <div class="section-content">
            <div class="stat-box-wrapper">
              <div class="stat-box" v-for="(statistic, index) in statistics" :key="index">
                <img :src="statistic.image" :alt="statistic.name" />
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
      statistics: [
        {
          name: 'Lines of Codes',
          image: 'images/code.png',
          statData: 564377,
        },
        {
          name: 'Cups of Coffee',
          image: 'images/coffee.png',
          statData: 3498,
        },
        {
          name: 'Successful Projects',
          image: 'images/project.png',
          statData: 63,
        },
        {
          name: 'HTML 5',
          image: 'images/html.png',
          statData: 99,
          percentage: true,
        },
        {
          name: 'CSS 3',
          image: 'images/css.png',
          statData: 99,
          percentage: true,
        },
        {
          name: 'Vanilla Javascript - jQuery - Vuejs',
          image: 'images/javascript.png',
          statData: 70,
          percentage: true,
        },
      ],
    };
  },
};
</script>
