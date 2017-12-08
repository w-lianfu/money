import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight, Image, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { observer } from 'mobx-react'

import FinancialStore from './store'
import {
  PageScrollView, PageView, LinkView, ContentView, CarouselView,
  CarouselBox, TextStyled, BgText, BottomText
} from '../../../../common/component/common'
import { ListView } from '../styled'
import FinancialStyle from './style'
import Colors from '../../../../common/style/color'
import Size from '../../../../common/style/size'

let store = new FinancialStore()

@observer
class Financial extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    store.getListData()
  }

  _toLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    console.log('render...')
    let list = store.listData && store.listData.map((item, index) => (
      <ListView onPress={this._toLogin} underlayColor={Colors.white} key={index}>
      <View style={FinancialStyle.ListRow}>
        <View style={FinancialStyle.IconView}>
          <Image source={require('../../../../image/icon/icon01.png')}
            style={FinancialStyle.IconImage} />
        </View>
        <View style={FinancialStyle.ListContent}>
          <TextStyled size={Size.font19} weight={500}>{item.title}</TextStyled>
          <BottomText size={Size.font15} color={Colors.gray} margin={0}>{item.subTitle}</BottomText>
        </View>
        <View style={FinancialStyle.ListRight}>
          <TextStyled size={Size.font18} color={Colors.orangered}>{item.rate}</TextStyled>
          <TextStyled size={Size.font15} color={Colors.gray}>{item.rateText}</TextStyled>
        </View>
      </View>
    </ListView>
    ))

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
            {list}
          </ContentView>
          <Text>{store.num}</Text>
          <Button title='Num' onPress={store.increment} />
        </PageView>
      </PageScrollView>
    )
  }
}

export default Financial
