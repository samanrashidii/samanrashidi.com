<template>
    <div id="Home">
        <div class="banner">
            <div class="inner-banner">
                <h1 v-html="pageTitle"></h1>
                <div class="button-holder">
                    <a v-for="(button, index) in buttons" :key="index" class="bttn has-icon" :class="button.icon" href="javascript:void(0)" :onClick="button.click">{{button.text}}</a>
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
      buttons: [
        {
          icon: 'projects',
          click: `JavaScript:$('#Portfolio').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})`,
          text: 'View projects'
        },
        {
          icon: 'cart',
          click: `JavaScript:$('#ContactMe').animatescroll({scrollSpeed:1200,easing:'easeInExpo'})`,
          text: 'Order now'
        },
      ]
    };
  },
};
</script>
