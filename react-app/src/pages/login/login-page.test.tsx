import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { getRoutes } from '../../app/router/routes';
import { getI18nMock, renderWithRoutes } from '../../shared/lib/test/test-util';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router';
import { TEST } from '../../shared/lib/mock';

const mockedUseNavigate = useNavigate as Mock;

describe('login page', () => {
  const i18n = getI18nMock();
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  it('로그인 페이지 접속 테스트 "/" ', async () => {
    await renderWithRoutes('/', getRoutes(), i18n);
    expect(screen.getByText('Login Page'));
  });

  it('언어 변경 테스트', async () => {
    await renderWithRoutes('/', getRoutes(), i18n);
    expect(screen.getByText('Login Page'));

    await userEvent.selectOptions(screen.getByRole('combobox'), 'ko');
    await waitFor(() => {
      // findAllByText, queryByText, getByText;
      expect(screen.getByText('로그인 페이지'));
      expect(screen.queryByText('Login Page')).not.toBeInTheDocument();
    });
  });

  it('로그인 실패', async () => {
    await renderWithRoutes('/', getRoutes(), i18n);

    await userEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(screen.getByText('Please enter your ID or Password.'));
    });
  });

  it('로그인 성공', async () => {
    const navigate = vi.fn();
    mockedUseNavigate.mockReturnValue(navigate);

    await renderWithRoutes('/', getRoutes(), i18n);
    await userEvent.type(screen.getByLabelText('User ID'), TEST.LOGIN_ID_OK);
    await userEvent.type(screen.getByLabelText('Password'), TEST.PASSWORD_OK);

    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      // expect(screen.getByText('Dashboard')).toBeInTheDocument();
      // navigate에서 호출하는 url만 비교 > 렌더링 화면은 비교 하지 않음
      expect(navigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('로그인 실패', async () => {
    const navigate = vi.fn();
    mockedUseNavigate.mockReturnValue(navigate);

    await renderWithRoutes('/', getRoutes(), i18n);
    await userEvent.type(screen.getByLabelText('User ID'), TEST.LOGIN_ID_NOK);
    await userEvent.type(screen.getByLabelText('Password'), TEST.PASSWORD_NOK);

    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText('Login failed.'));
    });
  });
});
