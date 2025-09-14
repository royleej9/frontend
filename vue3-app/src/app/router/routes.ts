import InitPage from '@/pages/init/InitPage.vue';
import LoginPage from '@/pages/login/LoginPage.vue';
import NotFoundPage from '@/pages/notfound/NotFoundPage.vue';
import MainLayout from '../layouts/MainLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFoundPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../../pages/dashboard/DashboardPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/menu1',
        name: 'menu1',
        component: () => import('../../pages/menu1/Menu1Page.vue'),
        meta: { requiresAuth: true },
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/init',
    name: 'init',
    component: InitPage,
    meta: { requiresAuth: true },
  },
];

export default routes;
