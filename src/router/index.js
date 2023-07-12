import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect:'/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/main.vue'),
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
      },
      {
        path: 'mall',
        name: 'mall',
        component: () => import(/* webpackChunkName: "mall" */ '../views/mall.vue')
      },
      {
        path: 'page1',
        name: 'page1',
        component: () => import(/* webpackChunkName: "pageOne" */ '../views/pageOne.vue')
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "pageTwo" */ '../views/pageTwo.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
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
