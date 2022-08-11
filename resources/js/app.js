require('./bootstrap');


import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
window.Vue = require('vue');

const app = createApp(App)


app.mount("#app")
app.use(router)
