import React, { useState, useEffect } from 'react';
import { Text, View, Modal, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import axios from 'axios';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../Styles';
import { FontAwesome } from '@expo/vector-icons';
import { literals } from '../Literal';
import FontsFam from './FontsFam';

export default function HomeIndicator() {
  const [sliderValue, setSliderValue] = useState(30);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const [buttonPressed, setButtonPressed] = useState(false);
  const [button1Pressed, setButton1Pressed] = useState(false);
  const [button2Pressed, setButton2Pressed] = useState(false);

  const handleCancelPress = () => {
    setModalVisible(false);
    setButtonPressed(false);
  };

  const handleDonePress = () => {
    setButtonPressed(true);
    navigateToNextScreen();
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.25:3200/api/getData');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (value) => {
    setSliderValue(value);
  };

  const handleButton1PressIn = () => {
    setButton1Pressed(true);
  };

  const handleButton1PressOut = () => {
    setButton1Pressed(false);
  };

  const handleButton2PressIn = () => {
    setButton2Pressed(true);
  };

  const handleButton2PressOut = () => {
    setButton2Pressed(false);
  };

  const filterData = () => {
    let filteredData = data;

    // Filter by category
    if (selectedCategory !== 'All') {
      filteredData = filteredData.filter(item => {
        for (let i = 1; i <= 4; i++) {
          if (item[`dishtype${i}`] === selectedCategory) {
            return true;
          }
        }
        return false;
      });
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const lowercaseQuery = searchQuery.toLowerCase();
      filteredData = filteredData.filter(item => {
        for (let i = 1; i <= 4; i++) {
          const dishName = item[`dishname${i}`]?.toLowerCase();
          if (dishName && dishName.includes(lowercaseQuery)) {
            return true;
          }
        }
        return false;
      });
    }

    return filteredData;
  };

  const navigateToNextScreen = () => {
    const filteredData = filterData();
    navigation.navigate('NextScreen', { filteredData, selectedCategory });
    setModalVisible(false);
  };

  return (
    <FontsFam>
      <View style={globalStyles.containerIndicator}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={globalStyles.homeIndicator}>
            <Image source={literals.homeIndImage} style={{ height: 24, width: 24 }} />
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={globalStyles.modalContainer}>
            <View style={[globalStyles.modalView, { height: 400 }]}>
              <Text style={globalStyles.modalText}>{literals.addFilter}</Text>
              <View style={globalStyles.categorytext}>
                <Text style={globalStyles.category}>{literals.categoryHome}</Text>
              </View>
              <View style={globalStyles.containerBtn}>
                <TouchableOpacity
                  style={[
                    globalStyles.buttonFoodFil,
                    selectedCategory === 'All' ? globalStyles.activeButton : null
                  ]}
                  onPress={() => setSelectedCategory('All')}
                >
                  <Text style={[
                    globalStyles.buttonText1,
                    selectedCategory === 'All' ? globalStyles.activeButtonText : null
                  ]}>{literals.allFilter}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    globalStyles.buttonFoodFil,
                    selectedCategory === 'Food' ? globalStyles.activeButton : null
                  ]}
                  onPress={() => setSelectedCategory('Food')}
                >
                  <Text style={[
                    globalStyles.buttonText1,
                    selectedCategory === 'Food' ? globalStyles.activeButtonText : null
                  ]}>{literals.foodFilter}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    globalStyles.buttonFoodFil,
                    selectedCategory === 'Drinks' ? globalStyles.activeButton : null
                  ]}
                  onPress={() => setSelectedCategory('Drinks')}
                >
                  <Text style={[
                    globalStyles.buttonText1,
                    selectedCategory === 'Drinks' ? globalStyles.activeButtonText : null
                  ]}>{literals.drinksFilter}</Text>
                </TouchableOpacity>

              </View>
              <View style={globalStyles.imageDurationMain}>
                <View style={globalStyles.sliderTextMain}>
                  <Text style={globalStyles.sliderText}>{literals.cookTimeHome} </Text>
                  <Text style={globalStyles.sliderText1}>(in minutes)</Text>
                </View>

                <View style={globalStyles.SliderNum}>
                  <View style={globalStyles.SliderNum}>
                    <FontAwesome name="angle-left" size={15} color="#9FA5C0" style={globalStyles.lesserNum} />
                    <Text style={globalStyles.imageDurationNum1}>{literals.indicatrStep}</Text>
                  </View>

                  <Text style={globalStyles.imageDurationNum1}>{sliderValue}</Text>

                  <View style={globalStyles.SliderNum}>
                    <FontAwesome name="angle-right" size={15} color="#9FA5C0" style={globalStyles.lesserNum} />
                    <Text style={globalStyles.imageDurationNum1}>{literals.indicatrStep2}</Text>
                  </View>
                </View>

                <Slider
                  style={{ width: '100%', alignSelf: 'center', marginVertical: 10 }}
                  minimumValue={10}
                  maximumValue={60}
                  step={1}
                  value={sliderValue}
                  onValueChange={handleChange}
                  minimumTrackTintColor="#1FCC79"
                  maximumTrackTintColor="#1FCC79"
                  thumbTintColor="#1FCC79"
                  trackStyle={{ height: 50 }}
                  thumbStyle={{ width: 80, height: 50 }}
                />
              </View>
              {/* <View style={globalStyles.closeButton}>
                <TouchableOpacity
                  style={[globalStyles.closeButtonSub, buttonPressed && !modalVisible ? globalStyles.activeButton : null]}
                  onPress={handleCancelPress}>
                  <Text style={globalStyles.buttonTextCancel}>{literals.btnCancelInd}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[globalStyles.closeButtonSub, buttonPressed && modalVisible ? globalStyles.activeButton : null]}
                  onPress={handleDonePress}>
                  <Text style={globalStyles.buttonTextCancel}>{literals.btnDoneInd}</Text>
                </TouchableOpacity>
              </View> */}

              {/* <View style={globalStyles.closeButton}>
                <TouchableOpacity
                  style={[
                    globalStyles.closeButtonSub,
                    buttonPressed && !modalVisible ? globalStyles.activeButton : null,
                    buttonPressed && !modalVisible ? globalStyles.activeButtonText : null,
                  ]}
                  onPress={handleCancelPress}>
                  <Text style={globalStyles.buttonTextCancel}>
                    {literals.btnCancelInd}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    globalStyles.closeButtonSub,
                    buttonPressed && modalVisible ? globalStyles.activeButton : null,
                    buttonPressed && modalVisible ? globalStyles.activeButtonText : null,
                  ]}
                  onPress={handleDonePress}>
                  <Text style={globalStyles.buttonTextCancel}>
                    {literals.btnDoneInd}
                  </Text>
                </TouchableOpacity>
              </View> */}

<View style={globalStyles.closeButton}>
        <TouchableHighlight
          style={[
            globalStyles.closeButtonSub,
            button1Pressed ? globalStyles.buttonPressed : null,
          ]}
          underlayColor="#1FCC79"
          onPressIn={handleButton1PressIn}
          onPressOut={handleButton1PressOut}
          onPress={handleCancelPress}>
        
          <Text style={[
            globalStyles.buttonTextCancel,
            button1Pressed ? globalStyles.buttonTextPressed : null,
          ]}>
            {literals.btnCancelInd}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            globalStyles.closeButtonSub,
            button2Pressed ? globalStyles.buttonPressed : null,
          ]}
          underlayColor="#1FCC79"
          onPressIn={handleButton2PressIn}
          onPressOut={handleButton2PressOut}
          onPress={handleDonePress}>
        
          <Text style={[
            globalStyles.buttonTextCancel,
            button2Pressed ? globalStyles.buttonTextPressed : null,
          ]}>
            {literals.btnDoneInd}
          </Text>
        </TouchableHighlight>
      </View>

            </View>
          </View>
        </Modal>
      </View>
    </FontsFam>
  );
}