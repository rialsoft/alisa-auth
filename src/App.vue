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
  console.log('window.Telegram.WebApp', window.Telegram.WebApp.initData);
})
</script>

<template>
  <Login></Login>
</template>
