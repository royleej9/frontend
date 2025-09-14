import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/app/stores/authStore';

import routes from './routes';
// router meta 확장하기
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  // console.log(`to: ${to.fullPath} / from: ${from.fullPath}`);

  // 1. 로그인 검증 필요 없는 경우 || 로그인을 한 경우
  // 해당 페이지로 이동
  if (!to.meta.requiresAuth) {
    next();
  } else {
    const authStore = useAuthStore();
    // 인증된 경우 페이지로 이동
    if (authStore.isLoggedIn) {
      next();
    } else {
      // 서버 인증 체크 - F5/페이지 재로딩 등 대비
      const isLoggedIn = await authStore.checkSession();
      if (isLoggedIn) {
        next({ name: 'init' });
      } else {
        next({ name: 'login' });
      }
    }
  }
});

export default router;
