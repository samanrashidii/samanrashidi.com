<template>
    <div id="Home">
        <div
            class="banner"
            :style="{backgroundImage : `url(${getImgUrl(Home.pageBanner)})`}"
        >
            <div
                class="inner-banner"
            >
                <h1
                    v-html="Home.pageTitle"
                />
                <p
                    v-html="Home.pageSubTitle"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
      ...mapGetters([
          'Home'
      ])
  },
  methods: {
    getImgUrl(pic) {
        return require(`@/assets/images/${pic}`)
    }
  }
}
</script>
