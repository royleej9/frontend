const routesDefault = [
  {
    path: '/',
    name: 'index',
    component: () =>
      import(/* webpackChunkName: "LoginView" */ '@login/LoginView.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@etc/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "LoginView" */ '@login/LoginView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "Main" */ '@main/MainView.vue'),
    children: []
  }
];

export default routesDefault;
