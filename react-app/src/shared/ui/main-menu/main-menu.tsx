import { NavLink } from 'react-router';
import { getLoggedInUserMenu } from '../../../app/router/routes';
import type { JSX } from 'react';

export type MenuObject = {
  path?: string;
  title: String;
  children?: MenuObject[];
};

type MenuItemProps = {
  menuObj: MenuObject;
};

/**
 * 메뉴 아이템
 * @param {MenuItemProps} props 메뉴 아이템 컴포넌트 속성
 * @returns {JSX.Element} 메뉴 아이템
 */
function MenuItem(props: MenuItemProps): JSX.Element {
  const { menuObj } = props;
  if (menuObj.path) {
    return <NavLink to={menuObj.path}>{menuObj.title}</NavLink>;
  }
  return <>{menuObj.title}</>;
}

export function MainMenu() {
  const menus = getLoggedInUserMenu();
  return (
    <nav>
      <ul className="menu">
        {menus.map((menuItem, index) => (
          <li key={index}>
            <MenuItem menuObj={menuItem} />
            {menuItem.children && (
              <ul className="submenu">
                {menuItem.children.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <MenuItem menuObj={subMenuItem} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
