import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: () => import(/* webpackChunkName: "Splash" */ '../views/Splash.vue'),
    meta : {
      id: 0,
      layout: 'empty-layout'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta : {
      id: 1,
      layout: 'empty-layout'
    }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue'),
    meta : {
      id: 2,
      layout: 'empty-layout'
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "About" */ '../views/Posts.vue'),
    meta : {
      id: 3,
      layout: 'main-layout'
    }
  },
  {
    path: '/postPage',
    name: 'PostPage',
    component: () => import(/* webpackChunkName: "PostPage" */ '../views/PostPage.vue'),
    meta : {
      id: 4,
      layout: 'main-layout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
