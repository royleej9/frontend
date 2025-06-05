import { setupServer } from 'msw/node';
import authMockHandler from '../../../apis/auth/auth-mock-handler';

// nextjs, vitest 등 mock api를 만들어 테스트 할 때
export const serverWorker = setupServer(
  // auth
  ...authMockHandler
);
