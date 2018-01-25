import Vue from 'vue';
import Vuex from 'vuex';
import storeCache from '../utils/storeCache';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
    },
    strict: debug,
    plugins: [storeCache(sessionStorage, 'magic')],
    mutations: {
    }
});
