import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action.js'
import mutations from './mutation.js'
import getters from './getters.js'
Vue.use(Vuex);
const state = {
  number: 1,
  title: '',
  bread: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})