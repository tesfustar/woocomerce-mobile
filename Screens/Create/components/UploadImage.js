import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useTheme } from 'react-native-paper'

import ImagePicker from 'react-native-image-crop-picker';
const UploadImage = ({ navigation, setImageOne, setImageTwo, setCurrentStep, currentStep,
  setImageThree, setImageFour, setImageFive, setImageSix, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix }) => {
  const [image, setImage] = useState(require('../../../assets/default.jpg'))
  const [imageAmount, setImageAmount] = useState(6)
  const bs = React.useRef(null);
  const fall = new Animated.Value(1);

  const takePhoto = () => {
    return (
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImageOne(imageUri)
        bs.current.snapTo(1)
      })
    )
  }
  const choosePhoto = () => {
    return (
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        if (imageOne === null) {
          setImageOne(imageUri)
        } else if (imageTwo === null) {
          setImageTwo(imageUri)
        } else if (imageThree === null) {
          setImageThree(imageUri)
        } else if (imageFour === null) {
          setImageFour(imageUri)
        } else if (imageFive === null) {
          setImageFive(imageUri)
        } else if (imageSix === null) {
          setImageSix(imageUri)
        }
        bs.current.snapTo(1)
      })
    )
  }

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhoto}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhoto}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headers}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  console.log({ 'imageOne': imageOne })
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <ScrollView showsVerticalScrollIndicator={false} verical={true}>

        <Text style={{ fontFamily: 'Roboto-Bold', padding: 5, paddingHorizontal: 10, fontSize: 20 }}>Upload Image</Text>

        <Animated.View style={{ flex: 1, opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)) }}>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {imageOne !== null ? <Image source={{ uri: imageOne }} style={{ width: 110, height: 110, resizeMode: 'cover', }} /> :
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <Image source={image} style={{ height: 110, width: 110, borderRadius: 5 }} />
              </TouchableOpacity>}

            {imageOne && (imageTwo !== null ? <Image source={{ uri: imageTwo }} style={{ width: 110, height: 100, resizeMode: 'cover', }} /> :
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <Image source={image} style={{ height: 110, width: 110, borderRadius: 5 }} />
              </TouchableOpacity>)}

            {imageTwo && (imageThree !== null ? <Image source={{ uri: imageThree }} style={{ width: 110, height: 100, resizeMode: 'cover', }} /> :
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <Image source={image} style={{ height: 110, width: 110, borderRadius: 5 }} />
              </TouchableOpacity>)}
            {imageThree && (imageFour !== null ? <Image source={{ uri: imageFour }} style={{ width: 110, height: 100, resizeMode: 'cover', }} /> :
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <Image source={image} style={{ height: 110, width: 110, borderRadius: 5 }} />
              </TouchableOpacity>)}
            {imageFour && (imageFive !== null ? <Image source={{ uri: imageFive }} style={{ width: 110, height: 100, resizeMode: 'cover', }} /> :
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <Image source={image} style={{ height: 110, width: 110, borderRadius: 5 }} />
              </TouchableOpacity>)}
            {imageFive && (imageSix !== null ? <Image source={{ uri: imageSix }} style={{ width: 110, height: 100, resizeMode: 'cover', }} /> :
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <Image source={image} style={{ height: 110, width: 110, borderRadius: 5 }} />
              </TouchableOpacity>)}
          </View>
          {imageOne && <TouchableOpacity activeOpacity={0.7}
            onPress={() => setCurrentStep(currentStep + 1)}
            style={{
              backgroundColor: '#EF4444', padding: 10, alignItems: 'center',
              paddingHorizontal: 50, borderRadius: 5, margin: 10
            }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: 'white' }}>Next</Text>
          </TouchableOpacity>}
        </Animated.View>

      </ScrollView>
    </View>
  )
}

export default UploadImage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'rgb(3,105,161)'
  },
  //   header:{
  //     flex:1,
  //     backgroundColor:'#0C4A6E',
  //   },
  //   footer:{
  //     flex:2,
  //     backgroundColor:'#fff',
  //     borderTopLeftRadius:20,
  //     borderTopRightRadius:20,
  //     opacity:Animated.add(0.1,Animated.multiply(this.fall,1.0))
  //   },

  searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgb(3,105,161)',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    // paddingVertical:5,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#EF4444',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  headers: {
    //   backgroundColor: '#0C4A6E',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    //   backgroundColor: 'red',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color: 'white'
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'white',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
})