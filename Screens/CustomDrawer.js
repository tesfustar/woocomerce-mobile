import React,{useState} from 'react';
import { View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flex:1}}>

    <DrawerContentScrollView  {...props}
    contentContainerStyle={{backgroundColor:'#EF4444'}}
 >    
    <View style={{margin:20,marginTop:50}}>

          <Image
            source={require('../assets/1.jpg')}
            style={{height: 70, width: 70, borderRadius: 40, marginBottom: 10}}
            />
          <Text
            style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                marginBottom: 5,
            }}>
            John Doe
          </Text>
                </View>
       <View style={{flex:1,backgroundColor:'white'}}>

      <DrawerItemList {...props}/>
       </View>
       <Drawer.Section title="Preferences" style={styles.bottomDrawerSection}>
                        <TouchableRipple >
                            <View style={styles.preference}>
                                <Text  style={{ color: 'gray', fontSize: 14, fontFamily: 'Roboto-Bold'}}>Dark Theme</Text>
                                <View >
                                    <Switch
                                      trackColor={{ false: "#767577", true: '#EF4444' }}
                                      thumbColor={isEnabled ? '#F87171' : "#f4f3f4"}
                                      ios_backgroundColor="#3e3e3e"
                                      onValueChange={toggleSwitch}
                                      value={isEnabled}
                                    />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
    </DrawerContentScrollView>
     <View style={{borderTopColor:'lightgray',borderTopWidth:1,padding:10}}>
       <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row',alignItems:'center'}}>
       <Ionicons name="exit-outline" size={22} />
       <Text
            style={{ color: '#EF4444', fontSize: 16, fontFamily: 'Roboto-Bold',margin: 5,marginVertical:10
            }}>
            Sign out
          </Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      bottomDrawerSection: {
       backgroundColor:"white",
        marginBottom:0
    },
})