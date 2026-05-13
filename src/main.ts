import './assets/css/pico.blue.css'
import './assets/icon/css/fontello.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'

const app = createApp(App)

app.use(createPinia());

app.mount('#app')
