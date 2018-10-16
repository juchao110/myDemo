import Vue from 'vue'
import router from './index.js'
import store from '../store'

router.beforeEach((to, from, next) => {
  store.commit('CLERNEBREAD', [])
  for (let i in to.matched) {
    store.commit('CHANGEBREAD', {
      path: to.matched[i].path,
      title: to.matched[i].meta.title
    })
  }
  next()
})