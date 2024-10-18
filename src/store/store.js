import { createStore } from "vuex";

export default createStore({
    state: {
        isAuthenticated: false,
        user: null,
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        login ({ commit }, user) {
            commit('isAuthentication', true);
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('isAuthentication', false);
            commit('setUser', null);
        },
    },
});