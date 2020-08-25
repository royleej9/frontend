import Vue from 'vue';
import DialogContainer from '@libs/dialog/DialogContainer.vue';
import forIn from 'lodash/forIn';

let count = 0;

const dialogs = {};

function _open({ component, isModeless, isDraggAble, position, ...props }) {
  const node = document.createElement('div');
  document.body.appendChild(node);

  let closeFn = null;
  let vm = new Vue({
    name: 'DialogContainer',
    el: node,
    render: (h) =>
      h(DialogContainer, {
        ref: 'dialog', // ref 정의해야만 vm.$refs를 통해 접근 가능
        props: {
          uuid: `dialog_${count++}`,
          isModeless: isModeless,
          isDraggAble: isDraggAble,
          position: position,
          component: component,
          componentProps: props,
        },
        on: {
          close(param) {
            if (closeFn) {
              closeFn(param);
            }
            vm.$destroy();
            vm.$el.remove();
            vm = null;
          },
        },
      }),
    mounted() {},
  });

  _add(vm.$refs.dialog);

  return {
    onClose(fn) {
      closeFn = fn;
    },
    close() {
      vm.$refs.dialog.close();
    },
  };
}

function _close(dialog) {
  dialog.close();
  delete dialogs[dialog.getUuid()];
}

function _closeAll() {
  forIn(dialogs, (item) => {
    _close(item);
  });
}

function _add(dialog) {
  dialogs[dialog.getUuid()] = dialog;
}

export default {
  open: _open,
  close: _close,
  closeAll: _closeAll,
};
