<!--
<template>
  <div>
    maindfdfdfd
    <router-view>
      <router-view />
    </router-view>
  </div>
</template>
-->

<template>
  <q-layout view="lHh Lpr lFf">
    <main-header ref="header" @click-menu-btn="onClickMenuBtn" />
    <side-menu ref="sideMenu" />
    <q-page-container>
      <router-view />
      <!-- <HelloWorld /> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '@main/Header.vue';
import SideMenu from '@main/SideMenu.vue';
import { getAllowedRouteMenus } from '@router/routerHelper';

export default {
  name: 'Main',

  components: {
    'main-header': Header,
    'side-menu': SideMenu
  },

  data() {
    return {};
  },

  methods: {
    onClickMenuBtn() {
      this.$refs.sideMenu.show();
    }
  },
  mounted() {
    const menus = getAllowedRouteMenus(0);
    console.log(menus);
  }
};
</script>

<style></style>
