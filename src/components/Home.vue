<template>
    <div id="Home">
        <div class="banner">
            <div class="inner-banner">
                <h1 v-html="Home.pageTitle"></h1>
                <div class="button-holder">
                    <a v-for="(button, index) in Home.buttons" :key="index" class="bttn has-icon" :class="button.icon" href="javascript:void(0)" :onClick="`JavaScript:$('#${button.navTarget}').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})`">{{button.text}}</a>
                </div>
                <a class="Arrow" href="javascript:void(0)" :onClick="`JavaScript:$('#${Home.navTarget}').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})`"></a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
      ...mapGetters([
          'Home',
      ])
  }
};
</script>
