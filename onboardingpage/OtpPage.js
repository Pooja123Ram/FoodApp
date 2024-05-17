import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, StatusBar, Alert } from 'react-native';
import Custom from '../Components/Custom';
import { Globalcss } from "./Globalcss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FireBase/Config';
import { literals } from '../Literal';

const OtpPage = ({ navigation, route }) => {

    const { email, password } = route.params;

      const [modalVisible, setModalVisible] = useState(true);

    const [randomOTP, setRandomOTP] = useState(route.params.randomOTP); 
    const [timer, setTimer] = useState(60);
    const [isCodeExpired, setIsCodeExpired] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']); 
    const otpBoxes = useRef([]);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000); 
        } else {
            setIsCodeExpired(true);
        }

        return () => clearInterval(interval); 
    }, [timer]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value === '') {
            if (index > 0) {
                otpBoxes.current[index - 1].focus();
            }
        } else if (index < otp.length - 1) {
            otpBoxes.current[index + 1].focus();
        }
    };

    const generateRandomOTP = () => {
                 const newRandomOTP = Math.floor(1000 + Math.random() * 9000);
               setRandomOTP(newRandomOTP);
                setIsCodeExpired(false); 
             setTimer(60); 
         };
        
         const resendOTP = () => {
             generateRandomOTP(); 
                 setModalVisible(true); 
            };
   

      
            const handleVerify = () => {
                const enteredOTP = otp.join('');
                if (enteredOTP === randomOTP.toString()) {
                    saveUserDetailsToFirebase(enteredOTP); 
                } else {
                    Alert.alert( 'Please enter the correct OTP');
                }
            };
            const saveUserDetailsToFirebase = async (enteredOTP) => {
                try {
                    const { email, password } = route.params;
                    const userCredential = await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                    const user = userCredential.user;
                    if (enteredOTP === randomOTP.toString()) {
                        Alert.alert(
                            'Successfully Registered',
                            'Your account has been successfully registered.',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => navigation.navigate('HomeLoginpage')
                                }
                            ]
                        );
                    } else {
                        Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
                    }
                } catch (error) {
                    console.error("Error signing up user:", error);
                    Alert.alert("User already exists. Please login your credentials.");
                }
            };
    
    
      return (
        <ScrollView contentContainerStyle={Globalcss.containero}>
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Globalcss.containero}>
                    <View style={Globalcss.welcomeContainero}>
                        <Text style={Globalcss.welcomeo}>{literals.Checkyouremail}</Text>
                        <Text style={Globalcss.welcometexto}>{literals.We}</Text>
                    </View>
                    <View style={Globalcss.otpContainero}>
                        <Custom
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                            otp={randomOTP}
                        />
                        {otp.map((value, index) => (
                            <TextInput
                                key={index}
                                style={Globalcss.otpBoxo}
                                value={value}
                                onChangeText={text => handleOtpChange(index, text)}
                                keyboardType="numeric"
                                maxLength={1}
                                ref={ref => otpBoxes.current[index] = ref}
                                autoFocus={index === 0}
                            />
                        ))}
                    </View>
                    <View style={Globalcss.otpBtno}>
                        <TouchableOpacity onPress={resendOTP} disabled={timer > 0 || isCodeExpired}>
                            <Text style={Globalcss.loginButtonTexto}>
                                Code expires in: <Text style={Globalcss.timerTexto}>
                                    {isCodeExpired ? ' Code expired' : ` ${formatTime(timer)}`}
                                </Text>
                            </Text>
                        </TouchableOpacity>
                        </View>

                    <View style={Globalcss.loginButtonso}>
                        <TouchableOpacity onPress={handleVerify}>
                            <Text style={Globalcss.loginTexto}>{literals.Verify}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Globalcss.loginButtono}>
                        <TouchableOpacity onPress={resendOTP}>
                            <Text style={Globalcss.loginTextso}>{literals.Sendagain}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

export default OtpPage;