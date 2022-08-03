import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from '../views/main-page.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
    },
  ]
})

export default router
