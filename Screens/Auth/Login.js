import { StyleSheet, Text, View,TouchableOpacity,TextInput as NormalTextInput } from 'react-native'
import React from 'react'
import { TextInput,List  } from 'react-native-paper';
const Login = ({navigation}) => {
  return (
    <View style={{flex:1,  padding:10}}>
      <View style={styles.container}>

      </View>
      <View style={styles.footer}>
   
      
    <View style={{flexDirection:'row',borderWidth:2,borderColor:'#CBD5E1',
    alignItems:'center',paddingHorizontal:4,borderRadius:7}}>
      <Text style={{borderRightWidth:2,borderColor:'#CBD5E1',fontSize:16,fontWeight:'700',paddingHorizontal:4}}>+251</Text>
      <NormalTextInput placeholder='phone number' style={{width:'80%'}} />
    </View>

   
      <TextInput
      label=" password"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 }}
    />
     <TouchableOpacity activeOpacity={0.7} 
      
      style={{backgroundColor:'#EF4444',
      padding:10,alignItems:'center',paddingHorizontal:30,borderRadius:5,marginVertical:10}}>
        <Text style={{fontSize:16,fontWeight:'700',color:'white'}}>Sign in</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:16,fontWeight:'600',color:'#0F172A'}}>don't have an account? 
      <TouchableOpacity    onPress={()=>navigation.navigate("register")}>
   
      <Text style={{fontSize:17,fontWeight:'700',color:'#EF4444'}}> Sign up</Text>
      </TouchableOpacity>
      </Text>
      </View>
      </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:2,
     padding:20
    },
    footer:{
        flex:5,
    }
})