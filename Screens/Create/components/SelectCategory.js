import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import React, {useState} from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import DropDownPicker from 'react-native-dropdown-picker';
const SelectCategory = ({
  categoryValue,
  setCategoryValue,
  setCurrentStep,
  currentStep,
  subCategoryValue,
  setSubCategoryValue,
}) => {
  const [open, setOpen] = useState(false);
  const headers = {
    'Content-Type': 'Application/json',
    Accept: 'Application/json',
    // "Authorization":`Bearer ${token}`
  };

  const CategoriesData = useQuery(
    ['categoriesDataApi'],
    async () =>
      await axios.get('http://192.168.0.109:5000/api/category', {headers}),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: res => {
        console.log({res: res});
      },
    },
  );
  const SubCategoriesData = useQuery(
    ['subcategoriesDataApi', categoryValue],
    async () =>
      await axios.get(
        `http://192.168.0.109:5000/api/category/${categoryValue}`,
        {headers},
      ),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: res => {
        console.log({res: res});
      },
    },
  );
  console.log({SubCategoriesData: SubCategoriesData});
  const [categories, setCategories] = useState(CategoriesData?.data?.data);
  const [subcategories, setSubCategories] = useState(
    SubCategoriesData?.data?.data?.subCategory,
  );
  console.log({subcategories: subcategories});
  return (
    <View style={{flex: 1, padding: 3}}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: '700', fontSize: 17, padding: 5}}>
          SelectCategory
        </Text>

        {!categoryValue ? (
          <View style={styles.menuWrapper}>
            {CategoriesData?.data?.data?.map(item => (
              <TouchableRipple
                key={item._id}
                onPress={() => {
                  setCategoryValue(item._id);
                }}>
                <View style={styles.menuItem}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 40, height: 40}}
                  />
                  <Text style={styles.menuItemText}>{item.name}</Text>
                </View>
              </TouchableRipple>
            ))}
          </View>
        ) : (
          <View style={styles.menuWrapper}>
            {subcategories?.data?.data?.map(item => (
              <TouchableRipple
                key={item._id}
                onPress={() => {
                  setSubCategoryValue(item._id);
                }}>
                <View style={styles.menuItem}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 40, height: 40}}
                  />
                  <Text style={styles.menuItemText}>{item.name}</Text>
                </View>
              </TouchableRipple>
            ))}
          </View>
        )}
        {/* subCategory */}

        {/* btn */}

        {subCategoryValue && (
          <View style={{alignItems: 'center', flex: 1, paddingVertical: 20}}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={!categoryValue}
              onPress={() => setCurrentStep(currentStep + 1)}
              style={{
                backgroundColor: '#EF4444',
                padding: 10,
                alignItems: 'center',
                paddingHorizontal: 50,
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SelectCategory;

const styles = StyleSheet.create({
  menuWrapper: {
    marginTop: 10,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
