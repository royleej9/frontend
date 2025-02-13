import { setupServer } from 'msw/node';
import loginAPIHandler from './apis/auth/loginAPIHandler';

export const server = setupServer(
  // auth api
  ...loginAPIHandler
);
