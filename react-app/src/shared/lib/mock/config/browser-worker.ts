import { setupWorker } from 'msw/browser';
import authMockHandler from '../../../apis/auth/auth-mock-handler';

// 브라우저에서 호출하는 API에 대해서 mock api를 만들어 테스트 할 때
export const browserWorker = setupWorker(
  // auth
  ...authMockHandler
);
