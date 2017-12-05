import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import {
  PageScrollView, PageView, LinkView, ContentView, CarouselView,
  CarouselBox, TextStyled, BgText, BottomText
} from '../../../../common/component/common'
import { ListView } from '../styled'
import FinancialStyle from './style'
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
    let data = [
      {
        id: 1,
        imgName: 'icon01.png',
        contentId: 101,
        title: '工银小白',
        subTitle: '活期 首次转入+2%收益',
        rate: '4.0%+2%',
        rateText: '7日年化收益率'
      },
      {
        id: 2,
        imgName: 'icon01.png',
        contentId: 102,
        title: '定期理财',
        subTitle: '小白理财 最高年化5.8%',
        rate: '4.3%～5.8%',
        rateText: '多种投资期限可选'
      },
      {
        id: 3,
        imgName: 'icon01.png',
        contentId: 103,
        title: '基金',
        subTitle: '小白基金 加送7天3%',
        rate: '10元起投',
        rateText: '全场1折起'
      }
    ]

    let list = data.map((item, index) => (
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
          <TextStyled size={Size.font20} color={Colors.orangered}>{item.rate}</TextStyled>
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

            {/* <ListView onPress={this._toLogin} underlayColor={Colors.white}>
              <View style={FinancialStyle.ListRow}>
                <View style={FinancialStyle.IconView}>
                  <Image source={require('../../../../image/icon/icon01.png')}
                    style={FinancialStyle.IconImage} />
                </View>
                <View style={FinancialStyle.ListContent}>
                  <TextStyled size={Size.font19} weight={500}>京东小金库</TextStyled>
                  <BottomText size={Size.font15} color={Colors.gray} margin={0}>活期 首次转入+2%收益</BottomText>
                </View>
                <View style={FinancialStyle.ListRight}>
                  <TextStyled size={Size.font20} color={Colors.orangered}>4.0%+2%</TextStyled>
                  <TextStyled size={Size.font15} color={Colors.gray}>7日年化收益率</TextStyled>
                </View>
              </View>
            </ListView> */}

          </ContentView>
        </PageView>
      </PageScrollView>
    )
  }
}

export default Financial
