import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import setupLocatorUI from '@locator/runtime';
import { BrowserRouter } from './router/router-provider';

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter />
  </StrictMode>
);
