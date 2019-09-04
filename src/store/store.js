import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // satet, getters, mutations, actions 
    state: {
        email: 'abrar@gmail.com'
    },

    getters: {
        getEmail(state) {
            return state.email;
        }
    },
    mutations: {
        setEmail(state, email) {
            console.log(email)
            state.email = email;
        }
    }


});