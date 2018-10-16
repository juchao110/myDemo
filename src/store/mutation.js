const ADD = 'ADD'
const MIN = 'MIN'
const CHANGEBREAD = 'CHANGEBREAD'
const CLERNEBREAD = 'CLERNEBREAD'
const CHANGETITLE = 'CHANGETITLE'

export default {
  [ADD](state, nb) {
    state.number += nb
  },
  [MIN](state, nb) {
    state.number -= nb
  },
  [CHANGEBREAD](state, value) {
    state.bread.push(value)
  },
  [CLERNEBREAD](state, value) {
    state.bread = value
  },
  [CHANGETITLE](state, value) {
    state.title = value
  }
}