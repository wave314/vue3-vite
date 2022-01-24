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
}

export default new BrowserStore()
