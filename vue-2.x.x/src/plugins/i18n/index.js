import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messagesKO from '@i18n/lang/en';
import { addI18nLanguage, setI18nLanguage } from '@i18n/i18nHelper';

Vue.use(VueI18n);

const i18n = new VueI18n({
  fallbackLocale: 'en'
});
export default i18n;

// add default message
addI18nLanguage('en', messagesKO);

// set default lang
setI18nLanguage('en');
