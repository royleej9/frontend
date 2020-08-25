import authAPI from '@apis/authAPI.js';

export const state = {
  id: null,
};

export const getters = {
  getUserId(state) {
    return state.id;
  },
};

export const mutations = {
  setUserId(state, data) {
    state.id = data;
  },
};

export const actions = {
  async login(context, { id, pwd }) {
    const auth = await authAPI.login({ id, pwd });
    console.log(auth);
    context.commit('setUserId', id);
  },

  async logout({ commit }, { id }) {
    const auth = await authAPI.logout({ id });
    console.log(auth);
    commit('setUserId', null);
  },
};
