import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api";
import './clear.scss'
import './theme.scss'
import './style.scss'
import mitt from 'mitt';
const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.$api = new api('/api/')
app.config.globalProperties.$emitter = emitter;
app.use(store).use(router).mount('#app')
