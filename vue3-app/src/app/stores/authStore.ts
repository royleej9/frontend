import { defineStore } from 'pinia';

export const useAuthStore = defineStore('useAuthStore', {
  state: () => {
    return {
      isLoggedIn: false,
      hasAppData: false,
    };
  },
  actions: {
    async login(id: string, password: string) {
      console.log(id + ' : ' + password);
      this.$patch({ isLoggedIn: true });
      // 로그인
      return true;
    },
    async checkSession() {
      const isLoggedIn = false;
      this.$patch({ isLoggedIn: isLoggedIn });
      return isLoggedIn;
    },
  },
});
