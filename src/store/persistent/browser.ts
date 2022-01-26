class BrowserStore {
  public get language(): string {
    return localStorage.getItem('language') || 'zh'
  }

  /**
   * 系统语言
   */
  public set language(v: string) {
    localStorage.setItem('language', v)
  }

  public get userName(): string {
    return localStorage.getItem('userName') || 'admin'
  }

  public set userName(v: string) {
    localStorage.setItem('userName', v)
  }

  public get apiUrl(): string {
    return localStorage.getItem('apiUrl') || ''
  }

  public set apiUrl(v: string) {
    localStorage.setItem('apiUrl', v)
  }

  public get accessToken(): string {
    return localStorage.getItem('accessToken') || ''
  }

  public set accessToken(v: string) {
    localStorage.setItem('accessToken', v)
  }
}

export default new BrowserStore()
