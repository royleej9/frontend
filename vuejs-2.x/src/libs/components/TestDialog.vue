<template>
  <!-- <dialog-container ref="dialog" :is-modal="false" :is-move-able="true"> -->
  <div class="modal-container">
    <div class="modal-header drag-handle">
      <slot name="header">default header</slot>
    </div>

    <div class="modal-body">
      <slot name="body">default body</slot>
    </div>

    <div class="modal-footer">
      <slot name="footer">
        default footer
        <button class="modal-default-button" @click="onClickClose()">OK</button>
      </slot>
    </div>
  </div>
  <!-- </dialog-container> -->
</template>

<script>
export default {
  name: 'TestDialog',
  props: {
    id: {
      default: null,
    },
  },
  methods: {
    onClickClose() {
      // this.$refs.popup.close({ data: 1234 });
      this.$emit('close', { data: 123 });
    },

    onClickCancel() {
      // this.$refs.popup.close({ data: 1234 });
      this.$emit('close', { data: 123 });
    },
  },

  mounted() {
    // console.log(this.props);
    // console.log('id::', this.id);
  },
  beforeDestroy() {
    console.log('TestPopup-beforeDestroy');
  },
  destroyed() {
    console.log('TestPopup-destroyed');
  },
};
</script>

<style>
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  /* height: 200px;
  background-color: #42b983; */
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
