import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './home'
import Choice from './choice'
import Service from './service'
import My from './my'

import Colors from '../../common/style/color'
import Size from '../../common/style/size'

let HomeTab = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} color={tintColor} size={25} />
      )
    }
  },
  Choice: {
    screen: Choice,
    navigationOptions: {
      tabBarLabel: '精选',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={focused ? 'ios-star' : 'ios-star-outline'} color={tintColor} size={25} />
      )
    }
  },
  Service: {
    screen: Service,
    navigationOptions: {
      tabBarLabel: '服务',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} color={tintColor} size={25} />
      )
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} color={tintColor} size={25} />
      )
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.black,
    inactiveTintColor: Colors.c999,
    style: {
      backgroundColor: Colors.white,
      borderTopWidth: 0,
      shadowColor: Colors.eee,
      shadowOpacity: 0.8
    },
    labelStyle: {
      fontSize: Size.font13,
      paddingBottom: 2
    }
  }
})

export default HomeTab
