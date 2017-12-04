import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeTab from '../main'
import Login from '../main/login'

let AppStack = StackNavigator({
  Home: {
    screen: HomeTab
  },
  Login: {
    screen: Login
  }
}, {
  headerMode: 'none'
})

export default AppStack
