<template>
    <div id="Home">
        <div class="banner">
            <div class="inner-banner">
                <h1 v-html="pageTitle"></h1>
                <div class="button-holder">
                    <a class="bttn has-icon projects" href="javascript:void(0)" onClick="JavaScript:$('#Portfolio').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})">View projects</a>
                    <a class="bttn has-icon cart" href="javascript:void(0)" onClick="JavaScript:$('#ContactMe').animatescroll({scrollSpeed:2200,easing:'easeInExpo'})">Order now</a>
                </div>
                <a class="Arrow" href="javascript:void(0)" onClick="JavaScript:$('#About').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'stand out with a <span class="site-color uppercased">modern</span> website',
    };
  },
};
</script>
