<script setup lang="ts">
import { ref } from 'vue';

const year = new Date().getFullYear();

const username = ref(null);
const password = ref(null);
</script>

<template>
    <main class="container">
        <article>
            <header style="text-align: center; ">Alisa 2.0</header>
            <form>
                <fieldset>
                    <label>
                        Username
                        <input v-model="username" placeholder="Username" autocomplete="off" required/>
                    </label>
                    <label>
                        Password
                        <input type="password" v-model="password" placeholder="Password" autocomplete="off" required />
                    </label>
                </fieldset>

                <button type="submit">Login</button>
            </form>
        </article>

        <small style="margin-top: -80px; text-align: center; color: grey;">
            Copyright &copy; {{ year }}
        </small>
  </main>
</template>

<style>
.container {
  display: grid;
  place-items: center; /* Centers vertically & horizontally */
  height: 100vh;      /* Container needs a height */
}
</style>