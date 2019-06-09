<template>
    <div class="page">
        <div class="page-item has-slime-2">
            <h1>{{pageTitle}}</h1>
            <h4>{{pageSub}}</h4>
            <p>{{pageDescription}}</p>
            <a class="bttn" href="javascript:void(0)" @click="goToLink({name: 'home'})">{{pageButton}}</a>
        </div><!-- page-item end -->
    </div><!-- page end -->                
</template>

<script>
export default {
    data(){
        return {
            pageTitle: `404`,
            pageSub: `Page not found`,
            pageDescription: `I'm sorry, But the page you are looking for doesn't exist`,
            pageButton: `Back to homepage`
        }
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
        background: url('~/images/page-bg.jpg') no-repeat center #000000;
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
