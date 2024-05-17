import { View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,Platform, ScrollView, KeyboardAvoidingView, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FireBase/Config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Globalcss } from "./Globalcss";
import { SvgXml } from 'react-native-svg';
import { literals } from "../Literal";
import FontsFam from "../recipespage/FontsFam";


const RestPassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");


  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };
  const changepassword = () => {
    if (email !== null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Show alert
          Alert.alert(
            "Success",
            "Password reset email has been sent. Please check your email inbox.",
            [
              {
                text: "OK",
                onPress: () => {
                  navigation.navigate("HomeLoginpage");
                  setEmail(""); 
                },
              },
            ]
          );
        })
        .catch((error) => {
          console.error("Error sending password reset email:", error);
          Alert.alert(
            "Error",
            "Failed to send password reset email. Please try again later."
          );
        });
    } else {
      Alert.alert("Error", "Please enter a valid email");
    }
  };

  return (
  <FontsFam>
   <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
    <ScrollView contentContainerStyle={Globalcss.container}>
      <StatusBar style="auto" />
      <View style={Globalcss.header}></View>
      <View style={Globalcss.welcomeContainer}>
        <View style={Globalcss.welcomText}>
          <Text style={Globalcss.welcome}>{literals.Passwordrecovery}</Text>
        </View>
        <View style={Globalcss.enterAccount}>
          <Text style={Globalcss.welcometext}>{literals.Enterpassword}</Text>
        </View>
      </View>
      <View style={Globalcss.emailrnumber}>
        <View style={Globalcss.inputContainerReg}>
          <SvgXml
            xml={`<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2678 7.06113L12.0024 10.4954C11.1952 11.1283 10.0636 11.1283 9.25641 10.4954L4.95435 7.06113" stroke="#2E3E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88787 1.5H15.3158C16.6752 1.51525 17.969 2.08993 18.896 3.0902C19.823 4.09048 20.3022 5.42903 20.222 6.79412V13.322C20.3022 14.6871 19.823 16.0256 18.896 17.0259C17.969 18.0262 16.6752 18.6009 15.3158 18.6161H5.88787C2.96796 18.6161 1 16.2407 1 13.322V6.79412C1 3.87545 2.96796 1.5 5.88787 1.5Z" stroke="#2E3E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`}
            width={22}
            height={20}
            fill="none"
          />
          <TextInput
            style={Globalcss.inputHome}
            placeholder="Email or phone number"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onBlur={validateEmail}
          />
        </View>
      </View>
      {emailError ? <Text style={Globalcss.errorss}>{emailError}</Text> : null}
  
 
 <View style={Globalcss.getStartForget}>
      <TouchableOpacity onPress={changepassword} style={Globalcss.getStartedLoginbtn}>
        <View>
          <Text style={Globalcss.Buttonee}>{literals.Done}</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
  </FontsFam>
  );
};


export default RestPassword;