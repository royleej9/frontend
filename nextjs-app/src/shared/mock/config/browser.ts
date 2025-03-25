import { authMockHandler } from '@/shared/apis/auth';
import { userMockHandler } from '@/shared/apis/user';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(
  // auth api
  ...authMockHandler,
  ...userMockHandler
);
