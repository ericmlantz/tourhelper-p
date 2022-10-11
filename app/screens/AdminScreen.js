//imported 3rd party libraries
import { StyleSheet } from 'react-native'
import colors from '../config/colors'

//imported from this repo
import Screen from '../components/Screen'
import AppText from '../components/AppText'

//create the component
const AdminScreen = () => {
  //render
  return (
    <Screen>
      <AppText style={styles.mytext}>Admin Screen</AppText>
    </Screen>
  )
}

//define your styles
const styles = StyleSheet.create({
  mytext: {
    color: colors.secondary
  }
})

//make this component available to the app
export default AdminScreen
