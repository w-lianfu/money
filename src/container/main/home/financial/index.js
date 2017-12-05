import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'

import {
  PageScrollView, PageView, LinkView, ContentView, CarouselView,CarouselBox
} from '../../../../common/component/common'
import Colors from '../../../../common/style/color'
import Size from '../../../../common/style/size'

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
          <Swiper autoplay={true} showsPagination={false}
            style={{height: Size.size60, marginTop: 10, marginBottom: 10}}>
            <CarouselBox bgColor={Colors.mBlue5} underlayColor={Colors.mBlue5}
              height={Size.size60} onPress={this._toLogin}>
              <Text>One One One</Text>
            </CarouselBox>
            <CarouselBox bgColor={Colors.mGreen5} underlayColor={Colors.mGreen5}
              height={Size.size60} onPress={this._toLogin}>
              <Text>Two Two Two</Text>
            </CarouselBox>
            <CarouselBox bgColor={Colors.mRed5} underlayColor={Colors.mRed5}
              height={Size.size60} onPress={this._toLogin}>
              <Text>Three Three Three</Text>
            </CarouselBox>
          </Swiper>
          <ContentView bgColor='red'>
            <Text>Financial Page 000000</Text>
            <Text>Financial Page 111111</Text>
            <Text>Financial Page</Text>
            <Text>Financial Page</Text>
            <Text>Financial Page</Text>
            <Text>Financial Page 99999</Text>
            <Text>Financial Page 100000</Text>
            <Text>Financial Page 99999</Text>
            <Text>Financial Page 55555555555555555</Text>
          </ContentView>
        </PageView>
      </PageScrollView>
    )
  }
}

export default Financial
