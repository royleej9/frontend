import type { RouteObject } from 'react-router';
import { getMenu1Menu, getMenu1Route } from './menu1-route';
import { getMenu2Menu, getMenu2Route } from './menu2-route';
import { NotFoundPage } from '../../../pages/not-found-page';
import { LoginPage } from '../../../pages/login/login-page';
import { UserLayout } from '../../../shared/ui/layout/user-layout';
import { DashboardPage } from '../../../pages/dashboard/dashboard-page';
import type { MenuObject } from '../../../shared/ui/main-menu/main-menu';

/**
 * 기본 route 정보
 */
const defaultRoutes: RouteObject[] = [
  {Component: }
  { path: '*', Component: NotFoundPage },
  { path: '/', Component: LoginPage },
];

/**
 * 로그인한 사용자의 route 정보
 * @returns
 */
function getLoggedInUserRoute(): RouteObject {
  return {
    Component: UserLayout,
    children: [
      { path: '/dashboard', Component: DashboardPage },
      getMenu1Route(),
      getMenu2Route(),
    ],
  };
}

/**
 * 로그인한 사용자의 메뉴 정보
 * @returns
 */
export function getLoggedInUserMenu(): MenuObject[] {
  return [
    {
      title: 'dashboard',
      path: '/dashboard',
    },
    getMenu1Menu(),
    getMenu2Menu(),
  ];
}

/**
 * 전체 route 정보 반환
 * @returns
 */
export function getRoutes(): RouteObject[] {
  // const route: RouteObject = defaultRoutes.push(getUserRoute());
  return [...defaultRoutes, getLoggedInUserRoute()];
}
