<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">Test&test</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="email"
                    type="email"
                    :label="$t('common.email')"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="password"
                    type="password"
                    :label="$t('common.password')"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="light-green-7"
                  size="lg"
                  class="full-width"
                  :label="$t('common.login')"
                  @click="onClickLoginBtn"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import menuManager from '@commons/menuManager';
import { changeLocale } from '@i18n/i18nHelper';
import { getAllowedRoutes } from '@router/routerHelper';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    onClickLoginBtn() {
      // menuManager.openMenu('main');
    }
  },
  mounted() {
    console.log('loginView');

    const allowedRoutes = getAllowedRoutes(0);
    console.log(allowedRoutes);
    this.$router.addRoute(allowedRoutes);

    menuManager.openMenu('/main');

    // const menus = getAllowedRouteMain(0);
    // console.log(menus);
    // console.log(this.$t('login'));
    // changeLocale('ko').then(() => {
    //   console.log(this.$t('login'));
    // });
  }
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>
