/*
 * @Author: Wave.wei
 * @Date: 2021-03-11 13:44:29
 * @LastEditors: Wave.wei
 * @LastEditTime: 2021-03-11 13:44:30
 */
import { createStore } from 'vuex'
import common from './modules/common'
// 创建一个新的 store 实例
const store = createStore({
  modules: {
    common
  }
})

export default store
