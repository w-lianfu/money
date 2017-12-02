import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Financial from './financial'
import Iou from './iou'
import Pay from './pay'

let TopTap = TabNavigator({
  Financial: {
    screen: Financial
  },
  Iou: {
    screen: Iou
  },
  Pay: {
    screen: Pay
  }
}, {
  tabBarPosition: 'top',
  swipeEnabled: true
})

export default TopTap
