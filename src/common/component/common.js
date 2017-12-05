import styled from 'styled-components/native'
import Colors from '../style/color'

// 全页面滚动 View
let PageScrollView = styled.ScrollView`
  background-color: ${props => props.bgColor ? props.bgColor : Colors.eee};
`

// 滚动 View 内部基类 View
let PageView = styled.View`
  background-color: ${props => props.color ? props.color : Colors.white};
  width: 100%;
`

// 带有点击事件的 View
let LinkView = styled.TouchableHighlight`
  background-color: ${props => props.bgColor ? props.bgColor : Colors.white};
`

// 页面内容 View
let ContentView = styled.View`
  width: 92%;
  margin-left: 4%;
  backgroundColor: ${props => props.bgColor ? props.bgColor : Colors.white};
`

// 理财页面顶部 View
let CarouselView = styled.View`
  width: 92%;
  height: 180;
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 4%;
  border-radius: 5;
  overflow: hidden;
  background-color: ${props => props.bgColor ? props.bgColor : Colors.mBlue};
`

// 理财页面滚动 View
let CarouselBox = LinkView.extend`
  width: 92%;
  margin-left: 4%;
  border-radius: 30;
  overflow: hidden;
  height: ${props => props.height ? props.height : 60};
`

let TextStyled = styled.Text`
  font-size: ${props => props.size ? props.size : 14};
  color: ${props => props.color ? props.color : Colors.black};
  font-weight: ${props => props.weight ? props.weight : 400};
`

let BottomText = TextStyled.extend`
  position: absolute;
  bottom: 0;
`

let BgText = BottomText.extend `
  paddingTop: 5;
  paddingBottom: 5;
  paddingLeft: 5;
  paddingRight: 5;
  background-color: ${props => props.bgColor ? props.bgColor : Colors.white};
`

export {
  PageScrollView,
  PageView,
  LinkView,
  ContentView,
  CarouselView,
  CarouselBox,
  TextStyled,
  BottomText,
  BgText
}
