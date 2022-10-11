//imported 3rd party libraries
import { StyleSheet, Dimensions, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useState } from 'react'

//imported from this repo
import AppText from './AppText'
import Screen from './Screen'
import useLocation from '../hooks/useLocation'
import colors from '../config/colors'

//create the component
const AppMap = () => {
  const location = useLocation()
  const [pin, setPin] = useState({
    latitude:
    longitude: 12.4769,
    latitudeDelta: 0.001,
    longitudeDelta: 0.004
  })
  const [region, setRegion] = useState({
    latitude: 41.8986,
    longitude: 12.4769,
    latitudeDelta: 0.001,
    longitudeDelta: 0.004
  })
  //render
  return (
    <Screen style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance'
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.001,
            longitudeDelta: 0.004
          })
        }}
        query={{
          key: 'AIzaSyBWMqsfSsQZAYy--Tj-1Q3bLAx4QnCJ9cM',
          language: 'en',
          location: `${location.latitude},${location.longitude}`
        }}
        styles={{
          container: {
            flex: 0,
            position: 'absolute',
            width: '100%',
            zIndex: 1
          },
          listView: { backgroundColor: 'white' }
        }}
      />
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.004
        }}
        zoomEnabled={true}
      >
        <Marker draggable={true} coordinate={pin}>
          <Callout>
            <AppText>Meet Here at 6pm</AppText>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
        ></Marker>
      </MapView>
    </Screen>
  )
}

//define your styles
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

//make this component available to the app
export default AppMap
