//imported 3rd party libraries
import { StyleSheet } from 'react-native'

//imported from this repo
import Screen from '../components/Screen'
import AppMap from '../components/AppMap'

//create the component
const MapScreen = () => {
  //render
  return (
    <Screen>
      <AppMap />
    </Screen>
  )
}

//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

//make this component available to the app
export default MapScreen
