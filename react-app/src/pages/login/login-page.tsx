import { useState, type ChangeEvent, type FormEvent } from 'react';
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
  const { t } = useTranslation('login');
  console.log('로그인 페이지!!!: ' + i18next.language);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 새로 고침 방지
    event.preventDefault();
    setErrorMessage('');

    if (userId == '' || password == '') {
      setErrorMessage('common:error.login_fail_1');
      return;
    }
    console.log('대시보드 페이지 이동!!!!!!!!!!!!!!!!!!!');
    navigate('/dashboard');
  };

  const handleUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {t('login:title')}
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userId">{t('common:user_id')}</label>
          <input id="userId" value={userId} onChange={handleUserId}></input>
          <label htmlFor="password">{t('common:password')}</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePassword}
          ></input>
          <button type="submit">{t('common:btn.login')}</button>
        </form>
      </div>
      {errorMessage && <p>{t(errorMessage)}</p>}
      <div>
        <LangSelector />
      </div>
    </div>
  );
}
