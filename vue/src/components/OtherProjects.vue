<template>
    <div id="otherProjects">
        <div class="frame">
            <ul>
                <li v-for="(project, index) in selectedProjects" :key="index" :style="{backgroundImage : `url(${getImgUrl(project.thumb)})`}">
                    <router-link :to="{name: 'portfolio', params: {id : project.url}}"><strong>{{project.name}}</strong></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projectitems : {
            type : Array
        },
        currentProject : {
            type : String
        },
    },
    data(){
        return {
            projects: []
        }
    },
    computed: {
        selectedProjects(){
            for (let i in this.projectitems) {
                if(this.projectitems[i].url == this.currentProject){
                    this.projectitems.splice(i, 1)
                }
            }
            return this.projectitems.sort(() => .5 - Math.random()).slice(0,3);
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
        #otherProjects ul li{margin:10px 0;}
    }
</style>
