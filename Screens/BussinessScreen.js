import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground ,Image,FlatList,ScrollView   } from 'react-native'
import React,{useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {sampleData} from './data'
// import LottieView from 'lottie-react-native';
const BussinessScreen = ({navigation}) => {
    const [referashing,setRefreshing]=useState(false)
    const Card=({product})=>{
        return(

            <TouchableOpacity activeOpacity={0.9} 
            onPress={()=>navigation.navigate('BussinessDetail',product)}>
            <View style={styles.card}>
           <View style={{height:170,alignItems:'center',overflow:'hidden'}}>
            <Image source={product.image}
            style={{flex:1,resizeMode:'cover', width: '100%', height: '100%',borderRadius:5}} />
            </View>
            <View style={{ padding:4,}}>
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignContent:'center',}}>
            <FontAwesome  name='map-marker' size={22} color='#EF4444' />
          
            <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:16,paddingHorizontal:4}}>address</Text>
            </View>
            <TouchableOpacity >
            <FontAwesome  name='bookmark-o' size={22} color='#EF4444' />
            </TouchableOpacity>
            </View>
            <Text 
            style={{fontFamily:'Roboto-Bold ',color:'black',fontSize:15}} numberOfLines={1} ellipsizeMode='tail'>{product.name}</Text>
      
            </View> 
            </View>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
    
      <View style={{flex:1}}>
  <FlatList 
   data={sampleData}
   vertical
   showsVerticalScrollIndicator={false}
   renderItem={({item})=><Card  product={item}/>}
   refreshing={referashing}
   onRefresh={()=>sampleData}
   />

  </View>
    </View>
  )
}

export default BussinessScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
   
    card:{

        backgroundColor:'white',
        paddingTop:10,
        marginHorizontal:10,
        borderRadius:10,
        marginBottom:20,
        shadowColor: '#FAFAFA',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,  
        elevation: 0.4
         }
})