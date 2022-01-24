/* eslint-disable import/no-unresolved */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import i18n from './locales'
import router from './router'
import App from './App.vue'
import store from './store'
import 'element-plus/dist/index.css'
import 'default-passive-events'

import('./assets/fonts/iconfont.css')

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
