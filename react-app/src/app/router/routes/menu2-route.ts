import type { RouteObject } from 'react-router';
import { Menu2Page } from '../../../pages/menu2/menu2-page';
import type { MenuObject } from '../../../shared/ui/main-menu/main-menu';

export function getMenu2Menu(): MenuObject {
  return {
    path: '/menu2',
    title: 'Menu2',
  };
}

export function getMenu2Route(): RouteObject {
  return {
    path: '/menu2',
    Component: Menu2Page,
  };
}
