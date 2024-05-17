import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Globalcss } from "./Globalcss";
import React, { useState } from 'react';
import FontsFam from '../recipespage/FontsFam';
import { literals } from '../Literal';

const HomePage = ({ navigation }) => {

   return (
    <FontsFam>
    <View style={Globalcss.containere}> 
      <View style={Globalcss.imageContainer}>
        <Image 
          source={require ('../assets/imgg.png')}
          style={Globalcss.imagee}
        />
      </View>
      <View style={Globalcss.contente}>
        <Text style={Globalcss.texte}>{literals.heading}</Text>
        <View style={Globalcss.textparagraphemain}>
          <Text style={Globalcss.textparagraphe}>{literals.heading1}</Text>
          <Text style={Globalcss.textparagraphee}>{literals.text2}</Text>

        </View>
        <TouchableOpacity onPress ={()=>navigation.navigate('HomeLoginpage')} style={Globalcss.getStarted} >
          <View>
            <Text style={Globalcss.startBtn}>{literals.text1}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </FontsFam>
  );
};

export default HomePage;