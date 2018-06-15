
export default {
  updateCollapse ({ commit, state }, payload) {
    commit('UPDATE_COLLAPSE', payload)
  },
  updateHeaderTitle ({ commit, state }, payload) {
    commit('UPDATE_HEADERTITLE', payload)
  }
}
