import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FolderDetails from '../views/FolderDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/folders/:uuid',
    name: 'FolderDetails',
    component: FolderDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
