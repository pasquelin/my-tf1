import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ScreenDefault from './screens/Default'
import ScreenVideo from './screens/Video'
import ScreenAbout from './screens/About'

const RootStack = createStackNavigator()

export const navigationRef = React.createRef()

export default function RootStackScreen() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="DefaultScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="DefaultScreen" component={ScreenDefault} />
        <RootStack.Screen name="ScreenVideo" component={ScreenVideo} />
        <RootStack.Screen name="ScreenAbout" component={ScreenAbout} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
