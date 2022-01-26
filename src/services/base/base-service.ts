/**
 * 基础服务，封装axios
 */
import { ElMessage } from 'element-plus'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  Canceler,
  Method
} from 'axios'
import browser from '../../store/persistent/browser'
import requestInterceptor from './request-interceptor'
import responseInterceptor from './response-interceptor'

const { CancelToken } = axios
export default class BaseService {
  http: AxiosInstance

  cancel!: Canceler

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: `${browser.apiUrl}`,
      timeout: 1000 * 60 * 10, // 10分钟
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
    this.http = axios.create(config)
    this.http.interceptors.request.use(
      requestInterceptor.fulfilled,
      requestInterceptor.rejected
    )
    this.http.interceptors.response.use(
      responseInterceptor.fulfilled,
      responseInterceptor.rejected
    )
  }

  /**
   * @param {url} 请求地址
   * @param {params} 请求参数
   * @param {options} 请求配置，针对当前本次请求；
   * @param method http method
   * @param loading 是否显示loading
   */
  request(url: string, params: any, method: Method) {
    ElMessage.closeAll()
    return new Promise((resolve) => {
      const _ = this
      this.http({
        method,
        url,
        ...params,
        cancelToken: new CancelToken(function executor(canceler) {
          _.cancel = canceler
        })
      })
        .then((res) => {
          resolve(res)
        })
        .catch(async (error) => {
          if (axios.isCancel(error)) {
            return
          }
          if (error.response) {
            resolve(error)
          } else {
            resolve(error)
          }
        })
    })
  }

  get(url: string, params: any = undefined) {
    return this.request(url, params, 'get')
  }

  post(url: string, params: any) {
    return this.request(url, params, 'post')
  }

  put(url: string, params: any) {
    return this.request(url, params, 'put')
  }

  patch(url: string, params: any) {
    return this.request(url, params, 'patch')
  }

  delete(url: string, params: any) {
    return this.request(url, params, 'delete')
  }
}
