import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

/**
 * 언어 타입
 */
export const LANG_TYPE = {
  KO: 'ko',
  EN: 'en',
} as const;

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    // lng: LANG_TYPE.KO, //  localStorage > htmlTag > fallbackLng  순서로 자동 체크 detection.order
    fallbackLng: LANG_TYPE.EN,
    ns: ['common', 'login', 'dashboard'], // 사이트 접속시 자동으로 해당 json 로딩
    defaultNS: 'common', // 기본 namespace 지정
    react: {
      useSuspense: true, // React.Suspense와 연동하여 번역 로딩 중 로딩 화면 표시
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // I18nextBrowserLanguageDetector
    detection: {
      order: ['localStorage', 'htmlTag'],
      lookupLocalStorage: 'lang',
    },
  });
