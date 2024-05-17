import React, { useState } from 'react';
import { Text, View, Alert, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { literals } from '../Literal';
import { globalStyles } from '../Styles';
import FontsFam from '../recipespage/FontsFam';

const UploadStep1 = () => {

  const navigation = useNavigation();

  const [sliderValue, setSliderValue] = useState(30);
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleChange = (value) => {
    setSliderValue(value);
  };

  const handleChoosePhoto = async () => {
    console.log('handleChoosePhoto function called');

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      console.log('ImagePicker result:', result);

      if (!result.canceled) {
        setCoverPhoto(result.assets[0].uri);
      } else {
        console.log('Image picker was cancelled');
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const handleNavigate = () => {
    navigation.navigate('Home')
  }




  const handleNext = () => {

    if (coverPhoto === undefined) {
      console.error('coverPhoto is undefined');
      return;
    }


    if (!coverPhoto) {
      Alert.alert(literals.alertNoCoverPhoto);
      return;
    }

    if (!foodName.trim()) {
      Alert.alert(literals.foodError);
      return;
    }
    if (!description.trim()) {
      Alert.alert(literals.alertNoDescription);
      return;
    }


    navigation.navigate('UploadStep2', {
      foodName,
      description,
      cookingDuration: sliderValue,
      coverPhoto
    });
  };


  return (
    <FontsFam>
      <View>
        <ScrollView>
          <View style={globalStyles.mainContainerUploadStep1}>
            <View style={globalStyles.headerContUploadStep1}>
              <View style={globalStyles.cancelButtonUploadStep1}>
                <TouchableOpacity onPress={handleNavigate} style={globalStyles.cancelButtonopaUploadStep1}>
                  <Text style={globalStyles.cancelUploadStep1}>{literals.cancelButtonTxt}</Text>
                </TouchableOpacity>
              </View>

              <View style={globalStyles.countnumUploadStep1}>
                <Text style={globalStyles.countnumtxtUploadStep1}>
                  <Text style={globalStyles.pageIndex}>{literals.page1}</Text>
                  <Text>{literals.page2}</Text>
                </Text>
              </View>
            </View>


            <View style={globalStyles.imageContUploadStep1}>
              <TouchableOpacity onPress={handleChoosePhoto}>
                <View style={globalStyles.imageUploadStep1}>
                  {coverPhoto ? (
                    <Image
                      source={{ uri: coverPhoto }}

                      resizeMode="cover"
                      style={globalStyles.coverPicUploadStep1}
                    />
                  ) : (
                    <Image
                      source={literals.coverPhoto}
                      style={globalStyles.coverPicUploadStep1}
                    />
                  )}
                </View>
                <Text style={globalStyles.uploadLabelUploadStep1}>{coverPhoto ? literals.changeCoverPhotoLabel : literals.addCoverPhotoLabel}</Text>
                <Text style={globalStyles.picLimtUploadStep1}> {literals.coverPhotoSizeLimit}</Text>
              </TouchableOpacity>
            </View>


            <Text style={globalStyles.foodNamLabelUploadStep1}>{literals.foodNameLabel}</Text>
            <TextInput placeholder={literals.foodNamePlaceholder} style={globalStyles.foodIpUploadStep1} value={foodName} onChangeText={text => setFoodName(text)} />


            <Text style={globalStyles.foodNamLabelUploadStep1}>{literals.descriptionLabel}</Text>
            <TextInput placeholder={literals.descriptionPlaceholder} multiline style={globalStyles.descriIpUploadStep1} value={description} onChangeText={text => setDescription(text)} />


            <View>
              <View style={globalStyles.cookDuriUploadStep1}>
                <Text style={globalStyles.cookDuriLabelUploadStep1}>{literals.cookingDurationLabel} </Text>
                <View style={globalStyles.cookDuriUnitsUploadStep1}>
                  <Text>{literals.durationTimeUnits}</Text>
                </View>
              </View>

              <View style={globalStyles.slideValuesUploadStep1}>
                <Text>{literals.sliderValueText.lessThan10}</Text>
                <Text>{sliderValue}</Text>
                <Text>{literals.sliderValueText.greaterThan60}</Text>
              </View>

              <Slider
                style={globalStyles.cookingDuration_SliderUploadStep1}
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


            <TouchableOpacity style={globalStyles.nxtbut1UploadStep1} onPress={handleNext}>
              <Text style={globalStyles.nextBut1TxtUploadStep1}>{literals.nextBtn}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </FontsFam>

  );
};

export default UploadStep1;