import VueRouter from 'vue-router';
import routeDefault from '@router/route-default.js';

let instance = null;

function _setup(Vue) {
  if (!instance) {
    Vue.use(VueRouter);
    instance = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: routeDefault,
    });
  }
}

const router = {
  setup: _setup,

  getInstance() {
    if (instance) {
      return instance;
    } else {
      console.log('Please setup router');
    }
  },
};

export default router;
