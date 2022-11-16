import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';

const routes = [
  {path: '/', name: 'Home', component: HomePage},
  {path: '/game/:id', component: ()=>import('../views/GamePage.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router