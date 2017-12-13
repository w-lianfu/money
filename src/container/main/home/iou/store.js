import { observable, action, runInAction, useStrict } from 'mobx'
import { setTimeout } from 'core-js/library/web/timers';

useStrict(true)

class IouStore {
  @observable refreshing = false
  @observable loadingTitle = '下拉刷新'

  @action.bound
  toggleRefresh = (val) => {
    if (val) {
      this.refreshing = true
      this.loadingTitle = '正在刷新'
      return
    }
    setTimeout(() => {
      runInAction(() => {
        this.refreshing = false
        setTimeout(() => {
          runInAction(() => {
            this.loadingTitle = '下拉刷新'
          })
        }, 500)
      })
    }, 3000)
  }
}

export default IouStore
