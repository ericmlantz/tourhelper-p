//imported 3rd party libraries
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

//imported from this repo
import colors from '../config/colors'

// create the component
const AppButton = ({ title, onPress, color = 'primary' }) => {
  //render
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.button}>{title}</Text>
    </TouchableHighlight>
  )
}

// define your styles
const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  container: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15
  }
})

//make this component available to the app
export default AppButton
