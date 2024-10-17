//   This file is part of eni-capitulo-demo.
//
//   eni-capitulo-demo is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   eni-capitulo-demo is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with eni-capitulo-demo. If not, see <https://www.gnu.org/licenses/>.

import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicio from '../views/PaginaInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PaginaInicio,
  },
  {
    path: '/creditos',
    name: 'Créditos',
    component: () => import('@/views/PaginaCreditos.vue'),
  },
  {
    path: '/creditos/:id',
    name: 'Créditos / Investigadora',
    component: () => import('@/views/PaginaInvestigadora.vue'),
  },
  {
    path: '/otra-vista',
    name: 'Otra Vista',
    component: () => import('@/views/PaginaOtraVista.vue'),
  },
  {
    path: '**',
    name: 'pagina-no-encontrada',
    component: () => import('@/views/ErrorPaginaNoEncontrada.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' }
  },
})

// Muestra el título de la página dependiendo de las vistas
router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`
  next()
})

export default router
