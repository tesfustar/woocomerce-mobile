import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import { Login,Register } from '../Screens';
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="register" component={Register} />
  </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})