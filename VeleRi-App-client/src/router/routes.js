const routes = [
  {
    path: '/Login',
    component: () => import('layouts/LoginPageLayout.vue'),
    children: [
      { path: '/Login', component: () => import('pages/Login/LoginIndex.vue') },
      { path: '/Registration', component: () => import('pages/Login/Registration.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Home', component: () => import('pages/Home.vue') },
      { path: 'Professor/:id', component: () => import('pages/Professor.vue') },
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/QRCodeScanner', component: () => import('pages/QRCodeScanner.vue') },
      { path: '/Administration', component: () => import('pages/Administration.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
