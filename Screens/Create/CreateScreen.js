import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import axios from 'axios';
import {useQuery} from 'react-query';
import Stepper from './components/Stepper';
import InputDetails from './components/InputDetails';
import SelectCategory from './components/SelectCategory';
import UploadImage from './components/UploadImage';
import StepIndicator from 'react-native-step-indicator';
const CreateScreen = () => {
  const labels = [
    'Select Category',
    'Delivery Address',
    'Order Summary',
    'Payment Method',
    'Track',
  ];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#EF4444',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#22C55E',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#22C55E',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#22C55E',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: '#fe7013',
  };
  const headers = {
    'Content-Type': 'Application/json',
    Accept: 'Application/json',
    // "Authorization":`Bearer ${token}`
  };
  const CategoriesData = useQuery(
    'categoriesDataApi',
    async () =>
      await axios.get('http://192.168.0.109:5000/api/category', {headers}),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      // enabled:!!token
    },
  );

  const [currentStep, setCurrentStep] = useState(1);
  const [categoryValue, setCategoryValue] = useState(null);
  const [subCategoryValue, setSubCategoryValue] = useState(null);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);
  const [imageSix, setImageSix] = useState(null);
  const nextStep = () => {
    setCurrentStep(prevCurrentStep => prevCurrentStep + 1);
  };
  console.log({categoryValue: categoryValue});
  // console.log({"subCategoryValue":subCategoryValue})
  const handleShowSteps = () => {
    if (currentStep == 1) {
      return (
        <SelectCategory
          setCategoryValue={setCategoryValue}
          categoryValue={categoryValue}
          setSubCategoryValue={setSubCategoryValue}
          subCategoryValue={subCategoryValue}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          nextStep={nextStep}
        />
      );
    } else if (currentStep == 2) {
      return (
        <UploadImage
          setImageOne={setImageOne}
          setImageTwo={setImageTwo}
          setImageThree={setImageThree}
          setImageFour={setImageFour}
          setImageFive={setImageFive}
          setImageSix={setImageSix}
          imageOne={imageOne}
          imageTwo={imageTwo}
          imageThree={imageThree}
          imageFour={imageFour}
          imageFive={imageFive}
          imageSix={imageSix}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      );
    } else if (currentStep == 3) {
      return <InputDetails />;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text></Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{padding: 3, paddingBottom: 50, paddingTop: 10, padding: 10}}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentStep}
            labels={labels}
          />
        </View>
        {/* <View style={{padding:10}}>

   <DropDownPicker
      open={open}
      schema={{
        label:'name',
        value:'name'
      }}
      placeholder="Select a Category"
      value={items?.name}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
   
      style={{backgroundColor: "white",borderWidth:1.4,borderColor:'#64748B',}}
      textStyle={{
        fontSize: 15,
        fontWeight:'700',
        color:'#64748B'
      }}
    />
     </View> */}
        {handleShowSteps()}
        <View>
          {/* <View style={{alignItems:'center',flex:1}}>
      <TouchableOpacity activeOpacity={0.7} 
      style={{backgroundColor:'#EF4444',padding:10,alignItems:'center',paddingHorizontal:30,borderRadius:5}}>
        <Text style={{fontSize:16,fontWeight:'700',color:'white'}}>Next</Text>
      </TouchableOpacity>
     </View> */}
        </View>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: '#EF4444',
  },
  footer: {
    flex: 6,
    // backgroundColor:'blue'
  },
});
