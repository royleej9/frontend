import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import setupLocatorUI from '@locator/runtime';
import { BrowserRouter } from './router/router-provider';
import { setupI18n } from '../shared/lib/test/i18n';

if (process.env.NODE_ENV === 'development') {
  await setupLocatorUI();
}

setupI18n().finally(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter />
    </StrictMode>
  );
});
