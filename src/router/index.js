import { createRouter, createWebHistory } from 'vue-router'
const title = 'hackers54'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'главная' },
    component: () => import('../views/home/index.vue')
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   meta: { title: 'регистрация' },
  //   beforeEnter: authGuard,
  //   component: () => import('../views/signup/index.vue')
  // },
  // {
  //   path: '/signin',
  //   name: 'signin',
  //   meta: { title: 'вход' },
  //   beforeEnter: authGuard,
  //   component: () => import('../views/signin/index.vue')
  // },
  // {
  //   path: '/room/:id',
  //   name: 'room',
  //   meta: { title: 'комната' },
  //   beforeEnter: authGuard,
  //   component: () => import('../views/room/index.vue')
  // },
  { path: '/:pathMatch(.*)*', meta: { title: 'ошибка 404' }, component: () => import('../views/404/index.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeResolve((to, from, next) => {
  document.querySelector("title").textContent = `${title} - ${to.meta.title}`
  next()
})

export default router
