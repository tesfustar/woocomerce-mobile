import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground ,
    Image,FlatList,ScrollView,StatusBar    } from 'react-native'
import React,{useRef,useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from "react-native-raw-bottom-sheet";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useTheme as useContextTheme } from '../../context/ThemeContext';
import { useSelector } from 'react-redux';
import {sampleData} from '../data'
import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
const HomeScreen = ({navigation}) => {
  const categories = useSelector((state) => state.category);
  const headers={
    "Content-Type":"Application/json",
    "Accept":"Application/json",
    // "Authorization":`Bearer ${token}`
  }
const CategoriesData=useQuery('categoriesDataApi',async()=>
await axios.get('http://192.168.0.109:5000/api/category',{headers}),
{
  keepPreviousData:false,
  refetchOnWindowFocus:false,
  // enabled:!!token
}
)

    const [scrollEnabled,setScrollEnabled]=useState(false)
    const refRBSheet = useRef();
    const enableScroll = () => setScrollEnabled(true);
    const disableScroll = () =>setScrollEnabled(true);
    const {handleChange,darkMode} =useContextTheme()
    const Card=({product})=>{
        return(

            <TouchableOpacity activeOpacity={0.7} 
            onPress={()=>navigation.navigate('Details',product)}>
            <View style={[styles.card,{backgroundColor:darkMode ? '#262626':'#fff'}]}>
          
            <View style={{height:120,alignItems:'center',overflow:'hidden'}}>
              
            <Image source={product.image}
            style={{flex:1,resizeMode:'cover', width: '100%', height: '100%',borderRadius:5}} />
            </View>
            <View style={{ padding:4,}}>
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Roboto-Bold',color:'rgb(51,65,85)',
            fontSize:16,color:darkMode ? '#fff' : '#1E293B'}}>ETB 150</Text>
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
        <StatusBar backgroundColor='#EF4444' barStyle="light-content"/>
     <View  style={styles.header}>
         <View style={styles.topheader}>
         <TouchableOpacity   onPress={()=>navigation.openDrawer()}>
       <Entypo  name="menu" size={28} color="#fff" style={{marginRight:5}}/>
         </TouchableOpacity>
         <TouchableOpacity  >
         <Ionicons  name="notifications" size={25} color="#fff" style={{marginRight:5}}/>
            </TouchableOpacity>
         </View>
     <View style={{flexDirection:'row',alignItems:'center'}}>
       <View style={[styles.searchcontainer,{backgroundColor:darkMode ? '#404040' : 'white',borderRadius:5}]}>
       <Ionicons  name="ios-search" size={20} color="#EF4444" style={{marginRight:5}}/>
           <TextInput 
        placeholder='Find car,Homes,mobile phones and more...'
        style={{color:darkMode ? '#fff' : '#1E293B'}}
        />
       </View>
       <TouchableOpacity activeOpacity={0.8} onPress={() => refRBSheet.current.open()} >
         <Ionicons  name="filter" size={28} color="#fff" style={{marginRight:5}}/>
       </TouchableOpacity>
        </View> 
     </View>
     <View style={styles.footer}>
         <ScrollView showsVerticalScrollIndicator={false} verical={true}>
             <View style={styles.footertext}>
                 <Text style={{fontFamily:'Roboto-Medium',fontSize:14,color:darkMode ? '#fff' : 'black'}}>Browse Categories</Text>
                 <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('CatList')}>
                 <Text style={{fontFamily:'Roboto-Bold',fontSize:15,color:'#F87171'}}>View All</Text>
                 </TouchableOpacity>
             </View>
             <View style={styles.categoryContainer} >
          
               {CategoriesData?.isFetched ? (
                 CategoriesData?.data?.data?.slice(0,3)?.map((item)=>(
                  <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.6} key={item._id}
                  onPress={()=>navigation.navigate('Category',item)}>
                 <View style={styles.categoryIcon}>
                 <Image  source={{uri: item.image}} 
                   style={{width: 40, height: 40}} />
                 
                <Text style={styles.categoryText} >{item.name}</Text>
                 </View>
                 </TouchableOpacity>
                 ))
               ):(
                <Text>Loading</Text>
               )}
             </View>
             <View style={styles.categoryContainer}>
                 <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.6}>
                 <View style={styles.categoryIcon}>
                 <FontAwesome  name="car" size={20} color="#EF4444" style={{marginRight:5}}/>
                 <Text style={styles.categoryText} >Cars</Text>
                 </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.6}>
                 <View style={styles.categoryIcon}>
                 <FontAwesome  name="home" size={20} color="#EF4444" style={{marginRight:5}}/>
                 <Text style={styles.categoryText} >Homes</Text>
                 </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.categoryBtn} activeOpacity={0.6}>
                 <View style={styles.categoryIcon}>
                 <Image source={require('../../assets/health.png')}  style={{height:40,width:40}}/>
                <Text style={styles.categoryText} >Health</Text>
                 </View>
                 </TouchableOpacity>
             </View>
             <View style={{paddingBottom:20}}>
             <Text style={{fontFamily:'Roboto-Bold',fontSize:17,paddingHorizontal:15,color:'#F87171'}}>Premium Ads</Text>
               <View style={{marginHorizontal:10}}>

               <FlatList 
                  data={sampleData}
                  horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item})=><Card  product={item}/>}
                 contentContainerStyle={{marginTop:10}}
                  />
              
                 </View>
             </View>
             <View>
        
             <View style={styles.footertext}>
                 <Text style={{fontFamily:'Roboto-Bold',fontSize:16,color:'#F87171'}}>Premium Businesses</Text>
                 <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('Bussiness')}>
                 <Text style={{fontFamily:'Roboto-Bold',fontSize:13}}>View All</Text>
                 </TouchableOpacity>
             </View>
               <View style={{marginHorizontal:10}}>

               <FlatList 
                  data={sampleData}
                  horizontal
                 showsHorizontalScrollIndicator={false}
                
                  renderItem={({item})=><Card  product={item}/>}
                
                  contentContainerStyle={{marginTop:10}}
                  />
              
                 </View>
             </View>
         </ScrollView>
       
     </View>
     <View
     
    >
      
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
         <ScrollView scrollEnabled={scrollEnabled} style={{flex:1}}>
      <MultiSlider
        isMarkersSeparated={true}

        onValuesChangeStart={disableScroll}
        onValuesChangeFinish={enableScroll}
      />
    </ScrollView>
       
      </RBSheet>
    </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },
    header:{
        flex:1,
        // backgroundColor:'#EF4444',
        zIndex:50
    },
    footer:{
        flex:4,
        // backgroundColor:'#fff'
    },
    topheader:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:10,
      paddingVertical:5,
      marginTop:3,
    },
    searchcontainer:{
        flexDirection:'row',
        alignItems:'center',
        // borderColor:'#ff4500',
        // borderWidth:1.5,
        paddingHorizontal:10,
        marginTop:5,
        marginHorizontal:10,
        borderRadius:8,
        // backgroundColor:'#fff',
        flex:1
    },
    footertext:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:15,
        paddingTop:5,
        marginTop:3,
        marginBottom:10
    },
    categoryContainer:{
        flexDirection:'row',
        width:'100%',
        alignSelf:'center',
        
        
    },
    categoryBtn:{
        flex:1,
        width:'40%',
        marginHorizontal:0,
        alignSelf:'center',
        
    },
    categoryIcon:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:90,
        height:80,
        marginHorizontal:0,
        marginBottom:10,
        // backgroundColor:'#FEF2F2',
        borderColor:'#9CA3AF',
        borderWidth:1,
        borderRadius:5
    },
    categoryText:{
        paddingTop:3,
        fontFamily:'Roboto-Medium',
        fontSize:12,
        textAlign:'center'
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