import styled from 'styled-components/native'
import Colors from '../../../common/style/color'
import Size from '../../../common/style/size'

let ListView = styled.TouchableHighlight`
  display: flex;
  background-color: ${props => props.bgColor ? props.bgColor : Colors.white}
`

export {
  ListView
}
