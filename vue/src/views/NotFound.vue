<template>
    <div class="page">
        <div class="page-item has-slime-2">
            <h1>404</h1>
            <h4>Page not found</h4>
            <p>I'm sorry, But the page you are looking for doesn't exist</p>
            <a class="bttn" href="javascript:void(0)" @click="goToLink({name: 'home'})">Back to homepage</a>
        </div><!-- page-item end -->
    </div><!-- page end -->                
</template>

<script>
export default {
    methods: {
        goToLink(linkName){
            this.$router.push(linkName)
        }
    }
}
</script>

