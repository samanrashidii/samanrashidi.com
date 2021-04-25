import Vue from 'vue';
import Vuex from 'vuex';
import Saman from '@/assets/saman.json';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        saman: Saman
    },
    getters:{
        Owner: state => {
            return state.saman.website.Owner;
        },
        Menu: state => {
            return state.saman.website.Menu;
        },
        Home: state => {
            return state.saman.website.Home;
        },
        AboutMe: state => {
            return state.saman.website.AboutMe;
        },
        Parallax: state => {
            return state.saman.website.Parallax
        },
        Statistics: state => {
            return state.saman.website.Statistics
        },
        Portfolio: state => {
            return state.saman.website.Portfolio
        },
        Project: state => {
            return state.saman.website.Project
        },
        Contact: state => {
            return state.saman.website.Contact
        },
        Footer: state => {
            return state.saman.website.Footer
        },
        p404: state => {
            return state.saman.website.p404
        },
        Projects: state => {
            return state.saman.portfolio
        },
        Certificates: state => {
            return state.saman.certificates
        }
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        
    }
});