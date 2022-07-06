import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground ,Image,FlatList,ScrollView   } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {sampleData} from './data'
// import LottieView from 'lottie-react-native';
const CategoryProductScreen = ({navigation}) => {
    const [referashing,setRefreshing]=useState(false)
    const Card=({product})=>{
        return(

            <TouchableOpacity activeOpacity={0.7} 
            onPress={()=>navigation.navigate('Details',product)}>
            <View style={styles.card}>
          
            <View style={{height:120,alignItems:'center',overflow:'hidden'}}>
              
            <Image source={product.image}
            style={{flex:1,resizeMode:'cover', width: '100%', height: '100%',borderRadius:5}} />
            </View>
            <View style={{ padding:4,}}>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:16}}>ETB 150</Text>
            <TouchableOpacity >
            <MaterialIcons  name='favorite-outline' size={22} color='#EF4444' />
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
        {/* <View style={{backgroundColor:'#EF4444',padding:10,flexDirection:'row',
        alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>navigation('back')}>
        <Entypo  name="arrow-long-left" size={26} color="#fff" style={{marginRight:5}}/>
       
        </TouchableOpacity> 
        <View style={{justifyContent:'flex-end',}}>
            <TouchableOpacity>
          <MaterialIcons  name="filter-list-alt" size={30} color="#fff" /> 
            </TouchableOpacity>
        </View>
        </View> */}
      <View style={{flex:1}}>
  <FlatList 
   data={sampleData}
   vertical
   numColumns={2}
   showsVerticalScrollIndicator={false}
   renderItem={({item})=><Card  product={item}/>}
   columnWrapperStyle={{justifyContent:'space-between'}}
   contentContainerStyle={{paddingBottom:15,marginTop:10}}
   refreshing={referashing}
   onRefresh={()=>sampleData}
   />

  </View>
    </View>
  )
}

export default CategoryProductScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    searchcontainer:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ff4500',
        borderWidth:1.5,
        paddingHorizontal:10,
        marginTop:5,
        marginHorizontal:10,
        borderRadius:5,
        backgroundColor:'#fff',
        width:'83%'
    },
    card:{

        backgroundColor:'white',
        width:160,
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