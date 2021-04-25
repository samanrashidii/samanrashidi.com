<template>
    <div
      class="parallax has-shape shape-4-revert white-color center-aligned"
      :style="{backgroundImage : `url(${getImgUrl(Parallax.background)})`}"
    >
      <div
        class="parallax-layer"
      >
        <div
          class="parallax-box"
        >
          <strong
            v-html="Parallax.text"
          />
          <p>" {{ Parallax.author }} "</p>
        </div>
      </div><!-- parallax-layer end -->
    </div><!-- parallax end -->
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
        'Parallax'
    ])
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/images/${pic}`)
    }
  }
}
</script>
