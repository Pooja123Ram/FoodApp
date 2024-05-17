import React, { useState } from 'react';
import { View, ScrollView, Image, Modal, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import { globalStyles } from '../Styles';
import FontsFam from './FontsFam';
import { literals } from '../Literal';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';

const Scan = () => {
  const navigation = useNavigation();
  const [scannedImage, setScannedImage] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  // Step 3: Function to handle image picking
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setScannedImage(result.uri);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const handleOptionSelect = (option) => {
    if (option === 'Food') {
      navigation.navigate('Ingredients');
    } else if (option === 'Ingredients') {
      navigation.navigate('Ingredients');
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  const handleReopenModal = () => {
    setModalVisible(true);
  };

  return (
    
    <FontsFam>
      <Home/>
      <View style={globalStyles.containerModel}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={globalStyles.scanContainer}>
            {modalVisible && (
              <Modal
                style={globalStyles.modalIndex}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={[globalStyles.modalBackgroundScan, { zIndex: 10 }]}>
                  <View style={globalStyles.modalContainerScan}>
                    <View style={globalStyles.modalItemMain}>
                      <TouchableOpacity onPress={handleCancel}>
                        <FontAwesome name="times" size={15} color="#3E5481" />
                      </TouchableOpacity>
                      <View style={globalStyles.modalItemText}>
                        <Text style={globalStyles.modalItem}>{literals.scanOption}</Text>
                      </View>
                    </View>

                    <View style={globalStyles.scanFoodButtonOne}>
                      {/* Step 4: Button to trigger image picking */}
                      <TouchableOpacity
                        onPress={() => {
                          pickImage(); // Trigger image picking
                          handleOptionSelect('Food');
                        }}
                        disabled={!!scannedData || isLoading}
                        style={[globalStyles.scanButton, (!!scannedData || isLoading) && globalStyles.disabledButton]}
                      >
                        <Image source={require('../assets/burger.png')} style={{ height: 96, width: 101 }} />
                        <Text style={globalStyles.scanButtonText}>{literals.foodScan}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          handleOptionSelect('Ingredients');
                          navigation.navigate('Ingredients');
                        }}
                        disabled={!!scannedData || isLoading}
                        style={[globalStyles.scanButton, (!!scannedData || isLoading) && globalStyles.disabledButton]}
                      >
                        <Image source={require('../assets/pepper.png')} style={{ height: 96, width: 96 }} />
                        <Text style={globalStyles.scanButtonText}>{literals.ingredientScan}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            )}

            {isLoading && <Text>{literals.loadScan}</Text>}
            {/* Step 5: Display the picked image */}
            {scannedImage && (
              <View style={{ flex: 1 }}>
                <Text>{literals.scanImg}</Text>
                <Image source={{ uri: scannedImage }} style={{ flex: 1 }} />
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      <View style={globalStyles.reOpenModalMain}>
        <TouchableOpacity onPress={handleReopenModal} style={globalStyles.reOpenModal}>
          <Text style={globalStyles.reOpenModalText}>Open</Text>
        </TouchableOpacity>
      </View>
    </FontsFam>
  );
};

export default Scan;




















