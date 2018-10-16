export default {
  addNumber({
    commit
  }, nb) {
    commit('ADD', nb)
  },
  minNumber({
    commit
  }, nb) {
    commit('MIN', nb)
  },
  changeBread({
    commit
  }, value) {
    commit('CHANGEBREAD', value)
  },
  cleanBread({
    commit
  }, value) {
    commit('CLERNEBREAD', value)
  }
}