<template>
  <div>
    <p>로그인 페이지입니다.</p>
    <p>
      ID:
      <input />
    </p>
    <p>
      password:
      <input />
    </p>
    <button @click="onClickLogin">Login</button>
    <br />
    <button v-if="isShowGuide" @click="onClickGuide">Guide</button>
  </div>
</template>

<script>
import menu from '@libs/menu.js';

export default {
  name: 'LoginView',
  extends: {},
  props: {},
  data() {
    return {
      isShowGuide: false,
    };
  },
  computed: {},
  components: {},
  watch: {},
  created() {
    this.isShowGuide = process.env.NODE_ENV !== 'production';
  },
  methods: {
    onClickLogin() {
      menu.openMenuByName('main');
    },

    onClickGuide() {
      menu.openMenuByPath('/guide');
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style scoped></style>