import { Outlet } from 'react-router';
import { MainMenu } from '../main-menu/main-menu';
import { useEffect, useState } from 'react';
import AuthService from '../../apis/auth/auth-service';

/**
 * User 레이아웃
 * @returns {JSX.Element} 레이아웃
 */

export function UserLayout() {
  const [isInit, setIsInit] = useState(false);

  //useLayoutEffect
  useEffect(() => {
    console.log('useEffect!!!!!!!!!!!!!!!!!!!!!!!');
    AuthService.getLoginUserInfo()
      .then((res) => {
        console.log(res.data);
        setIsInit(true);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  }, []);

  if (!isInit) {
    console.log('Initializing app...');
    return <div> Initializing app... </div>;
  }

  const date = new Date();
  console.log('start app');
  return (
    <div>
      {date.toString()}
      <MainMenu />
      <Outlet />
    </div>
  );
}
