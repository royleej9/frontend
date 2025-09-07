import { createBrowserRouter, RouterProvider } from 'react-router';
import { getRoutes } from './routes';

const browserRouter = createBrowserRouter(getRoutes());

export function BrowserRouter() {
  console.log('BrowserRouter!!!!!');

  return <RouterProvider router={browserRouter} />;
}
