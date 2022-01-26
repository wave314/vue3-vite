import { AxiosInstance } from 'axios'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    // 为 `this.$http` 提供类型声明
    $execute: AxiosInstance
    $for: string
  }
}
