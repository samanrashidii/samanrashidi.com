<template>
    <div id="Portfolio" class="has-shape shape-4 white-color center-aligned">
        <div class="frame">
            <div class="section-title">
                <span>{{Portfolio.sectionSub}}</span>
                <h1>{{Portfolio.sectionTitle}}</h1>
            </div>
            <div class="my-portfolio has-top-margin">
                <ul class="grid effect-8" id="grid">
                    <li v-for="(project, index) in Projects" :key="index" :id="project.url">
                        <div class="portfolio-layer" :class="{'second-bg' : project.secondBG, 'third-bg' : project.thirdBG, 'no-bg' : project.noBG, 'half-text' : project.halfText}">
                            <a class="close" href="javascript:void(0)"></a>
                            <div class="portfolio-inner-layer">
                                <div class="portfolio-layer-content">
                                    <h4>{{project.name}}</h4>
                                    <p>{{project.description}}</p>
                                    <router-link class="bttn has-icon read-more" :to="{name: 'portfolio', params: {id : project.url}}"><span>{{Portfolio.readMore}}</span></router-link>
                                </div>
                            </div>
                        </div>
                        <img :src="require(`@/assets/images/portfolio/${project.image}`)" :alt="project.imageAlt" />
                    </li>
                </ul>
            </div><!-- my-portfolio end -->
        </div><!-- frame end -->
    </div><!-- Portfolio end -->
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters([
          'Portfolio',
          'Projects'
        ])
    }
};
</script>
