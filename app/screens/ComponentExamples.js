//imported 3rd party libraries
import { StyleSheet, View } from 'react-native'

//imported from this repo
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'

//create the component
const ComponentExamples = () => {
  //render
  return (
    <>
      {/* Using empty brackets <>Content</> allows you to not need a View or Screen and it is just a holder for the inner components which has to be all in one container to render. */}

      <AppButton
        title="AppButton Component"
        onPress={() => console.log('Nothing Happens')} //Shows the phrase 'Nothing Happens' in console.
        color="medium" //this is the 'medium' color from ./config/colors. You don't need colors.medium here because of how it is set up in AppButton.js
      />

      <AppText style={styles.text}>AppText</AppText>
      {/* styles.text is taken from the 'text' styles set in the ./config/styles script. So you won't see it below and you don't need to import it. */}

      <AppTextInput width="75%" placeholder="AppTextInput Placeholder" />
      {/* AppleTextInput withOUT icon and smaller width */}

      <AppTextInput icon="home" placeholder="AppTextInput Placeholder + icon" />
      {/* AppleTextInput with an icon and default width */}
    </>
  )
}

//define your styles
const styles = StyleSheet.create({
  container: {}
  //No styles are used, so it doesn't have to be here, but doesn't hurt anything if it's empty.
})

//make this component available to the app
export default ComponentExamples
