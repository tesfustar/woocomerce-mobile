import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, createContext, useState } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { DarkTheme as PaperDarkTheme, Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'

import TabNavigator from './Navigation/TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated'
import CustomDrawer from './Screens/CustomDrawer'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { useTheme } from './context/ThemeContext';
import { MyAdsScreen, BookmarkScreen } from './Screens';
import AuthNavigation from './Navigation/AuthNavigation';
const Drawer = createDrawerNavigator();


const App = () => {
  const { darkMode } = useTheme()
  console.log(darkMode)
  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#F1F5F9',
      text: '#334155'
    }
  }
  const customDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#171717',
      text: '#CBD5E1'
    }
  }
  const theme = darkMode ? customDarkTheme : customDefaultTheme
  return (

    <PaperProvider theme={theme}>

      <NavigationContainer theme={theme}>
        {/* <AuthNavigation /> */}
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#EF4444',
            drawerInactiveTintColor: 'gray',
            drawerActiveTintColor: 'white',
            drawerLabelStyle: {
              marginLeft: -20, fontSize: 15,
              fontFamily: 'Roboto-Medium',
            }
          }}

        >
          <Drawer.Screen name="Home" component={TabNavigator}
            options={{
              drawerIcon: ({ color }) => (
                <Entypo name='home' color={color} size={20} />
              )
            }}
          />
          <Drawer.Screen name="Bookmarks" component={BookmarkScreen}
            options={{
              drawerIcon: ({ color }) => (
                <FontAwesome name='bookmark' color={color} size={20} />
              )
            }}
          />
          <Drawer.Screen name="My Ads" component={MyAdsScreen}
            options={{
              drawerIcon: ({ color }) => (
                <FontAwesome name="buysellads" color={color} size={20} />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App



