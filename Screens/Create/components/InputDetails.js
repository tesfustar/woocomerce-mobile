import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
const InputDetails = () => {
  const [items, setItems] = useState([
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    price: Yup.number().required('Required'),
    description: Yup.string().required('Required'),
    bathroom: Yup.number().required('Required'),
    bedroom: Yup.number().required('Required'),
    area: Yup.number().required('Required'),
    isFurnished: Yup.boolean().required('Required'),
    Brand: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    fuelType: Yup.string().required('Required'),
    additionalFeature: Yup.string().optional(),
    Condition: Yup.string().required('Required'),
    TransmitionType: Yup.string().required('Required'),
  });
  return (
    <View style={{flex: 1}}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            title: '',
            description: '',
            price: '',
            bathroom: '',
            bedroom: '',
            isFurnished: '',
            brand: '',
            model: '',
            additionalFeature: '',
            Condition: '',
            fuelType: '',
            TransmitionType: '',
            area: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={{padding: 5}}>
              <TextInput
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.email}
                placeholder="title"
                style={styles.textInput}
              />
              <TextInput
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                placeholder="price"
                style={styles.textInput}
              />
              <TextInput
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                placeholder="description"
                multiline={true}
                numberOfLines={6}
                style={styles.textInput}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  onChangeText={handleChange('bathroom')}
                  onBlur={handleBlur('bathroom')}
                  value={values.bathroom}
                  placeholder="bathroom"
                  style={[
                    styles.textInput,
                    {height: 50, width: '49%', marginRight: 5},
                  ]}
                />
                <TextInput
                  placeholder="bedroom"
                  onChangeText={handleChange('bedroom')}
                  onBlur={handleBlur('bedroom')}
                  value={values.bedroom}
                  style={[styles.textInput, {height: 50, width: '46%'}]}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  onChangeText={handleChange('area')}
                  onBlur={handleBlur('area')}
                  value={values.area}
                  placeholder="area"
                  style={[
                    styles.textInput,
                    {height: 50, width: '49%', marginRight: 5},
                  ]}
                />
                <TextInput
                  placeholder="bedroom"
                  onChangeText={handleChange('bedroom')}
                  onBlur={handleBlur('bedroom')}
                  value={values.bedroom}
                  style={[styles.textInput, {height: 50, width: '46%'}]}
                />
              </View>
              {/* property only */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{width: '49%', marginRight: 10}}>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="is furnished"
                    style={[
                      styles.textInput,
                      {
                        height: 50,
                        width: '100%',
                      },
                    ]}
                  />
                </View>

                <View style={{width: '46%'}}>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={[styles.textInput, {height: 50, marginRight: 5}]}
                  />
                </View>
              </View>
              {/* electronics only */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  onChangeText={handleChange('brand')}
                  onBlur={handleBlur('brand')}
                  value={values.brand}
                  placeholder="brand"
                  style={[
                    styles.textInput,
                    {height: 50, width: '49%', marginRight: 5},
                  ]}
                />
                <TextInput
                  placeholder="model"
                  onChangeText={handleChange('model')}
                  onBlur={handleBlur('model')}
                  value={values.model}
                  style={[styles.textInput, {height: 50, width: '46%'}]}
                />
              </View>
              {/* additional feature */}
              <View style={{marginRight: 10}}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="additional feature"
                  multiple={true}
                  style={[styles.textInput, {height: 50}]}
                />
              </View>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default InputDetails;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
    margin: 4,
    backgroundColor: 'white',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    width: 300, // to ensure the text is never behind the icon
  },
});
