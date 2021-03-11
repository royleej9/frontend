import LoginView from '@login/LoginView.vue';

const routesDefault = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/guide',
    name: 'guide',
    component: () =>
      import(/* webpackChunkName: "guide" */ '@guide/GuideView.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ '@views/main/MainView.vue'),
    children: [],
  },
];

export default routesDefault;
