import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '@/views/PokemonView.vue'
import IndecisionComponent from '@/views/IndecisionComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: PokemonView
    },
    {
      path: '/indecision',
      name: 'indecision',
      component: IndecisionComponent
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: PokemonView
    }
  ]
})

export default router
