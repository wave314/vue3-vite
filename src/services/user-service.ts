import BaseService from './base/base-service'

class UserService extends BaseService {
  /**
   *用户名密码登录
   * @param {object} data 用户名和密码
   * @returns
   */
  login(data: any) {
    return this.post(`/api/v2/security-users/token`, {
      data
    })
  }

  /**
   * 所有用户
   * @returns 用户列表
   */
  all() {
    return this.get(`/api/v2/security-users/list`)
  }
}

export default new UserService()
