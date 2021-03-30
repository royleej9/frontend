import router from '@router';

const menuManager = {
  openMenu(path) {
    router.push(path);
  },
  closeMenu() {},
  closeAllMenu() {}
};

export default menuManager;

export function getAllowedMenus() {}
