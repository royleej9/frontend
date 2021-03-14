<!--
- 메인 > 왼쪽 메뉴
-->
<template>
  <q-drawer
    v-model="isShow"
    @before-hide="onBeforeHide"
    show-if-above
    bordered
    content-class="bg-grey-2"
  >
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Docs</q-item-label>
          <q-item-label caption>quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: 'SideMenu',

  data() {
    return {
      isShow: true
    };
  },

  methods: {
    show() {
      this.isShow = !this.isShow;
    },

    onBeforeHide() {
      this.isShow = false;
      // this.$emit('hide');
    }
  }
};
</script>
