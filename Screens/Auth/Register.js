import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput,List  } from 'react-native-paper';
const Register = ({navigation}) => {
  return (
    <View style={{flex:1,  padding:10}}>
      <View style={styles.container}>

      </View>
      <View style={styles.footer}>
      <TextInput
      label="phone number"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 }}
    />
      <View  style={{flexDirection:'row',alignItems:'center',}}>
    <TextInput
      label="First Name"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 ,width:'49%',marginRight:5}}
    />
      <TextInput
      label="Last Name"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 ,width:'49%'}}
    />
    </View>
    <TextInput
      label="Last Name"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 }}
    />
      <TextInput
      label="password"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 }}
    />
      <TextInput
      label="confirm password"
      // value={text}
      // onChangeText={text => setText(text)}
      mode="outlined"
      activeOutlineColor='#0F172A'
      style={{ height: 43 }}
    />
     <TouchableOpacity activeOpacity={0.7} 
      
      style={{backgroundColor:'#EF4444',
      padding:10,alignItems:'center',paddingHorizontal:30,borderRadius:5,marginVertical:10}}>
        <Text style={{fontSize:16,fontWeight:'700',color:'white'}}>Sign up</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:16,fontWeight:'600',color:'#0F172A'}}>already have an account? 
      <TouchableOpacity onPress={()=>navigation.navigate("login")}>
      
      <Text style={{fontSize:17,fontWeight:'700',color:'#EF4444'}}> Sign in</Text>
      </TouchableOpacity>
      </Text>
      </View>
      </View>
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:2,
     padding:20
    },
    footer:{
        flex:6,
    }
})