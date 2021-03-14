/**
 * 다국어 파일이 js인 경우 언어 키 ('en', 'ko') 를 message에 삽입하지 않기 위해 수정
 *
 * Lazy loading translations 예제 수정
 * https://kazupon.github.io/vue-i18n/guide/lazy-loading.html
 */

import i18n from '@i18n';
import axios from 'axios';

// our default language that is preloaded
const loadedLanguages = [];

/**
 *
 * @param {String} lang 'en', 'ko' ....
 * @returns
 */
export function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

/**
 *
 * @param {String} lang 'en', 'ko' ....
 * @param {Object} message
 */
export function addI18nLanguage(lang, message) {
  i18n.setLocaleMessage(lang, message);
  loadedLanguages.push(lang);
}

/**
 *
 * @param {String} lang 'en', 'ko' ....
 * @returns
 */
export function loadLanguageAsync(lang) {
  // If the same language or the language was already loaded
  if (i18n.locale === lang || loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language hasn't been loaded yet
  return import(
    /* webpackChunkName: "lang-[request]" */ `@i18n/lang/${lang}.json`
  ).then((messages) => {
    addI18nLanguage(lang, messages.default);
    return setI18nLanguage(lang);
  });
}

/**
 *
 * @param {String} lang
 * @returns
 */
export function changeLocale(lang) {
  return Promise.resolve(loadLanguageAsync(lang));
}
