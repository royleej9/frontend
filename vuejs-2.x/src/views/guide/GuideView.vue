<template>
  <div>
    <button @click="onClickLogin">로그인페이지</button>

    <p>Guide 화면입니다. 컴포넌트/레이아웃 등을 샘플을 정리하는 화면입니다.</p>

    <button @click="onClickLogin">로그인페이지</button>
  </div>
</template>

<script>
import menu from '@libs/menu.js';
export default {
  name: 'GuideView',
  extends: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
    onClickLogin() {
      menu.openMenuByName('login');
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style scoped></style>
