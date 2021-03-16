<!--
- 메인 > 상단 메뉴
-  event:
- showSideMenu : side menu show/hide
-->
<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        aria-label="Menu"
        @click="onClickMenuBtn"
        icon="menu"
      />
      <q-toolbar-title> Sample App </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Header',
  props: { menus: {} },
  data() {
    return {};
  },
  components: {},
  methods: {
    onClickMenuBtn() {
      this.$emit('click-menu-btn');
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>
