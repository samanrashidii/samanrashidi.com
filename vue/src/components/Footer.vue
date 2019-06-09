<template>
    <div id="footer" class="has-shape shape-4 center-aligned">
        <div class="frame">
            <a :href="url"><img :src="logo" :alt="alt" /></a>
            <span v-html="copyright"></span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            url: 'http://www.samanrashidi.com',
            logo: '/images/logo.png',
            alt: 'SamanirA Logo',
            copyright: `Copyright © 2017 <a itemprop="url" href="http://www.samanrashidi.com">${this.store.webAuthorFullName}</a>. All rights reserved`
        }
    }
};
</script>
