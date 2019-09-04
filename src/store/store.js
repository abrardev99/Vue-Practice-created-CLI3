import Vue from 'vue';
import Vuex from 'vuex';
import axs from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    // satet, getters, mutations, actions 
    state: {
        email: 'dummy@gmail.com'
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
    },

    // now what if I want to fecth user email from server and store it gloablly, 
    // we can not do ayshrouns tasks in mutations, but we can in actions.

    actions: {
        setEmailFromServer(context) {
            axs.get(process.env.VUE_APP_USER_BASE_URL + "/3").then(res => {
                let email = res.data.data.email;
                // call mutation here 
                context.commit('setEmail', email)
            });

        }
    }


});