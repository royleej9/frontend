<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }">
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Log in</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" label="Username" lazy-rules />

              <q-input type="password" filled v-model="password" label="Password" lazy-rules />

              <div>
                <q-btn label="Login" to="/" type="button" color="primary" @click="onClickLogin" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import router from '@/app/router';
import { useAuthStore } from '@/app/stores/authStore';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

console.log(username);
console.log(password);

console.log('LoginPage');

const authStore = useAuthStore();
const onClickLogin = async () => {
  await authStore.login(username.value, password.value);
  router.push('init');
};
</script>

<style></style>
