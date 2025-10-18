import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 👈 importante
import './assets/style.css'

const app = createApp(App)
app.use(router)  // 👈 habilita Vue Router
app.mount('#app')

