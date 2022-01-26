/**
 * 响应拦截器
 */
import { AxiosError, AxiosResponse } from 'axios'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import browser from '../../store/persistent/browser'

export default {
  fulfilled(response: AxiosResponse): AxiosResponse {
    if (
      response.status < 400 &&
      response.data &&
      response.data?.error &&
      response.data?.error?.code
    ) {
      return response
    }
    return response
  },
  rejected(error: AxiosError) {
    if (error.response) {
      if (error.response.status === 403) {
        return { code: 403, error: useI18n().t('system.notify.forbidden') }
      }
      if (error.response.status === 401) {
        browser.accessToken = ''
        useRouter().push('/login')
        return Promise.reject()
      }
      return {}
    }
    return {
      code: 500,
      error: error.message || error.stack
    }
  }
}
