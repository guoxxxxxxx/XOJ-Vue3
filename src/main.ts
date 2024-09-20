import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from "pinia-plugin-persistedstate";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(ElementPlus)
app.use(pinia);
app.use(router)

app.mount('#app')
