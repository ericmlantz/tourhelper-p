//imported 3rd party libraries
import { Text } from 'react-native'

//imported from this repo
import defaultStyles from '../config/styles'

//create the component
function AppText({ children, style, ...otherProps }) {

  //render
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  )
}

//make this component available to the app
export default AppText
