import { useTranslation } from 'react-i18next';

const T_TITLE = 'menu1:sub_menu1.title';
const T_LOGIN = 'common:login';

export function SubMenu1Page() {
  const { t } = useTranslation('menu1');
  return (
    <div>
      menu1-sub menu 1 page : {t(T_TITLE)} :{t(T_LOGIN)}
    </div>
  );
}
