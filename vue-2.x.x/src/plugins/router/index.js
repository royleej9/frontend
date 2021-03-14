import Vue from 'vue';
import VueRouter from 'vue-router';
import routesDefault from '@router/routesDefault';
import i18n from '@i18n';
import { loadLanguageAsync } from '@i18n/i18nHelper.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'abstract',
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routesDefault
});
// router.beforeEach((to, from, next) => {
//   console.log('to', to);
//   console.log('from', from);
//   console.log('next', next);
//   next();
// });

// router.beforeEach((to, from, next) => {
//   console.log(i18n.locale);
//   const lang = i18n.locale;
//   loadLanguageAsync(lang).then(() => next());
//   // next();
// });

export default router;
