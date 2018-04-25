import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action.js'

Vue.use(Vuex);

const state = {
  payContainer:{}
};
const getters = {
  
}
export default new Vuex.Store({
  state,
  getters, 
  mutations,
  actions

})

