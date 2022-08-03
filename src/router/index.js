import { createRouter, createWebHashHistory } from 'vue-router'
import pageHero from '../cmps/page-hero.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: pageHero,
    },
  ]
})

export default router
