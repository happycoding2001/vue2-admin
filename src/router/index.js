import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'/main',
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/main.vue'),
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
      },
    ]
  },
  



  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
