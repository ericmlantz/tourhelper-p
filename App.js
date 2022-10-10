//imported 3rd party libraries
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, TextInput } from 'react-native'

//imported from this repo
import ComponentExamples from './app/screens/ComponentExamples'
import Screen from './app/components/Screen'

//make this component available to display
export default function App() {
  //render
  return (
    <Screen style={styles.container}>
      <ComponentExamples />
      {/* ComponentExamples is found in ./app/screens/ComponentExamples.js */}
      <StatusBar style="auto" />
      {/* Sets the color of the status bar text. Default value is "auto" which picks the appropriate value according to the active color scheme, eg: if your app is dark mode, the style will be "light". */}
    </Screen>
  )
}

//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //White Background
    alignItems: 'center',
    justifyContent: 'center'
  }
})
