import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        value: 0
    },
    getters:{
        value: state => {
            return state.value;
        }
    },
    mutations:{
        updateValue: (state, value) =>{
            state.value = value;
        }
    },
    actions:{
        updateValue: ({commit}, value) =>{
            commit('updateValue', value);
        }
    }
});