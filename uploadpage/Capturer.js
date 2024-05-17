// import React, { useRef } from 'react';
// import { View, TouchableOpacity, Modal } from 'react-native';
// import { Camera } from 'expo-camera';
// import { MaterialIcons } from 'react-native-vector-icons';
// import { globalStyles } from '../Styles';
// import FontsFam from '../recipespage/FontsFam';

// const Capturer = ({ isVisible, onClose, onPictureTaken }) => {

//   const cameraRef = useRef(null);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       onPictureTaken(photo.uri);
//     }
//   };

//   return (
//     <FontsFam>
//     <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>

//       <Camera style={globalStyles.cameraContainerCapture} type={Camera.Constants.Type.back} ref={cameraRef}>
//         <View style={globalStyles.cameraCapturer_Button_Container}>
//           <TouchableOpacity style={globalStyles.captureButton} onPress={takePicture}>

//             <MaterialIcons name="radio-button-checked" style={globalStyles.camera_Capture_Icon} />
//           </TouchableOpacity>
//         </View>
//       </Camera>

//       <TouchableOpacity style={globalStyles.closeButtonCapture} onPress={onClose}>
//         <MaterialIcons name="close" style={globalStyles.camera_Close_Icon} />

//       </TouchableOpacity>

//     </Modal>
//     </FontsFam>
//   );
// };

// export default Capturer;


// import React, { useRef, useEffect } from 'react';
// import { View, TouchableOpacity, Modal } from 'react-native';
// import { Camera } from 'expo-camera';
// import { MaterialIcons } from 'react-native-vector-icons';
// import { globalStyles } from '../Styles';
// import FontsFam from '../recipespage/FontsFam';

// const Capturer = ({ isVisible, onClose, onPictureTaken }) => {

//   const cameraRef = useRef(null);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       onPictureTaken(photo.uri);
//     }
//   };

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Sorry, we need camera permissions to use this feature.');
//       }
//     })();
//   }, []);

//   return (
//     <FontsFam>
//       <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>

//         {isVisible && ( 
//           <Camera style={globalStyles.cameraContainerCapture} type={Camera.Constants.Type.back} ref={cameraRef}>
//             <View style={globalStyles.cameraCapturer_Button_Container}>
//               <TouchableOpacity style={globalStyles.captureButton} onPress={takePicture}>
//                 <MaterialIcons name="radio-button-checked" style={globalStyles.camera_Capture_Icon} />
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         )}

//         <TouchableOpacity style={globalStyles.closeButtonCapture} onPress={onClose}>
//           <MaterialIcons name="close" style={globalStyles.camera_Close_Icon} />
//         </TouchableOpacity>

//       </Modal>
//     </FontsFam>
//   );
// };

// export default Capturer;


import React, { useRef, useEffect, useState } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from 'react-native-vector-icons';
import { globalStyles } from '../Styles';
import FontsFam from '../recipespage/FontsFam';

const Capturer = ({ isVisible, onClose, onPictureTaken }) => {

  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        onPictureTaken(photo.uri);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />; // Loading indicator or message while permission is being requested
  }
  if (hasPermission === false) {
    return <Text>Camera permission denied.</Text>;
  }

  return (
    <FontsFam>
      <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>

        {isVisible && (  
          <Camera style={globalStyles.cameraContainerCapture} type={Camera.Constants.Type.back} ref={cameraRef}>
            <View style={globalStyles.cameraCapturer_Button_Container}>
              <TouchableOpacity style={globalStyles.captureButton} onPress={takePicture}>
                <MaterialIcons name="radio-button-checked" style={globalStyles.camera_Capture_Icon} />
              </TouchableOpacity>
            </View>
          </Camera>
        )}

        <TouchableOpacity style={globalStyles.closeButtonCapture} onPress={onClose}>
          <MaterialIcons name="close" style={globalStyles.camera_Close_Icon} />
        </TouchableOpacity>

      </Modal>
    </FontsFam>
  );
};

export default Capturer;