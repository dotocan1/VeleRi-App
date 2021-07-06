import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

import { auth } from 'boot/VeleriAppSetup'

// eslint-disable-next-line
import * as Vue from 'vue'

// eslint-disable-next-line
const app = Vue.createApp({})

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const isUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeOnAuthStateChanged =
   auth.onAuthStateChanged(theUser => {
     resolve(theUser)
     unsubscribeOnAuthStateChanged()
   }, err => {
     console.error(err)
     resolve(null)
     unsubscribeOnAuthStateChanged()
   })
  })
}

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from, next) => {
    console.log(auth.currentUser)
    if (to.matched.some(record => record.meta.auth)) {
      await isUserLoggedIn()
        .then(res => {
          if (res) {
            next()
          } else {
            next('/')
          }
        })
    } else {
      next()
    }
  })
  return Router
})
