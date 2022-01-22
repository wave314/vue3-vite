/* eslint-disable import/no-unresolved */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import i18n from './locales'
import App from './App.vue'
import 'element-plus/dist/index.css'
import 'default-passive-events'

const app = createApp(App)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')
