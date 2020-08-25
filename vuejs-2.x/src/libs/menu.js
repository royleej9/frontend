import router from '@router';
import { getAllowedMenus } from '@router/route-menu';

export default {
  openMenuByPath(path, query) {
    router.getInstance().push({ path: path, query: query });
  },

  openMenuByName(name, params) {
    router.getInstance().push({ name: name, params: params });
  },

  getCurrentMenu() {
    return router.getInstance().currentRoute;
  },

  setAllowedMenus(auth) {
    const mainMenus = getAllowedMenus();
    return router.getInstance().addRoutes(mainMenus);
  },
  getAllowedMenus(auth) {
    return getAllowedMenus(auth);
  },
};
