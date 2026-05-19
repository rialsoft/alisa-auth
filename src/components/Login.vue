<script setup lang="ts">
const CHAT_ID = import.meta.env.VITE_CHAT_ID;

import { onMounted, ref } from 'vue';
import showToast from '../assets/toast';
import '../assets/css/toast.css';
import { useAuthStore } from '@/stores/auth';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

const year = new Date().getFullYear();

const username = ref(null);
const password = ref(null);
const isShow   = ref(false)
const isLoading = ref(false)

const togglePass = ()=> isShow.value = !isShow.value

const handleSubmit = async()=>{
    isLoading.value = true

    const chatId = String(window?.Telegram?.WebApp?.initDataUnsafe?.user?.id || CHAT_ID || 0)

    await new Promise<void>((resolve) => setTimeout(resolve, 100))
    await useAuthStore().login(username.value,password.value, chatId);

    isLoading.value = false

    const toast = document.querySelector('#toast')
    showToast(toast as HTMLElement)

    setTimeout(() => {
         window.Telegram.WebApp.close()
    }, 750);
}

onMounted(() => {
  console.log('Login', window.Telegram.WebApp.initDataUnsafe);
})
</script>

<template>
    <main class="container">
        <article>
            <header style="text-align: center; ">Alisa 2.0</header>
            <form @submit.prevent="handleSubmit">
                <fieldset>
                    <label>
                        Username
                        <input v-model="username" placeholder="Username" autocomplete="off" required/>
                    </label>
                    <label>
                        Password
                        <div style="position: relative;">

                            <input type="password" v-model="password" placeholder="Password" autocomplete="off" required v-if="!isShow" />
                            <input type="text" v-model="password" placeholder="Password" autocomplete="off" required v-else />

                            <button type="button" style="position: absolute; top: 0; right: 0; width: auto; background: transparent; border: none; padding: 0.8rem;" @click="togglePass">
                                <i class="demo-icon" :class="{'icon-eye-off':isShow, 'icon-eye':!isShow}"></i>
                            </button>
                        </div>
                    </label>
                </fieldset>

                <button type="submit" :aria-busy="isLoading" :disabled="isLoading">Login</button>
            </form>
        </article>

        <small style="margin-top: -80px; text-align: center; color: grey;">
            Copyright &copy; {{ year }}
        </small>
  </main>

  <div id="toast" class="toast">Login Submited!</div>
</template>

<style>
.container {
  display: grid;
  place-items: center; /* Centers vertically & horizontally */
  height: 100vh;      /* Container needs a height */
}
</style>