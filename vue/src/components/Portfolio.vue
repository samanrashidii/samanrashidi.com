<template>
    <div id="Portfolio" class="has-shape shape-4 white-color center-aligned">
        <div class="frame">
            <div class="section-title">
                <span>take a look at my</span>
                <h1>Portfolio</h1>
            </div>
            <div class="my-portfolio">
                <h3 class="inner-title website-icon">websites</h3>
                <ul class="grid effect-8" id="grid">
                    <li v-for="(portfolio, index) in portfolios" :key="index">
                        <div class="portfolio-layer" :class="{'second-bg' : portfolio.secondBG, 'third-bg' : portfolio.thirdBG, 'no-bg' : portfolio.noBG, 'half-text' : portfolio.halfText}">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>{{portfolio.name}}</h4>
                                    <p>{{portfolio.description}}</p>
                                    <router-link class="bttn has-icon read-more" :to="`/${portfolio.url}`">Read More About This Project</router-link>
                                </div>
                            </div>
                        </div>
                        <img :src="portfolio.image" :alt="portfolio.imageAlt" />
                    </li>
                </ul>
            </div><!-- my-portfolio end -->
        </div><!-- frame end -->
    </div><!-- Portfolio end -->
</template>

<script>
import PortfolioItems from '@/assets/portfolio.json';

export default {
  data() {
    return {
      portfolios: PortfolioItems,
    };
  },
};
</script>
