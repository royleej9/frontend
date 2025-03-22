export const pagePath = {
  root() {
    return '/';
  },
  logn() {
    return this.root();
  },
  dashboard() {
    return this.root().concat('dashboard');
  },
  main() {
    return this.root().concat('main');
  },
};
