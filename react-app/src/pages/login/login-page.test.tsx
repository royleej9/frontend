import { describe, it, expect, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { getRoutes } from '../../app/router/routes';
import { getI18nMock, renderWithRoutes } from '../../shared/lib/test/test-util';
import userEvent from '@testing-library/user-event';

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
});
