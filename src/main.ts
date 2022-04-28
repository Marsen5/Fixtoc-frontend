import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import "@/assets/css/taildwind.css";

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
