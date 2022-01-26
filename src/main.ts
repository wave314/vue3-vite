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
app.config.globalProperties.$execute = async (
  action: Function,
  failed: Function
) => {
  try {
    await action()
  } catch (error: any) {
    if (failed) {
      failed()
    }
  }
}
app.use(store)
app.use(i18n)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
