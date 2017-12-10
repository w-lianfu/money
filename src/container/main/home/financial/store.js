import { observable, computed, action, runInAction } from 'mobx'

import Fetch from '../../../../common/module/fetch'

class FinancialStore {
  @observable num = 0
  @observable listData = []

  @action.bound
  increment = () => {
    this.num++
  }

  @action.bound
  async getListData() {
    let result = await Fetch.get('financial')
    runInAction(() => {
      this.listData = result
    })
  }
}

export default FinancialStore
