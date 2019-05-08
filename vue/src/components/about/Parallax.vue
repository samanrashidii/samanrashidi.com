<template>
    <div class="parallax has-shape shape-4-revert white-color center-aligned">
      <div class="parallax-layer">
        <strong v-html="parallaxTitle"></strong>
      </div><!-- parallax-layer end -->
    </div><!-- parallax end -->
</template>

<script>
export default {
    data(){
        return {
            parallaxTitle : `Intuitive Design Is How I Give The User <br /> New <span class="site-color">Superpowers</span>`
        }
    }
}
</script>
