import { createI18n } from 'vue-i18n'
import browser from '../store/persistent/browser'
import enLocale from './en'
import zhLocale from './zh-CN'

const i18n = createI18n({
  locale: browser.language,
  messages: {
    en: enLocale,
    zh: zhLocale
  }
})

export default i18n
