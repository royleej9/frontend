import 'normalize.css';
import '@assets/common.css';

import Vue from 'vue';
import App from '@/App.vue';
import router from '@router';
import store from '@store';
import globalViewMixin from '@libs/globalViewMixin.js';

// import DialogContainer from '@libs/dialog/DialogContainer.vue';

Vue.config.productionTip = false;
Vue.config.performance = process.env.NODE_ENV !== 'production';

// 공통 기능
globalViewMixin.setup(Vue);

// component
// Vue.component('dialog-container', DialogContainer);

// router/store
router.setup(Vue);
store.setup(Vue);

new Vue({
  router: router.getInstance(),
  // store: store.getInstance(),

  render: (h) => h(App),

  methods: {},

  beforeCreate() {},

  mounted() {},
}).$mount('#app');
