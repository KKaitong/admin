const UPDATE_COLLAPSE = 'UPDATE_COLLAPSE'
const UPDATE_LOADING = 'UPDATE_LOADING'

// [k](){} 防止有多层的
export default {
  [UPDATE_COLLAPSE] (state, payload) {
    state.isCollapse = payload
  },
  [UPDATE_LOADING] (state, payload) {
    state.isLoading = payload
  }
}
