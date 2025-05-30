import { createBrowserRouter, RouterProvider } from 'react-router';
import { getRoutes } from './routes';

const browserRouter = createBrowserRouter(getRoutes());

export function BrowserRouter() {
  return <RouterProvider router={browserRouter} />;
}
