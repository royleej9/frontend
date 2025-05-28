import { authMockHandler } from '@/shared/apis/auth';
import { sampleMockHandler } from '@/shared/apis/sample';
import { userMockHandler } from '@/shared/apis/user';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(
  ...sampleMockHandler,
  // auth api
  ...authMockHandler,
  ...userMockHandler
);
