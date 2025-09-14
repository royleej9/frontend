<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center"> 데이터 로딩 화면입니다. </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import router from '@/app/router';

console.log('InitPage.vue');

router.push('/');
</script>

<style></style>
