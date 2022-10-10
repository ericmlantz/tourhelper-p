//imported 3rd party libraries
import Platform from 'react-native'
import colors from './colors'

//make this component available to the app
export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.primary
  }
}
