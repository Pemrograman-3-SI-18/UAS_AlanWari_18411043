
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: 'datawarga', component: () => import('pages/Admin/Home/DataWarga.vue') },
      { path: 'inputdatawarga', component: () => import('pages/Admin/Home/InputDataWarga.vue') }
    ]
  },

  {
    path: '/pengguna',
    component: () => import('layouts/PenggunaLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Pengguna/DataPenduduk/DataWarga.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]
// Always leave this as last one,
// but you can also remove it
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
