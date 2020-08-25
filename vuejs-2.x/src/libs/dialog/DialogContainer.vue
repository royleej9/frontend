<template>
  <div class="dialog">
    <div v-if="!isModeless" class="dialog-bg"></div>
    <div ref="dialogContent" class="dialog-content">
      <component :is="component" v-bind="componentProps" @close="onClose" />
    </div>
  </div>
</template>

<script>
import baseDialog from '@libs/dialog/baseDialog.js';
import drag from '@libs/dialog/drag.js';

const POSITION_FIELDS = ['top', 'right', 'bottom', 'left'];

export default {
  name: 'DialogContainer',
  extends: baseDialog,
  props: {
    uuid: {
      type: String,
      default: null,
    },
    isModeless: {
      type: Boolean,
      default: false,
    },
    isDraggAble: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Object,
      default: null,
      validator(val) {
        const isWrongKey = Object.keys(val).some(
          (item) => !POSITION_FIELDS.includes(item)
        );
        if (isWrongKey) {
          console.error('Wrong position key: top, right, bottom, left');
          return false;
        } else {
          return true;
        }
      },
    },
    component: {
      type: Object,
      required: true,
    },
    componentProps: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    getUuid() {
      return this.uuid;
    },
    onClose(param) {
      this.$emit('close', param);
    },
    close() {
      this.$emit('close');
    },

    setPosition(targetStyle) {
      const _setPostion = (key) =>
        this.position[key] !== undefined ? this.position[key] + 'px' : 'auto';
      targetStyle.transform = 'none';
      targetStyle.position = 'fixed';
      targetStyle.top = _setPostion('top');
      targetStyle.right = _setPostion('right');
      targetStyle.bottom = _setPostion('bottom');
      targetStyle.left = _setPostion('left');
    },
  },
  mounted() {
    const dragTargets = this.$el.getElementsByClassName('drag-handle');
    if (this.isDraggAble && dragTargets.length > 0) {
      drag.bind(this.$refs.dialogContent);
    }
    if (this.position) {
      this.setPosition(this.$refs.dialogContent.style);
    }
  },
  beforeDestroy() {
    const dragTargets = this.$el.getElementsByClassName('drag-handle');
    if (this.isDraggAble && dragTargets.length == 1) {
      drag.unbind(this.$refs.dialogContent);
    }
  },
  destroyed() {
    console.log('DialogContainer-destroyed');
  },
};
</script>

<style>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  /* background-color: cornflowerblue; */
}

.dialog .dialog-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.dialog .dialog-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.dialog .grab {
  cursor: grab;
}

.dialog .grabbing {
  cursor: grabbing;
}
</style>
