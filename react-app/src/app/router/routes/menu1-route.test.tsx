import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { getMenu1Menu, getMenu1Route } from './menu1-route';
import { renderWithRoutes } from '../../../shared/lib/test/test-util';

// function renderWithRoutes(path: string) {
//   const Stub = createRoutesStub([
//     {
//       path: '/menu1',
//       children: [
//         { index: true, Component: NotFoundPage },
//         { path: 'sub-menu1', Component: SubMenu1Page },
//         { path: 'sub-menu2', Component: SubMenu2Page },
//       ],
//     },
//   ]);

//   render(<Stub initialEntries={[path]} />);
// }

describe('menu1 Routes', () => {
  it('renders menu1 at "/menu1"', () => {
    renderWithRoutes('/menu1', [getMenu1Route()]);
    expect(screen.getByText('Not found page'));
  });

  it('renders sub-menu1 at "/menu1/sub-menu1"', () => {
    renderWithRoutes('/menu1/sub-menu1', [getMenu1Route()]);
    expect(screen.getByText('menu1-sub menu 1 page'));
  });

  it('renders sub-menu2 at "/menu1/sub-menu2"', () => {
    renderWithRoutes('/menu1/sub-menu2', [getMenu1Route()]);
    expect(screen.getByText('menu1-sub menu 2 page'));
  });
});

describe('getMenu1Menu', () => {
  it('should return correct menu1 object', () => {
    const menu = getMenu1Menu();
    expect(menu.title).toBe('Menu1');
    expect(menu.children).toHaveLength(2);
    expect(menu.children?.[0]).toMatchObject({
      path: '/menu1/sub-menu1',
      title: 'Sub menu1',
    });
    expect(menu.children?.[1]).toMatchObject({
      path: '/menu1/sub-menu2',
      title: 'Sub menu2',
    });
  });
});
