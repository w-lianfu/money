import { observable, computed, action, runInAction } from 'mobx'

class FinancialStore {
  @observable num = 0
  @observable listData = []

  @action.bound
  increment = () => {
    this.num++
  }

  @action.bound
  getListData = () => {
    this.listData = [
      {
        key: 1,
        imgName: 'icon01.png',
        contentId: 101,
        title: '工银小白',
        subTitle: '活期 首次转入+2%收益',
        rate: '4.0%+2%',
        rateText: '7日年化收益率'
      },
      {
        key: 2,
        imgName: 'icon01.png',
        contentId: 102,
        title: '定期理财',
        subTitle: '小白理财 最高年化5.8%',
        rate: '4.3%～5.8%',
        rateText: '多种投资期限可选'
      },
      {
        key: 3,
        imgName: 'icon01.png',
        contentId: 103,
        title: '基金',
        subTitle: '小白基金 加送7天3%',
        rate: '10元起投',
        rateText: '全场1折起'
      }
    ]
  }
}

export default FinancialStore
