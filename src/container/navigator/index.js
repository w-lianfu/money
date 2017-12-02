import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeTab from '../main'

let AppStack = StackNavigator({
  Home: {
    screen: HomeTab
  }
}, {
  headerMode: 'none'
})

export default AppStack
