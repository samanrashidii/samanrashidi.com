<template>
    <div class="parallax has-shape shape-4-revert white-color center-aligned">
      <div class="parallax-layer">
        <strong v-html="parallaxTitle"></strong>
      </div><!-- parallax-layer end -->
    </div><!-- parallax end -->
</template>

<script>
export default {
  data() {
    return {
      parallaxTitle: 'Intuitive design is how I give the user <br /> new <span class="site-color uppercased">Superpowers</span>',
    };
  },
};
</script>
