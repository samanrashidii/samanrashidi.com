<template>
    <div class="page">
        <div class="page-item has-slime-2">
            <h1>{{p404.pageTitle}}</h1>
            <h4>{{p404.pageSub}}</h4>
            <p>{{p404.pageDescription}}</p>
            <a class="bttn" href="javascript:void(0)" @click="goToLink({name: 'home'})">{{p404.pageButton}}</a>
        </div><!-- page-item end -->
    </div><!-- page end -->                
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    metaInfo: {
        title : 'Saman Rashidi ~ Page not found',
        meta: [
            {
                vmid : 'description',
                name : 'description',
                content : 'Requested page not found (404 Error)'
            },
            {
                vmid : 'og:title',  
                name : 'og:title',
                content : 'Saman Rashidi ~ Page not found'
            },
            {
                vmid : 'og:description',  
                name : 'og:description',
                content : 'Requested page not found (404 Error)'
            },
            {
                vmid : 'og:url',
                name : 'og:url',
                content : 'http://www.samanrashidi.com/404'
            },
            {
                vmid : 'twitter:title',
                name : 'twitter:title',
                content : 'Saman Rashidi ~ Page not found'
            },
            {
                vmid : 'twitter:description',
                name : 'twitter:description',
                content : 'Requested page not found (404 Error)'
            },
            {
                vmid : 'twitter:url',
                name : 'twitter:url',
                content : 'http://www.samanrashidi.com/404'
            }
        ]
    },
    computed: {
        ...mapGetters([
        'p404',
        ])
    },
    methods: {
        goToLink(linkName){
            this.$router.push(linkName)
        }
    }
}
</script>

<style scoped>
    .page{
        display: table;
        width: 100%;
        height: 100%;
        background: url('../assets/images/page-bg.jpg') no-repeat center #000000;
        background-size: cover;
    }

    .page-item{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        color:#ffffff;
        padding:15px;
    }

    .page h1{
        font-size: 150px;
        color:#0a9abd;
    }

    .page h4{
        font-size: 50px;
        margin-top:-20px;
    }

    .page .bttn{margin-top:50px;}

    .page p{
        color:#cfcfcf;
        padding-top:30px;
    }    
</style>
