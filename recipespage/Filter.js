import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../Styles';
import FontsFam from './FontsFam';
import { literals } from '../Literal';

const Filter = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.25:3800/api/getData');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToNextScreen = (filteredData) => {
    setModalVisible(false); 
    navigation.navigate('NextScreen', { filteredData });
  };

  const openHomeIndicator = () => {
    setModalVisible(true); 
  };

  return (
    <FontsFam>
    <View>
      <View style={globalStyles.containerBtnFilter}>
        <TouchableOpacity style={globalStyles.buttonAllFilter} onPress={() => {
          navigateToNextScreen(data);
          setModalVisible(false);
        }}>
          <Text style={globalStyles.buttonTextFilter}>{literals.allFilter}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.buttonFoodFilter} onPress={() => {
          navigateToNextScreen(data.filter(item => item.dishtype === 'Food'));
          setModalVisible(false); 
        }}>
          <Text style={globalStyles.buttonTextFilter}>{literals.foodFilter}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.buttonDrinksFilter} onPress={() => {
          navigateToNextScreen(data.filter(item => item.dishtype === 'Drinks'));
          setModalVisible(false); 
        }}>
          <Text style={globalStyles.buttonTextFilter}>{literals.drinksFilter}</Text>
        </TouchableOpacity>
      </View>
      
      {modalVisible && (
        <View style={globalStyles.homeIndicatorFilter}>
          <TouchableOpacity onPress={openHomeIndicator}>
            <Image source={{ uri: indicatorImg }} style={globalStyles.imageIndicatorFilter} />
          </TouchableOpacity>
          
        </View>
      )}
    </View>
    </FontsFam>
  );
};

// const styles = StyleSheet.create({
  // buttonDrinks: {
  //   backgroundColor: '#d9d9d9',
  //   padding: 10,
  //   marginVertical: 5,
  //   borderRadius: 32,
  //   width: 98,
  //   height: 48,
  //   alignItems: 'center',
  // },

  // buttonFood: {
  //   backgroundColor: '#d9d9d9',
  //   padding: 10,
  //   marginVertical: 5,
  //   borderRadius: 32,
  //   width: 86,
  //   height: 48,
  //   alignItems: 'center',
  // },

  // buttonAll:{
  //   backgroundColor: '#d9d9d9',
  //   padding: 10,
  //   marginVertical: 5,
  //   borderRadius: 32,
  //   width: 68,
  //   height: 48,
  //   alignItems: 'center',
  // },
  // containerBtn: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent:'flex-start',  
  //   gap:20,
  // },
  // // Styles for the home indicator popup
  // homeIndicator: {
  //   position: 'absolute',
  //   bottom: 20,
  //   left: 20,
  // },
  // imageIndicator: {
  //   height: 10,
  //   width: 180,
  //   borderRadius: 20,
  // },
// });

export default Filter;
