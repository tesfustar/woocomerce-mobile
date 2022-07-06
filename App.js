import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer ,DarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { DarkTheme as PaperDarkTheme,Provider as PaperProvider } from 'react-native-paper'
import BookmarkScreen from './Screens/BookmarkScreen';
import MyAdsScreen from './Screens/MyAdsScreen';
import TabNavigator from './Navigation/TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated'
import CustomDrawer from './Screens/CustomDrawer'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const Drawer = createDrawerNavigator();
const App = () => {
  return (
      <PaperProvider theme={PaperDarkTheme}>
     <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>}
       screenOptions={{headerShown:false,
        drawerActiveBackgroundColor:'#EF4444',
        drawerInactiveTintColor:'gray',
        drawerActiveTintColor:'white',
        drawerLabelStyle:{marginLeft:-20  ,fontSize: 15,
        fontFamily: 'Roboto-Medium',}}}
       
       >
      <Drawer.Screen name="Home" component={TabNavigator} 
      options={{
        drawerIcon:({color})=>(
          <Entypo name='home' color={color} size={20} />
        )
      }}
      />
      <Drawer.Screen name="Bookmarks" component={BookmarkScreen} 
       options={{
        drawerIcon:({color})=>(
          <FontAwesome  name='bookmark'  color={color} size={20} />
        )
      }}
      />
      <Drawer.Screen name="My Ads"  component={MyAdsScreen}
       options={{
        drawerIcon:({color})=>(
          <FontAwesome  name="buysellads"color={color} size={20} />
        )
      }}
      />
      </Drawer.Navigator>
     </NavigationContainer>
     </PaperProvider>
  )
}

export default App



