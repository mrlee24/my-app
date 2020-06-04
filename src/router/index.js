import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/',
    name: 'Profile',
    component: lazyLoad('Profile'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // check to see if route requires auth token
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if(user) {
      // user signed in, proceed to router
      next()
    } else {
      next({name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
