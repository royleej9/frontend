import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import setupLocatorUI from '@locator/runtime';
import { BrowserRouter } from './router/router-provider';
import { BrowserAPIMock } from '../shared/lib/mock';
import '../shared/lib/i18n';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  await setupLocatorUI();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserAPIMock enabledMocking={isDev}>
      <BrowserRouter />
    </BrowserAPIMock>
  </StrictMode>
);
