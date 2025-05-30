import { Outlet } from 'react-router';
import { MainMenu } from '../main-menu/main-menu';
import type { JSX } from 'react';

/**
 * User 레이아웃
 * @returns {JSX.Element} 레이아웃
 */
export function UserLayout(): JSX.Element {
  const date = new Date();
  return (
    <div>
      {date.toString()}
      <MainMenu />
      <Outlet />
    </div>
  );
}
