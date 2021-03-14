<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import menuManager from '@commons/menuManager';

export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    // router mode abstract 인 경우
    menuManager.openMenu('/main');
  }
};
</script>