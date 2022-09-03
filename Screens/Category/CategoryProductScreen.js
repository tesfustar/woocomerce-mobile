import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground ,Image,FlatList,ScrollView   } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {sampleData} from '../data'
// import LottieView from 'lottie-react-native';
const CategoryProductScreen = ({navigation,route}) => {
      const categories=route.params;
      console.log(categories?.subCategory)
      const [subCategories,setSubCategories]=useState(categories?.subCategory)
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
    const CategoryCard=({product})=>{
     return(
      <TouchableOpacity activeOpacity={0.7} 
      // onPress={()=>navigation.navigate('Details',product)}
      >
      <View style={styles.Categorycard}>
    
      <View style={{alignItems:'center',overflow:'hidden'}}>
      <Image  source={{uri: product.image}} 
                 style={{width: 30, height: 30}} />
      </View>
      <View style={{ padding:4,}}>
    
      <Text 
      style={{fontFamily:'Roboto-Bold ',color:'black',fontSize:15}} numberOfLines={1} ellipsizeMode='tail'>{product.name}</Text>

      </View> 
      </View>
      </TouchableOpacity>
     )
    }
  return (
    <View style={styles.container}>
       <View >
  <FlatList 
   data={subCategories}
   horizontal
   showsHorizontalScrollIndicator={false}
   renderItem={({item})=><CategoryCard  product={item}/>}
   
   contentContainerStyle={{paddingBottom:15,marginTop:10}}
   
   />

  </View>
       
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
         },
         Categorycard:{
          flexDirection:'row',
          backgroundColor:'dodgerblue',
          alignItems:'center',
          borderRadius:10,
          marginHorizontal:4,
          padding:4,
          fontFamily:'Roboto-Bold'
         }

})