import styled from 'styled-components/native'
import Colors from '../style/color'

let PageView = styled.View`
  background-color: ${props => props.color ? props.color : Colors.white};
  width: 100%;
`

let PageScrollView = styled.ScrollView`
  background-color: ${Colors.eee};
`

let CarouselView = styled.View`
  width: 90%;
  height: 180;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 5%;
  border-radius: 5;
  overflow: hidden;
  background-color: ${props => props.bgColor ? props.bgColor : Colors.mBlue};
`

let LinkView = styled.TouchableHighlight`
  background-color: ${props => props.bgColor ? props.bgColor : Colors.white};
`

let CarouselBox = LinkView.extend`
  width: 90%;
  height: 60;
  margin-left: 5%;
  border-radius: 30;
  overflow: hidden;
`

export {
  PageView,
  PageScrollView,
  LinkView,
  CarouselView,
  CarouselBox
}
