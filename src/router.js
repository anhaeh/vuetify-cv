import Vue from 'vue'
import Router from 'vue-router'
/** Views **/
import Home from './views/Home.vue'
import Employment from './views/Employment.vue'
import Skills from './views/Skills.vue'
import Education from './views/Education.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/employment',
        name: 'employment',
        component: Employment
    },
      {
          path: '/education',
          name: 'education',
          component: Education
      },
      {
          path: '/skills',
          name: 'skills',
          component: Skills
      },
      {
          path: '*',
          meta: {
              public: true,
          },
          redirect: {
              path: '/404'
          }
      },
      {
          path: '/404',
          meta: {
              public: true,
          },
          name: 'not_found',
          component: () => import(`@/views/NotFound.vue`)
      },
  ]
})
