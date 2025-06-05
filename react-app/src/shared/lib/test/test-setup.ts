import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { serverWorker } from '../mock/config/server-worker';

beforeAll(() => serverWorker.listen());

afterEach(() => {
  // react dom 초기화
  cleanup();
  // serverWorker.resetHandlers();
});

afterAll(() => serverWorker.close());

// react-router의 useNavigate, useLocation 메소드 재정의
type ReactRouterDom = typeof import('react-router');
vi.mock('react-router', async (importOriginal): Promise<ReactRouterDom> => {
  const reactRouterDom = await importOriginal<ReactRouterDom>();
  return {
    ...reactRouterDom,
    useNavigate: vi.fn().mockImplementation(reactRouterDom.useNavigate),
    useLocation: vi.fn().mockImplementation(reactRouterDom.useLocation),
  };
});
