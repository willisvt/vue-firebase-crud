import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import Board from '@/views/Board.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/board/',
    name: 'Board',
    component: Board
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
