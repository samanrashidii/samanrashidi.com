import Vue from 'vue';
import Vuex from 'vuex';
import Website from '@/assets/saman.json';
import PortfolioItems from '@/assets/portfolio.json';
import Certificates from '@/assets/certificates.json';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        website: Website,
        portfolios: PortfolioItems,
        certificates: Certificates
    },
    getters:{
        Owner: state => {
            return state.website.Owner;
        },
        Menu: state => {
            return state.website.Menu;
        },
        Home: state => {
            return state.website.Home;
        },
        AboutMe: state => {
            return state.website.AboutMe;
        },
        Parallax: state => {
            return state.website.Parallax
        },
        Samanira: state => {
            return state.website.Samanira
        },
        Statistics: state => {
            return state.website.Statistics
        },
        Portfolio: state => {
            return state.website.Portfolio
        },
        Project: state => {
            return state.website.Project
        },
        Contact: state => {
            return state.website.Contact
        },
        Footer: state => {
            return state.website.Footer
        },
        Projects: state => {
            return state.portfolios
        },
        Certificates: state => {
            return state.certificates
        }
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        
    }
});