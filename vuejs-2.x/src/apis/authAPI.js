//
import axios from 'axios';

export default {
  /**
   *
   * @param {*} id
   * @param {*} pwd
   */
  async login({ id, pwd }) {
    const result = await axios.post('/auth/login', { id: id, pwd: pwd });
    // const result = await axios.get('/users');
    return result.data;
  },

  async logout({ id }) {
    const result = await axios.post('/auth/logout', { id: id });
    // const result = await axios.get('/users' + id);
    return result.data;
  },
};
