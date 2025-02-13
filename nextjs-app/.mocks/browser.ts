import { setupWorker } from 'msw/browser';
import loginAPIHandler from './apis/auth/loginAPIHandler';

export const worker = setupWorker(
  // auth api
  ...loginAPIHandler
);
