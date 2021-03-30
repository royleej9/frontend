import routesMenu from '@router/routesMenu';
import _ from 'lodash';

export function getAllowedRoutes(userPrivilege) {
  const routes = getAllowedRoutesMenu(userPrivilege, routesMenu);
  return {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "Main" */ '@main/MainView.vue'),
    children: routes
  };
}

function getAllowedRoutesMenu(userPrivilege, routes) {
  const allowedRoutes = [];
  for (const route of routes) {
    if (route['children'] === undefined) {
      if (!isNotAllowedPrivilege(userPrivilege, route)) {
        allowedRoutes.push(route);
      }
    } else {
      route.children = getAllowedRoutesMenu(userPrivilege, route.children);
      if (route.children.length > 0) {
        allowedRoutes.push(route);
      }
    }
  }
  return allowedRoutes;
}

// export function getAllowedMenu(userPrivilege) {
//   const menus = getMenus(routesMenu, userPrivilege);
//   return menus;
// }

// function getMenus(routesMenu, userPrivilege) {
//   const menus = [];
//   routesMenu.forEach((item) => {
//     if (isNotAllowedMenu(item, userPrivilege)) {
//       return;
//     }

//     const menu = {
//       name: item.name,
//       title: item.meta.title
//     };

//     if (item['children'] !== undefined) {
//       menu['children'] = getMenus(item.children, userPrivilege);
//       if (menu['children'].length > 0) {
//         menus.push(menu);
//       }
//     } else {
//       menus.push(menu);
//     }
//   });

//   return menus;
// }

function isNotAllowedPrivilege(userPrivilege, route) {
  const privileges = route.meta.allowedUserPrivileges;
  return privileges !== undefined && privileges.indexOf(userPrivilege) === -1;
}
