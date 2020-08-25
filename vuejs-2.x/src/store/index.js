import Vuex from 'vuex';
import modules from './modules';

let instance = null;
const _setup = function(Vue) {
  if (!instance) {
    Vue.use(Vuex);
    instance = new Vuex.Store({
      modules,
      strict: process.env.NODE_ENV !== 'production',
    });
  }
};

const store = {
  setup: _setup,

  getInstance() {
    if (instance) {
      return instance;
    } else {
      console.log('Please setup Vuex.store');
    }
  },
};

export default store;
