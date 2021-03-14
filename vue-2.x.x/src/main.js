import Vue from 'vue';
import App from '@src/App.vue';
import router from '@router';
import store from '@store';
import i18n from '@i18n';
import '@plugins/quasar';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {}
}).$mount('#app');
