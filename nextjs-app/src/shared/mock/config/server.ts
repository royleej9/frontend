import { authMockHandler } from '@/shared/apis/auth';
import { sampleMockHandler } from '@/shared/apis/sample';
import { userMockHandler } from '@/shared/apis/user';
import { setupServer } from 'msw/node';

export const server = setupServer(
  ...sampleMockHandler,
  // auth api
  ...authMockHandler,

  ...userMockHandler
);
