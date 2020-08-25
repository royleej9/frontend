const menus = [
  {
    path: '/menu1',
    name: 'menu1',
    component: () =>
      import(/* webpackChunkName: "menu1" */ '@menu1/Menu1View.vue'),
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: () =>
      import(/* webpackChunkName: "menu2" */ '@menu2/Menu2View.vue'),
  },
  {
    path: '/menu3',
    name: 'menu3',
    component: () =>
      import(/* webpackChunkName: "menu3" */ '@menu3/Menu3View.vue'),
  },
];

export function getAllowedMenus() {
  const mainMenus = {
    path: '/main',
    name: 'main',
    // meta: { whiteAuths: [0, 1] },
    component: () =>
      import(/* webpackChunkName: "main" */ '@main/MainView.vue'),
    children: menus,
  };

  return [mainMenus];
}
