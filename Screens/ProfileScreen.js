import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground ,Image,FlatList,ScrollView   } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    <View  style={styles.header}></View>
    <View  style={styles.footer}>
    <View style={{alignItems:'center',justifyContent:'center',top:-40,marginHorizontal:20}}>
   <View style={{alignItems:'center',justifyContent:'center',
   backgroundColor:'white',width:'100%',padding:10,borderRadius:10,
   shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
   }}>
    <ImageBackground source={require('../assets/pic-1.png')}
          style={{height:100,width:100}}
          imageStyle={{borderRadius:50}}
          />
          <TouchableOpacity activeOpacity={0.8} style={{right:-50,backgroundColor:'#EF4444',
          top:-70,height:40,width:40,borderRadius:50,
          alignItems:'center',justifyContent:'center'}}>

   <FontAwesome  name="edit" size={22} color="#fff" />
   </TouchableOpacity>
   <Text style={{fontFamily:'Roboto-Medium',fontSize:18}}>name</Text>
   <Text style={{fontFamily:'Roboto-Medium',fontSize:18}}>phone no</Text>
          </View>        
       </View>

         <View style={{padding:5}}>
           <ScrollView style={{padding:5}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',margin:3,
            padding:15,width:'100%',borderBottomColor:'gray',borderBottomWidth:1
            }}>
            <FontAwesome  name="list-alt" size={20} color="red" style={{marginRight:5}}/>
            <Text  style={{fontFamily:'Roboto-Medium',
            fontSize:18,width:'100%'}}>my Listings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',margin:3,
            padding:15,width:'100%',borderBottomColor:'gray',borderBottomWidth:1}}>
            <FontAwesome  name="buysellads" size={20} color="red" style={{marginRight:5}}/>
            <Text  style={{fontFamily:'Roboto-Medium',fontSize:18,width:'100%'}}>my ads</Text>
            </TouchableOpacity> 
           </ScrollView>

        </View>
    </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EF4444'
  },
  header:{
    backgroundColor:'#EF4444',
    flex:2
  },
  footer:{
    backgroundColor:'#fff',
    flex:5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
})