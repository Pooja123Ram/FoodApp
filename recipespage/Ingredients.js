import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Food from './Food';
import { globalStyles } from '../Styles';
import FontsFam from './FontsFam';

const Ingredients = () => {

  const navigation = useNavigation();


  const jsonData = {

    id: 6,
    name: "John",
    image: "https://img.freepik.com/free-photo/healthy-lunch-vegetarian-pasta-with-fresh-tomato-generated-by-ai_24640-81714.jpg",
    dishname: "Macroni",
    dishtype: "Ingredients",

  };

  return (
    <FontsFam>
      <View>
        <ScrollView>
          <View style={globalStyles.foodOverlayContainer}>
            <View style={globalStyles.foodNavIconIngre}>
              <FontAwesome name="angle-left" size={20} color="#888" style={globalStyles.iconLeft} onPress={() => navigation.navigate('Home')} />
              <Text style={globalStyles.foodNameIngre}>{jsonData.dishtype}</Text>
            </View>
            <View style={globalStyles.overlayImage}>
              <Image source={{ uri: jsonData.image }} style={globalStyles.Scanedimage} />
              <TouchableOpacity style={globalStyles.heartMainHome} >
                <FontAwesome name="heart-o" size={15} color="#fff" />
              </TouchableOpacity>
              <Text style={globalStyles.overlayText}>{jsonData.dishname}</Text>
            </View>
          </View>

          <View style={globalStyles.ingreFood}>
            <Food />
          </View>
        </ScrollView>
      </View>
    </FontsFam>

  );
};

export default Ingredients;
