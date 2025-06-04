import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  // react dom 초기화
  cleanup();
});

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
