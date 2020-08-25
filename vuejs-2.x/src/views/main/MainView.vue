<template>
  <div class="home">
    <p>main 화면입니다.</p>
    <button @click="onClickLogout()">logout</button>
    <button @click="onClickAdd()">Add</button>
    <button @click="onClickClose()">Close</button>
  </div>
</template>

<script>
// import HelloWorld from '@components/HelloWorld.vue';
// import TestCom from '@components/TestCom.vue';
// import ComponentUtil from '@utils/ComponentUtil.js';
// import HelloWorld from '@components/HelloWorld.vue';
import TestDialog from '@components/TestDialog.vue';

// import BasePopup from '@libs/popup/BasePopup.vue';
import dialogManager from '@libs/dialog/dialogManager.js';

import menu from '@libs/menu.js';

export default {
  name: 'MainView',
  components: {},
  data() {
    return {
      id: 22,
    };
  },
  methods: {
    onClickLogout() {
      menu.openMenuByName('login');
    },
    onClickAdd() {
      dialogManager
        .open({
          isModeless: false,
          isDraggAble: true,
          component: TestDialog,
          id: 1234,
          position: {
            bottom: 0,
            right: 0,
          },
        })
        .onClose((param) => {
          console.log('home-onClose', param, this.id);
        });
    },
    onClickClose() {
      dialogManager.closeAll();
    },
  },
};
</script>
