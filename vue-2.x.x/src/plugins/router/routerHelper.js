import routesMenu from '@router/routesMenu';

export function getAllowedRouteMenus(userPrivilege) {
  console.log(routesMenu);
  const menus = [];
  routesMenu.forEach((item) => {
    const menu = {
      name: item.name,
      title: item.meta.title
    };
    menus.push(menu);
  });

  return menus;
}
