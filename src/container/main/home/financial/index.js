import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight } from 'react-native'

import {
  PageView, PageScrollView, CarouselView, CarouselBox, LinkView
} from '../../../../common/component/common'
import Colors from '../../../../common/style/color'

class Financial extends Component {
  constructor(props) {
    super(props)
  }

  _toLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <PageScrollView>
        <PageView>
          <CarouselView>
            <Text>hello</Text>
          </CarouselView>
          <CarouselBox bgColor={Colors.mBlue} underlayColor={Colors.mBlue}
            onPress={this._toLogin}>
            <Text>Box Box</Text>
          </CarouselBox>
          <LinkView onPress={this._toLogin}>
            <Text>Hellllllloooo oooo</Text>
          </LinkView>
          <Text>Financial Page 000000</Text>
          <Text>Financial Page 111111</Text>
          <Text>Financial Page</Text>
          <Text>Financial Page</Text>
          <Text>Financial Page</Text>
          <Text>Financial Page 99999</Text>
          <Text>Financial Page 100000</Text>
          <Text>Financial Page 99999</Text>
          <Text>Financial Page 55555555555555555</Text>
        </PageView>
      </PageScrollView>
    )
  }
}

export default Financial
