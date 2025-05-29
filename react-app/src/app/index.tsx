import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LoginPage } from '../pages/login/login-page';
import setupLocatorUI from '@locator/runtime';

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
