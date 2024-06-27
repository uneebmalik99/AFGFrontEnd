// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        post: null,
    },
    mutations: {
        setPost(state, post) {
            state.post = post;
        },
    },
    actions: {
        updatePost({ commit }, post) {
            commit('setPost', post);
        },
    },
    getters: {
        post: (state) => state.post,
    },
});
