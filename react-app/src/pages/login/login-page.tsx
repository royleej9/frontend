import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { LANG_TYPE } from '../../shared/lib/i18n';
import i18next from 'i18next';

/**
 * 언어 선택
 * i18n 플러그인 설정으로 자동으로 로컬 스토리지에 저장됨
 * key: lang
 * @returns
 */
function LangSelector() {
  console.log('selectLang - components');
  const { t, i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState<string>(i18next.language);
  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    i18n.changeLanguage(value);
    setSelectedLang(value);
  };

  return (
    <select value={selectedLang} onChange={handleChangeLang}>
      <option value={LANG_TYPE.EN}>{t('common:lang.en')}</option>
      <option value={LANG_TYPE.KO}>{t('common:lang.ko')}</option>
    </select>
  );
}

export function LoginPage() {
  const navigate = useNavigate(); // useNavigate 훅 호출
  const { t } = useTranslation();
  console.log('로그인 페이지!!!: ' + i18next.language);

  const handleClick = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      로그인 페이지 입니다.
      <div>
        <LangSelector />
      </div>
      <button onClick={handleClick}>{t('common:login')}</button>
    </div>
  );
}
