interface ICommon {
  foldMenu: boolean
}
export default {
  state() {
    return {
      foldMenu: false
    }
  },
  mutations: {
    setFoldMenu(state: ICommon, value: boolean) {
      // eslint-disable-next-line no-param-reassign
      state.foldMenu = value
    }
  }
}
