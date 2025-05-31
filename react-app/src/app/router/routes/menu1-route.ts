import type { RouteObject } from 'react-router';
import { SubMenu1Page } from '../../../pages/menu1/sub-menu1/sub-menu1-page';
import { SubMenu2Page } from '../../../pages/menu1/sub-menu2/sub-menu1-page';
import { NotFoundPage } from '../../../pages/not-found-page';
import type { MenuObject } from '../../../shared/ui/main-menu/main-menu';

export function getMenu1Menu(): MenuObject {
  return {
    title: 'Menu1',
    children: [
      { path: '/menu1/sub-menu1', title: 'Sub menu1' },
      { path: '/menu1/sub-menu2', title: 'Sub menu2' },
    ],
  };
}

export function getMenu1Route(): RouteObject {
  return {
    path: '/menu1',
    children: [
      { index: true, Component: NotFoundPage },
      { path: 'sub-menu1', Component: SubMenu1Page },
      { path: 'sub-menu2', Component: SubMenu2Page },
    ],
  };
}
