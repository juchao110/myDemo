import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import One from '@/pages/page1'
import Two from '@/pages/page2'
import Three from '@/pages/page3'
import Four from '@/pages/page4'
import Five from '@/pages/page5'
import Six from '@/pages/page6'
import Seven from '@/pages/page7'
import Eight from '@/pages/page8'
import Nine from '@/pages/page9'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      component: One,
      meta: {
        title: "one"
      },
      children: [{
          path: 'two',
          component: Two,
          meta: {
            title: "two"
          },
        },
        {
          path: 'three',
          components: {
            default: '',
            three: Three,
            six: Six
          },
          meta: {
            title: "three"
          },
        },
        {
          path: 'four',
          component: Four,
          meta: {
            title: "four"
          },
        },
        {
          path: 'five',
          component: Five,
          meta: {
            title: "five"
          },
        }
      ]
    }
  ]
})