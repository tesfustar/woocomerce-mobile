import React, {useRef,useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native';
import HeaderImageScrollView, {
    TriggeringView,
  } from 'react-native-image-header-scroll-view';
  import {sampleData} from './data'
  import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapView,{enableLatestRenderer } from 'react-native-maps';
const MIN_HEIGHT =  55;
const MAX_HEIGHT = 250;
const BussinessDetailScreen = ({navigation}) => {
  enableLatestRenderer();
    const navTitleView = useRef(null);
    const sample='Your pizza order to snack corner has been accepted and being processed'
    const [text,setText]=useState(sample.slice(0,150))
    const [seeMore,setSeeMore]=useState(false)
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
            <FontAwesome  name='bookmark-o' size={20} color='#EF4444' />
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
  <StatusBar barStyle="light-content" />
  <HeaderImageScrollView
      maxHeight={220}
      minHeight={55}
 renderFixedForeground={()=>(
     <Animatable.View style={styles.navTitleView} ref={navTitleView}>
         <Text style={styles.navTitle}>title</Text>
     </Animatable.View>
 )}
      renderHeader={() => (
          <Image source={require("../assets/1.jpg")} style={styles.image} />
          )}
          renderForeground={() => (
            <View style={styles.titleContainer} >
              <TouchableOpacity >
                <Text style={styles.imageTitle}>Tap Me!</Text>
              </TouchableOpacity>
            </View>
          )}
     >
      <View >
          <TriggeringView 
         onHide={() => navTitleView.current.fadeInUp(200)}
         onDisplay={() => navTitleView.current.fadeOut(100)}
         >
             <View style={{padding:10}}>
             <View style={{flexDirection:'row',alignContent:'center',}}>
            <FontAwesome  name='map-marker' size={22} color='#EF4444' />
          
            <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:16,paddingHorizontal:4}}>address</Text>
            </View>
            <View style={{paddingVertical:4,flexDirection:'row'}}>
           <Text style={{fontSize:15,fontFamily:'Roboto-Medium'}}>{text}{!seeMore && '...'}
           <Text onPress={()=>{
             if(!seeMore){
              setText(sample)
              setSeeMore(true)
             }else{
              setText(sample.slice(0,150))
              setSeeMore(false)
             }
           }}
           style={{fontFamily:'Roboto-Medium',color:'#374151',fontSize:14}}>{seeMore ? '...ShowLess' : 'ShowMore'}</Text>
           </Text>
           
           </View>
           <View>
           <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:16,paddingHorizontal:4}}>Lists</Text>
               <FlatList 
                  data={sampleData}
                  horizontal
                 showsHorizontalScrollIndicator={false}
                
                  renderItem={({item})=><Card  product={item}/>}
                
                  contentContainerStyle={{marginTop:10}}
                  />
           </View>
           <View style={{flex:1}}>
           {/* <MapView
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }}
  /> */}
           </View>
           <FlatList 
                  data={sampleData}
                  horizontal
                 showsHorizontalScrollIndicator={false}
                
                  renderItem={({item})=><Card  product={item}/>}
                
                  contentContainerStyle={{marginTop:10}}
                  />
             </View>
          </TriggeringView>
      </View>
    </HeaderImageScrollView>
          </View>

  )
}

export default BussinessDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
      },
      titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
      },
      navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
      },
      navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
      },
      card:{

        backgroundColor:'white',
        width:160,
        marginHorizontal:3,
        borderRadius:5,
        padding:3,
        // marginBottom:20,
        shadowColor: '#FAFAFA',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,  
        elevation: 0.4
         }
})