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

/**
 * i18next 초기화 실행
 * 최초 접속시 렌더링 후 i18next에서 json 파일을 로딩하면서 재 렌더링을 실행함
 * debug 설정을 보면서 로그 확인 필요
 * i18next-browser-languagedetector - 브라우저 언어 자동 선택, 로컬 스토리지 저장 (key: lang)
 */
export async function setupI18n() {
  return i18next
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
      lng: '',
      debug: process.env.NODE_ENV === 'development',
      // lng: LANG_TYPE.EN,
      fallbackLng: LANG_TYPE.EN,
      ns: ['common'], // 사이트 접속시 자동으로 해당 json 로딩
      defaultNS: 'common', // 기본 namespace 지정
      react: {
        useSuspense: true, // React.Suspense와 연동하여 번역 로딩 중 로딩 화면 표시
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      // I18nextBrowserLanguageDetector
      detection: {
        order: ['localStorage'],
        lookupLocalStorage: 'lang',
      },
    });
}
