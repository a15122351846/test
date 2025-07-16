import { createRouter, createWebHistory } from 'vue-router'
import echart1 from '../page/echart1.vue'

const routes = [
    {
      path: '/page',
      name: 'Page',
      component: echart1
    }
]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router