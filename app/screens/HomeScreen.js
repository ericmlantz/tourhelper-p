//imported 3rd party libraries
import { StyleSheet } from 'react-native'

//imported from this repo
import Screen from '../components/Screen'
import AppText from '../components/AppText'

//create the component and display it

const HomeScreen = () => {
  //render
  return (
    <Screen>
      <AppText>Home Screen</AppText>
    </Screen>
  )
}

//define your styles
const styles = StyleSheet.create({
  container: {}
})

export default HomeScreen
