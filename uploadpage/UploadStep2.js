import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Alert, Modal, TouchableOpacity, ScrollView, Image, TouchableHighlight } from 'react-native';
import { MaterialIcons, Fontisto, Entypo } from 'react-native-vector-icons';
import Uploadsuccess from './Uploadsuccess';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { firestore,storage } from '../Firebase';
import Capturer from './Capturer';
import { literals } from '../Literal';
import { globalStyles } from '../Styles';
import FontsFam from '../recipespage/FontsFam';


const UploadStep2 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { foodName, description, cookingDuration, coverPhoto } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [ingredients, setIngredients] = useState(['', '']);
  const [steps, setSteps] = useState('');
  const [stepImage, setStepImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isBackBtnPressed, setIsBackBtnPressed] = useState(false);
  const [isNextBtnPressed, setIsNextBtnPressed] = useState(false);
  const [coverPhotoURL, setCoverPhotoURL] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera was denied');
      }
    })();
  }, []);


  useEffect(() => {
    // Upload cover photo to Firebase Storage and get download URL
    if (coverPhoto) {
      uploadCoverPhoto(coverPhoto);
    }
  }, [coverPhoto]);


const uploadCoverPhoto = async (coverPhoto) => {
  try {
    const response = await fetch(coverPhoto);
    const blob = await response.blob();
    const storageRef = storage.ref().child(`cover_photos/${foodName}_${Date.now()}`);
    await storageRef.put(blob);
    const imageURL = await storageRef.getDownloadURL();
    setCoverPhotoURL(imageURL);
  } catch (error) {
    console.error('Error uploading cover photo: ', error);
    Alert.alert('Error', 'Failed to upload cover photo. Please try again later.');
  }
};

const handlePictureTaken = async (uri) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = storage.ref().child(`step_images/${foodName}_${Date.now()}`);
    await storageRef.put(blob);
    const imageURL = await storageRef.getDownloadURL();
    setStepImage(imageURL);
    setShowCamera(false);
  } catch (error) {
    console.error('Error uploading step image: ', error);
    Alert.alert('Error', 'Failed to upload step image. Please try again later.');
  }
};
  const handleNext = () => {


    if (ingredients.some(ingredient => !ingredient.trim())) {
      Alert.alert(literals.alertIngredients);
      return;
    }

    if (!steps.trim()) {
      Alert.alert(literals.alertSteps);
      return;
    }

    
    firestore
      .collection('recipes')
      .add({
        foodName,
        description,
        cookingDuration,
        coverPhoto: coverPhotoURL,
        ingredients,
        steps,
        stepImage
      })
      .then(() => {

        setModalVisible(true);
      })
      .catch((error) => console.error('Error adding document: ', error));
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, '']);
  };

  const handleNavigate = () => {
    navigation.navigate('UploadStep1')
  }


  return (
    <FontsFam>
      <View style={globalStyles.mainContainerUploadStep2}>


        <ScrollView>

          <View style={globalStyles.headerContUploadStep1}>
            <View style={globalStyles.cancelButtonUploadStep1}>
              <TouchableOpacity style={globalStyles.cancelButtonopaUploadStep1} onPress={handleNavigate}>
                <Text style={globalStyles.cancelUploadStep1}>{literals.cancelButtonTxt}</Text>
              </TouchableOpacity>
            </View>

            <View style={globalStyles.countnumUploadStep1}>
              <Text style={globalStyles.countnumtxtUploadStep1}>
                  <Text>{literals.pageStep1}</Text>
                  <Text>{literals.pageStep2}</Text>
                </Text>
            </View>
          </View>


          <View style={globalStyles.ingredientsContainerUploadStep2}>
            <Text style={globalStyles.ingredientsLabelUploadStep2}>{literals.ingredientsLabel}</Text>
            <TouchableOpacity style={globalStyles.groupPlusUploadStep2}>
              <Text style={globalStyles.groupPlustextUploadStep2}>
                <Fontisto name="plus-a" color="#3E5481" />
                <Text style={globalStyles.groupUploadStep2}> {literals.groupBtn} </Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={globalStyles.ingredientFieldUploadStep2}>
            {ingredients.map((_ingredient, index) => (
              <View key={index} style={globalStyles.ingredientField1UploadStep2}>
                <MaterialIcons name="drag-indicator" style={globalStyles.ingredientsIconUploadStep2} />
                <TextInput
                  placeholder={literals.ingredientsPlaceholder}
                  style={globalStyles.inputIngredientUploadStep2}
                  onChangeText={(text) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index] = text;
                    setIngredients(newIngredients);
                  }}
                />
              </View>
            ))}
          </View>

          <TouchableOpacity onPress={addIngredientField} style={globalStyles.addIngredientButUploadStep2}>
            <Text style={globalStyles.addIngredientButtxtUploadStep2}>
              <Fontisto name="plus-a" style={globalStyles.plusIconUploadStep2} />
              <Text style={globalStyles.addIngredienttUploadStep2}> {literals.addIngredientBtn} </Text>

            </Text>
          </TouchableOpacity>

          <View style={globalStyles.separatorUploadStep2}></View>


          <Text style={globalStyles.stepsSectionLabelUploadStep2}>{literals.stepsLabel}</Text>

          <View style={globalStyles.stepsContainUploadStep2}>
            <View style={globalStyles.stepNumIconUploadStep2}>
              <View style={globalStyles.stepnumContUploadStep2}>
                <Text style={globalStyles.stepnumUploadStep2}>1</Text>
              </View>
              <MaterialIcons name="drag-indicator" style={globalStyles.stepsIconUploadStep2} />
            </View>

            <View style={globalStyles.tellAboutUploadStep2}>
              <TextInput
                placeholder={literals.stepsPlaceholder}
                multiline
                style={globalStyles.stepsmultilineInput}
                onChangeText={(text) => setSteps(text)}
              />
              {stepImage && <Image source={{ uri: stepImage }} style={globalStyles.capturedImagePreviewUploadStep2} />}
            </View>
          </View>

          <TouchableOpacity style={globalStyles.imageCapturerIconContainerUploadStep2} onPress={() => setShowCamera(true)}>
            <Entypo name="camera" style={globalStyles.cameraIconUploadStep2} />
          </TouchableOpacity>


          <View style={globalStyles.navigationButtonsUploadStep2}>
            <TouchableHighlight
              onPress={() => {
                setIsBackBtnPressed(true);
                setTimeout(() => setIsBackBtnPressed(false), 200);
                navigation.navigate('UploadStep1');
              }}
              style={[
                globalStyles.navbuttonBack,
                { backgroundColor: isBackBtnPressed ? "#1FCC79" : null }
              ]}
              underlayColor="#1FCC79"
              onShowUnderlay={() => setIsBackBtnPressed(true)}
              onHideUnderlay={() => setIsBackBtnPressed(false)}
            >
              <Text style={[
                globalStyles.navbuttonBackTxtUploadStep2,
                { color: isBackBtnPressed ? '#FFFFFF' : '#2E3E5C' }
              ]}>
                {literals.backBtn}
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                setIsNextBtnPressed(true);
                setTimeout(() => setIsNextBtnPressed(false), 200);
                handleNext();
              }}
              style={[
                globalStyles.navbuttonNext,
                { backgroundColor: isNextBtnPressed ? "#1FCC79" : null }
              ]}
              underlayColor="#1FCC79"
              onShowUnderlay={() => setIsNextBtnPressed(true)}
              onHideUnderlay={() => setIsNextBtnPressed(false)}
            >
              <Text style={[
                globalStyles.navbuttonNextTxtUploadStep2,
                { color: isNextBtnPressed ? '#FFFFFF' : '#2E3E5C' }
              ]}>
                {literals.nextBtn}
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>

        <Capturer isVisible={showCamera} onClose={() => setShowCamera(false)} onPictureTaken={handlePictureTaken} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={globalStyles.modalContainerUploadStep2}>
            <View style={globalStyles.modalContentUploadStep2}>
              <Uploadsuccess />
            </View>
          </View>
        </Modal>
      </View>
    </FontsFam>
  );
};

export default UploadStep2;