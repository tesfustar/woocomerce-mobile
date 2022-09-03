import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StepIndicator from 'react-native-step-indicator';


const Stepper = ({currentStep}) => {
  const labels = ["Select Category","Delivery Address","Order Summary","Payment Method","Track"];
    
  const customStyles = {
          stepIndicatorSize: 25,
          currentStepIndicatorSize:30,
          separatorStrokeWidth: 2,
          currentStepStrokeWidth: 3,
          stepStrokeCurrentColor: '#EF4444',
          stepStrokeWidth: 3,
          stepStrokeFinishedColor: '#fe7013',
          stepStrokeUnFinishedColor: '#aaaaaa',
          separatorFinishedColor: '#fe7013',
          separatorUnFinishedColor: '#aaaaaa',
          stepIndicatorFinishedColor: '#fe7013',
          stepIndicatorUnFinishedColor: '#ffffff',
          stepIndicatorCurrentColor: '#ffffff',
          stepIndicatorLabelFontSize: 13,
          currentStepIndicatorLabelFontSize: 13,
          stepIndicatorLabelCurrentColor: '#fe7013',
          stepIndicatorLabelFinishedColor: '#ffffff',
          stepIndicatorLabelUnFinishedColor: '#aaaaaa',
          labelColor: '#999999',
          labelSize: 23,
          currentStepLabelColor: '#fe7013'
        }
  return (
    <View style={{flex:1}}>
   
    <Text style={{fontSize:100}}>hello</Text>
    </View>
  )
}

export default Stepper

const styles = StyleSheet.create({})