/**
 * 请求拦截器
 */
import { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import browser from '../../store/persistent/browser'

export default {
  fulfilled(config: AxiosRequestConfig) {
    ElMessage.closeAll()
    if (config.url) {
      if (!config.url.endsWith('/wave')) {
        config.headers.Authorization = `Bearer ${browser.accessToken}`
      }
    }
    return config
  },
  rejected(error: any) {
    return error
  }
}
