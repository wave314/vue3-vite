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
}

export default new BrowserStore()
