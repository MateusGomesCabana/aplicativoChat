import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './AuthModule'
Vue.use(Vuex)
export default  new Vuex.Store({
    modules:{
        auth:AuthModule
    },
    state: {
      count: 0,
      message: 'message'
    },
    mutations: {
     
    }
  })