import { authMockHandler } from '@/shared/apis/auth';
import { userMockHandler } from '@/shared/apis/user';
import { setupServer } from 'msw/node';

export const server = setupServer(
  // auth api
  ...authMockHandler,

  ...userMockHandler
);
