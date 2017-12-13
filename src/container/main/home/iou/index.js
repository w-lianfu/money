import React, { Component } from 'react'
import { View, Text, ScrollView, RefreshControl } from 'react-native'
import { observer } from 'mobx-react'

import IouStyle from './style'
import IouStore from './store'

import { PageScrollView, PageView } from '../../../../common/component/common'
import Colors from '../../../../common/style/color'
import Size from '../../../../common/style/size'

let store = new IouStore

@observer
class Iou extends Component {

  _onRefresh = () => {
    store.toggleRefresh(true)
    store.toggleRefresh(false)
  }

  render() {
    return (
      <PageScrollView refreshControl={
        <RefreshControl refreshing={store.refreshing} onRefresh={this._onRefresh}
          title={store.loadingTitle} /> }>
        <PageView>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
          <Text>Iou Page</Text>
        </PageView>
      </PageScrollView>
    )
  }
}

export default Iou
