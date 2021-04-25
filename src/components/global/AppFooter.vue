<template>
    <div id="footer" class="has-shape shape-4 center-aligned">
        <div class="frame">
            <a
                :href="Footer.url"
            >
                <img
                    :src="getImgUrl(Footer.logo)"
                    :alt="Footer.alt"
                >
            </a>
            <span
                v-html="Footer.copyright"
            />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
      ...mapGetters([
          'Footer'
      ])
    },
    methods: {
        getImgUrl(pic) {
            return require(`@/assets/images/${pic}`)
        }
    }
}
</script>
