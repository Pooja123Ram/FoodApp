import React from 'react';
import { View, Text, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { literals } from '../Literal';
import { globalStyles } from '../Styles';

const Uploadsuccess = () => {
    const navigation = useNavigation();

  return (

    <View style={globalStyles.uploadSuccessImage}>
      
      <View style={globalStyles.successImage}>

         <Image source={literals.uploadSuccessIcon} style={{ width: 160, height: 160 }}  />
      </View>


      <Text style={globalStyles.successMessage}>
        {literals.uploadSuccessTitle}
      </Text>
      <Text style={globalStyles.successMessageOne}>
       {literals.uploadSuccessMessage}
      </Text>


      <TouchableOpacity
        onPress={() => {

         navigation.navigate('Home');
        }}

        style={globalStyles.successButtoon}
       
      >
        <Text style={{ color: 'white', fontWeight: '700' }}>{literals.uploadSuccessBackBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   uploadSuccessImage: {
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center'
//   },

//   successImage:{
//     marginVertical:'7%',
//   },
//   successMessage:{
//     fontSize:22,
//     fontWeight:'700',
//     color:'#3E5481',
//     lineHeight:32,
//     letterSpacing:0.5,
//     paddingVertical:'1%'
//   },

//   successMessageOne:{
// fontSize:15,
// fontWeight:'500',
// lineHeight:25,
// letterSpacing:0.5,
// color:'#2E3E5C',
// textAlign:'center'
//   },

//   successButtoon:{
//     backgroundColor: '#1FCC79',
//     paddingHorizontal:'20%',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     height:56,
//     borderRadius: 32,
//     marginVertical:'10%',
//     fontSize:15,
//     fontWeight:'700',
//     color:'#FFFFFF',
//     lineHeight:18.15,
//     letterSpacing:0.7
//   }
// })

export default Uploadsuccess;
