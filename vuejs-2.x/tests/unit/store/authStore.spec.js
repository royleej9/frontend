import { actions } from '@store/modules/authStore.js';

let url = '';
let body = {};

jest.mock('axios', () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;
      resolve(true);
    });
  },
}));

describe('authStore', () => {
  it('login', async () => {
    const commit = jest.fn();
    const id = 'alice';
    const pwd = 'password';

    await actions.login({ commit }, { id, pwd });

    expect(url).toBe('/auth/login');
    expect(body).toEqual({ id, pwd });
    expect(commit).toHaveBeenCalledWith('setUserId', id);
  });

  it('logout', async () => {
    const commit = jest.fn();
    const id = 'alice';

    await actions.logout({ commit }, { id });

    expect(url).toBe('/auth/logout');
    expect(body).toEqual({ id });
    expect(commit).toHaveBeenCalledWith('setUserId', null);
  });
});
