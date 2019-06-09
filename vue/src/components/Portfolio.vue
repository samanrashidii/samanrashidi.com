<template>
    <div id="Portfolio" class="has-shape shape-4 white-color center-aligned">
        <div class="frame">
            <div class="section-title">
                <span>{{sectionSub}}</span>
                <h1>{{sectionTitle}}</h1>
            </div>
            <div class="my-portfolio">
                <h3 class="inner-title website-icon">{{portfolioTitle}}</h3>
                <ul class="grid effect-8" id="grid">
                    <li v-for="(portfolio, index) in portfolios" :key="index" :id="portfolio.url">
                        <div class="portfolio-layer" :class="{'second-bg' : portfolio.secondBG, 'third-bg' : portfolio.thirdBG, 'no-bg' : portfolio.noBG, 'half-text' : portfolio.halfText}">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>{{portfolio.name}}</h4>
                                    <p>{{portfolio.description}}</p>
                                    <router-link class="bttn has-icon read-more" :to="{name: 'portfolio', params: {id : portfolio.url}}">{{readMore}}</router-link>
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
            sectionSub: 'take a look at my',
            sectionTitle: 'Portfolio',
            portfolioTitle: 'websites',
            readMore: 'Read more about this project'
        };
    }
};
</script>
