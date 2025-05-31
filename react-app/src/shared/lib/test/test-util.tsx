import { render } from '@testing-library/react';
import {
  createMemoryRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router';

/**
 * render된 router
 *
 * @param {string} path 호출 url
 * @param {RouteObject[]} routes route 정보
 * @returns
 */
export function renderWithRoutes(path: string, routes: RouteObject[]) {
  const memoryRouter = createMemoryRouter(routes, { initialEntries: [path] });
  return render(<RouterProvider router={memoryRouter} />);
}
