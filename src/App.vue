<script setup lang="ts">
import Login from './components/Login.vue';
import { onMounted } from 'vue';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

onMounted(() => {
  console.log('window.Telegram.WebApp.initData', window.Telegram.WebApp.initData);
  console.log('window.Telegram.WebApp.initDataUnsafe', window.Telegram.WebApp.initDataUnsafe);
})
</script>

<template>
  <Login></Login>
</template>
