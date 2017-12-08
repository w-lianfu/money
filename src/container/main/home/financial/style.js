import { StyleSheet } from 'react-native'
import Colors from '../../../../common/style/color'
import Size from '../../../../common/style/size'

let FinancialStyle = StyleSheet.create({
  ListRow: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    borderBottomColor: Colors.eee,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1
  },
  IconView: {
    width: Size.size26,
    height: Size.size26,
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  IconImage: {
    width: Size.size26,
    height: Size.size26,
    resizeMode: 'stretch'
  },
  ListContent: {
    flex: 1,
    marginLeft: 10
  },
  ListRight: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
})

export default FinancialStyle
