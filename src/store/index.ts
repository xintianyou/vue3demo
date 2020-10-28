import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  mutations: {
    addCount(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
