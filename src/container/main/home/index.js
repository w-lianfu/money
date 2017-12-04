import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Financial from './financial'
import Iou from './iou'
import Pay from './pay'

import Colors from '../../../common/style/color'
import Size from '../../../common/style/size'

let TopTap = TabNavigator({
  Financial: {
    screen: Financial,
    navigationOptions: {
      title: '理财'
    }
  },
  Iou: {
    screen: Iou,
    navigationOptions: {
      title: '白条'
    }
  },
  Pay: {
    screen: Pay,
    navigationOptions: {
      title: '支付'
    }
  }
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.mBlue,
    inactiveTintColor: Colors.black,
    labelStyle: {
      fontSize: Size.font17,
      paddingBottom: 5,
      fontWeight: 'bold'
    },
    style: {
      backgroundColor: Colors.white,
      borderBottomColor: Colors.eee,
      borderBottomWidth: 1
    }
  }
})

export default TopTap
