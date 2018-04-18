import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slides: []
  },
  mutations: {
    slides (state, data) {
      state.slides = data
    }
  },
  actions: {
    async getSlides ({commit}) {
    }
  }
})

export default store
