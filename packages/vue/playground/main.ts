import { createApp } from 'vue'

import App from '../playground/App.vue'
import router from '../src/router'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
