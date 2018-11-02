import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={count:0};//收藏的数量
import mutations from './mutations';
import getters from './getters';
const store = new Vuex.Store({
    state,
    mutations,
    getters
})
export default store;