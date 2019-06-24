<template>
    <div id="otherProjects">
        <div class="frame">
            <ul>
                <li v-for="project in selectedProjects" :key="project.url" :style="{backgroundImage : `url(${getImgUrl(project.thumb)})`}">
                    <router-link :to="{name: 'portfolio', params: {id : project.url}}"><strong>{{project.name}}</strong></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    props: {
        currentProject : {
            type : String
        }
    },
    computed: {
        ...mapGetters([
          'Projects'
        ]),
        selectedProjects(){
            const projects = this.Projects.filter(project => project.url != this.currentProject)
            return projects.sort(() => .5 - Math.random()).slice(0,3);
        }
    },
    watch:{
        $route(to, from){
            this.$route.params.id = to.params.id;
        }
    },
    methods: {
        getImgUrl(pic) {
            return require(`@/assets/images/portfolio/${pic}`);
        }
    }
};
</script>

<style scoped>

#otherProjects{
    color:#ffffff;
    text-align: center;
    padding:30px 0;
}

#otherProjects ul li{
    display: inline-block;
    vertical-align: top;
    width:100%;
    max-width:300px;
    height: 300px;
    margin:15px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #040404;
    background-size: cover;
    border:3px solid #040404;
    border-radius: 5px;
}

#otherProjects ul li a{
    display: inline-table;
    width: 100%;
    height: 100%;
    padding:10px;
    background:rgba(0,0,0,.15);
}

#otherProjects ul li a:hover{
    background:transparent;
}

#otherProjects ul li a strong{
    display: table-cell;
    vertical-align: middle;
    font-family: 'Effra-light';
    font-size: 30px;
}

@media only screen and (max-width:540px){
    #otherProjects{padding:13px 0;}
    #otherProjects ul li{
        max-width: 100%;
        margin:10px 0;
    }
}

</style>
