//
import axios from 'axios';

export default {
  /**
   *
   */
  async getUsers() {
    const result = await axios.get('/users');
    return result.data;
  },

  /**
   *
   * @param {string} id
   */
  async getUserById(id) {
    return await axios.get(`/users/${id}`);
  },

  async addUser({ id, name, pwd }) {
    return await axios.post(`/users`, { id, name, pwd });
  },

  async updateUser({ id, name, pwd }) {
    return await axios.put(`/users`, { id, name, pwd });
  },

  async deleteUserById(id) {
    return await axios.delete(`/users`, { id: id });
  },
};
