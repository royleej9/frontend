import { render } from '@testing-library/react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import {
  createMemoryRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router';
import { LANG_TYPE } from '../i18n';
import i18next, { type i18n } from 'i18next';
import path from 'path';
import { mergeLocalesToJson } from '../i18n/merge-locales';

// 다국어 locales 폴더 경로
const LOCALES_DIR = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'public',
  'locales'
);

/**
 * 테스트용 i18n 생성
 * @returns i18n
 */
export function getI18nMock() {
  const resources = mergeLocalesToJson(LOCALES_DIR);
  i18next.use(initReactI18next).init({
    lng: LANG_TYPE.EN,
    fallbackLng: LANG_TYPE.EN,
    ns: ['common', 'login'], // 사이트 접속시 자동으로 해당 json 로딩
    defaultNS: 'common', // 기본 namespace 지정
    resources,
  });

  return i18next;
}

/**
 * 테스트를 위해 render된 router
 * @param {string} path 호출 url
 * @param {RouteObject[]} routes route 정보
 * @param i18n i18n 인스턴스
 * @returns
 */
export async function renderWithRoutes(
  path: string,
  routes: RouteObject[],
  i18n?: i18n
) {
  if (!i18n) {
    i18n = getI18nMock();
  }

  // 1. 코드에서 navigate를 사용하여 페이지 이동시 화면 테스트 가능
  // ex) useNavigate/navigate('/dashboard')
  // return render(
  //   <I18nextProvider i18n={i18n}>
  //     <MemoryRouter initialEntries={[path]}>
  //       <Routes>
  //         <Route path="/" element={<LoginPage />} />
  //         <Route path="/dashboard" element={<DashboardPage />} />
  //       </Routes>
  //     </MemoryRouter>
  //   </I18nextProvider>
  // );

  // 2. 코드에서 navigate를 사용하여 페이지 이동 테스트가 안됨 > 설정 방법 찾지 못함
  //    - 화면 렌더링이 아닌 useNavigate/navigate를 사용하여 호출하는 경로 값만 비교 테스트함
  //    - test-setup.ts, login-page.test.tsx 참고
  const memoryRouter = createMemoryRouter(routes, {
    initialEntries: [path],
  });
  return render(
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={memoryRouter} />
    </I18nextProvider>
  );
}
