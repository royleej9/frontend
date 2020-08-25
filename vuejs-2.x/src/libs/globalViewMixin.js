/**
 * Vue에서 공통하는 사용하는 기능 정의
 */

const _setup = function(Vue) {
  Vue.mixin({
    methods: {
      /**
       * showProgress
       */
      showProgress() {
        console.log('showProgress');
      },

      /**
       * hideProgress
       */
      hideProgress() {
        console.log('hideProgress');
      },

      alert(msg) {
        console.log('alert-message', msg);
      },
    },
  });
};

const globalViewMixin = {
  setup: _setup,
};

export default globalViewMixin;
