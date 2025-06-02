import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  // react dom 초기화
  cleanup();
});
