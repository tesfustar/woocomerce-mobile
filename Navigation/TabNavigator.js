import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen,ProfileScreen,MessagesScreen ,NotificationScreen,CategoryProductScreen,ChatScreen,
  DetailsScreen,CreateScreen,BussinessDetailScreen,BussinessScreen,CategoryListScreen,} from '../Screens';

const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab =createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator();
const tabBarrVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if (routeName == 'Messages') {
      return 'none'
    }
    if (routeName == 'Chat') {
      return 'none'
    }
    if (routeName == 'Category') {
      return 'none'
    }
    if (routeName == 'BussinessDetail') {
      return 'none'
    }
    
    return 'flex'
  }
const TabNavigator = () => {

  return (
    <Tab.Navigator
  
    screenOptions={({route})=>({
      tabBarStyle: { display: tabBarrVisibility(route) },
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor:'transparent', borderTopWidth: 0, elevation: 0 },
      tabBarIcon:({focused,color,size})=>{
        let iconName;

        switch(route.name){
          case "home":
            return iconName =focused ?  <Entypo name='home' color='#EF4444' size={22} /> :<Octicons name='home' color='#EF4444' size={20} />
        
          case "Create":
            return iconName =focused ?  <FontAwesome name='camera' color='#EF4444' size={22} /> :<Feather name='camera' color='#EF4444' size={20} />
       
          case "Message":
            return iconName =focused ?  <Entypo name='message' color='#EF4444' size={22} /> :<MaterialCommunityIcons name='message-reply-outline' color='#EF4444' size={20} />
          
          case "Profile":
            return iconName =focused ?  <FontAwesome name='user' color='#EF4444' size={22} /> :<FontAwesome name='user-o' color='#EF4444' size={20} />
       
          default:
            iconName =focused ? 'home' :'home-outline'

        }
       
      }
    })}
    
    
    
    >
    <Tab.Screen name="home" component={HomeStackScreen}  options={({ route }) => ({
          tabBarStyle: { display: tabBarrVisibility(route) },headerShown: false})}
          />
    <Tab.Screen name="Create" component={CreateScreen}  options={{headerShown: false}}/>
    <Tab.Screen name="Message" component={ChatStackScreen} options={({ route }) => ({
          tabBarStyle: { display: tabBarrVisibility(route) },headerShown: false})} 
    
    />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
  </Tab.Navigator>
  )
}

export default TabNavigator

const HomeStackScreen = ({ navigation, route }) => {

    return (
        <HomeStack.Navigator >
         
        <HomeStack.Screen name="Home" component={HomeScreen}  
        options={{ headerShown: false }}  />
         <HomeStack.Screen name="Category" component={CategoryProductScreen}  
          options={({route})=>({presentation: 'card',title:route.params.name, headerStyle: {
            backgroundColor: '#EF4444',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerLeftContainerStyle:{<View></View>}
          })} />
        <HomeStack.Screen name="Details" component={DetailsScreen}  
        options={{ headerShown: false,presentation: 'modal', transitionSpec: {
          open: TransitionSpecs.FadeOutToBottomAndroidSpec ,
          close: TransitionSpecs.FadeOutToBottomAndroidSpec ,
        },
        gestureEnabled: true, ...TransitionPresets.ModalTransition ,}} 
        />
    <HomeStack.Screen name="Bussiness" component={BussinessScreen}  
        options={{ headerShown: false,presentation: 'modal', }}  />
      <HomeStack.Screen name="BussinessDetail" component={BussinessDetailScreen} 
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerShown:false
        })}
         />
          <HomeStack.Screen name="CatList" component={CategoryListScreen}  
        options={{ headerShown: false }}  />
        </HomeStack.Navigator>
      )
  }

  const ChatStackScreen = ({ navigation, route }) => {
    return (
      <TopTab.Navigator  initialRouteName='Notifications'   screenOptions={({route})=>({
        
        tabBarLabelStyle: { fontSize: 15,fontFamily:'Roboto-Bold' ,color:'white',
         display: tabBarrVisibility(route)},
        
        swipeEnabled:false,
        tabBarStyle: { backgroundColor: '#EF4444', display: tabBarrVisibility(route) },
      })}>
        <TopTab.Screen name="Notifications" component={NotificationScreen} />
        <TopTab.Screen name="Chat" component={MessageStackScreen}  />
      </TopTab.Navigator>
    );
  }

  const MessageStackScreen = ({ navigation, route }) => {
   
    return (
        <ChatStack.Navigator  screenOptions={({route})=>({
        
          tabBarLabelStyle: { fontSize: 15,fontFamily:'Roboto-Bold' ,color:'white',
           display: tabBarrVisibility(route)},
          // tabBarItemStyle: { width: 100 },
          swipeEnabled:false,
          tabBarStyle: { backgroundColor: '#EF4444', display: tabBarrVisibility(route) },
        })} >
         
        <ChatStack.Screen name="chatNotification" component={ChatScreen}  
        options={{ headerShown: false }}  />
         <ChatStack.Screen name="Messages" component={MessagesScreen}  
        options={({route})=>({presentation: 'card',title:route.params.username, headerStyle: {
          backgroundColor: '#EF4444',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },})}  />
         </ChatStack.Navigator>
      )
  }