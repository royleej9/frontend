import { useTranslation } from 'react-i18next';

export function DashboardPage() {
  const { t } = useTranslation('dashboard');
  return (
    <>
      <div>{t('dashboard:title')}</div>
      <div>dashboard page</div>
    </>
  );
}
