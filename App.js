//imported 3rd party libraries
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
//imported from this repo
import HomeScreen from './app/screens/HomeScreen'
import MapScreen from './app/screens/MapScreen'
import AdminScreen from './app/screens/AdminScreen'
import colors from './app/config/colors'

//make this component available to display
const Tab = createBottomTabNavigator()

export default function App() {
  //render
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: colors.primary
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="map-outline"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name="Admin"
          component={AdminScreen}
          options={{
            tabBarLabel: 'Admin View',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-tie-hat"
                color={color}
                size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
