import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground ,Image,FlatList,ScrollView   } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Messages } from '../data'
import {sampleData} from '../data'
// import LottieView from 'lottie-react-native';
const ChatScreen = ({navigation}) => {
    const [referashing,setRefreshing]=useState(false)
    const Card=({messages})=>{
        return(
        <TouchableOpacity activeOpacity={0.7}  style={{width:'100%'}}
          onPress={()=>navigation.navigate('Messages',{username:messages.name})}
          >
            <View style={styles.card}>
              <View style={styles.userInfo}>
              <View style={{width:50,height:50,paddingLeft:4}}>
              <Image source={messages.image}  style={{flex:1,resizeMode:'cover',
               width: 50, height: 50,borderRadius:50}}/>
            </View>

            <View style={styles.textSection}>

            <View style={styles.userInfoText}>
              <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:16}}>{messages.name}</Text>
              <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:14}}>{messages.time}</Text>
            </View>
            <Text  style={{fontFamily:'Roboto-Medium',color:'#333333',fontSize:14}} numberOfLines={1} ellipsizeMode='tail'>{messages.details}</Text>
            </View>
         
            </View>
            </View>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
    <View style={{marginHorizontal:5}}>
   <FlatList 
   data={Messages}
   keyExtractor={item=>item.id}
   renderItem={({item})=><Card  messages={item}/>}
   showsVerticalScrollIndicator={false}
   refreshing={referashing}
   onRefresh={()=>sampleData}
   />

  </View>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // paddingLeft:20,
       
    },

    card:{
      width:'100%',
      paddingTop:5
      },
         userInfo:{
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         
         },
         textSection:{
           flexDirection:'column',
           justifyContent:'center',
           padding:15,
          //  marginLeft:10,
           width:300,
           borderBottomWidth:1,
           borderBottomColor:'gray'
         },

         userInfoText:{
           flexDirection:'row',
           justifyContent:'space-between'
         }
})