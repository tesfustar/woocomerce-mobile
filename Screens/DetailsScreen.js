import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Swiper from 'react-native-swiper'
import MapView from 'react-native-maps';
const MIN_HEIGHT=55
const DetailsScreen = ({route}) => {
    const product=route.params;
    const [text,setText]=useState(product.desccription.slice(0,150))
    const [seeMore,setSeeMore]=useState(false)
  console.log(product)
    const images =[
        {
          image:require('../assets/4.jpg'),
        },
        {
         image:require('../assets/2.jpg'),
        },
        {
            image:require('../assets/3.jpg'),
       }
    ]
  return (
    <View style={styles.container}>
     <ScrollView>
     <View style={{height:220}}>
         <Swiper autoplay={true} activeDotColor="#fff" autoplayTimeout={3.5}>
   {images.map((img,i)=>(
          <View style={{height:220}} key={i}>
          <Image source={img.image}
              style={{flex:1,resizeMode:'cover', width: '100%', height: '100%'}} />
              </View>
         
   ))}
        </Swiper>
   </View>
    <View style={styles.footer}>
        <View style={{paddingVertical:5}}>
        <Text style={{fontFamily:'Roboto-Bold',color:'#EF4444',fontSize:26}}>ETB 300</Text> 
        <Text style={{fontFamily:'Roboto-Medium',color:'#334155',fontSize:16}}>{product.name}</Text>
         <View style={{paddingVertical:4,flexDirection:'row'}}>
           <Text style={{fontSize:15,fontFamily:'Roboto-Medium'}}>{text}{!seeMore && '...'}
           <Text onPress={()=>{
             if(!seeMore){
              setText(product.desccription)
              setSeeMore(true)
             }else{
              setText(product.desccription.slice(0,150))
              setSeeMore(false)
             }
           }}
           style={{fontFamily:'Roboto-Medium',color:'#374151',fontSize:14}}>{seeMore ? '...ShowLess' : 'ShowMore'}</Text>
           </Text>
           
           </View>

           <View>
           {/* <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /> */}
           </View>
        </View>

    </View>
     </ScrollView>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    footer:{
        padding:10
    }
})