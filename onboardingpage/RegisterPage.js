import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect hook
import { Globalcss } from "./Globalcss";
import { SvgXml } from "react-native-svg";
import { literals } from "../Literal";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontsFam from "../recipespage/FontsFam";

const RegisterPage = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
 const [error, setError] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false); // Define isFocusedEmail state
  const [isFocusedPassword, setIsFocusedPassword] = useState(false); // Defin
  const [minLengthMet, setMinLengthMet] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [isValid, setIsValid] = useState(false); // Combined validation state
  const [isFieldClicked, setIsFieldClicked] = useState(false); // Track field click
  // Clear email and password states when the registration screen is focused again
  useFocusEffect(
    React.useCallback(() => {
      setEmail("");
      setPassword("");
    }, [])
  );

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email /Phone number is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleFieldClick = () => {
    setIsFieldClicked(true);
  };

  const validatePassword = (text) => {
    if (text !== undefined) { // Add this conditional check
      setPassword(text);
      const lengthValid = text.length >= 6;
      const numberValid = /\d/.test(text);
  
      setMinLengthMet(lengthValid);
      setHasNumber(numberValid);
      setIsValid(lengthValid && numberValid); // Update combined validation state
    }
  };
  
  function focusedEmail() {
    setIsFocusedEmail(!isFocusedEmail);
  }
  const blurredEmail = () => {
    setIsFocusedEmail(false);
  };

  function focusedPassword() {
    setIsFocusedPassword(!isFocusedPassword);
  }
  const blurredPassword = () => {
    setIsFocusedPassword(false);
  };

  const generateRandomOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleSignup = () => {
    if (email.trim() === "" || password.trim() === "") {
      // If email or password is empty, display an error message or handle it as desired
      setError("Email/Phone number and password are required");
    } else {
      const randomOTP = generateRandomOTP();
      navigation.navigate("OtpPage", { email, password, randomOTP });
    }
  };
  return (
    <FontsFam>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={Globalcss.container}>
        <StatusBar style="auto" />
        <View style={Globalcss.header}></View>
        <View style={Globalcss.welcomeContainer}>
          <View style={Globalcss.welcomText}>
            <Text style={Globalcss.welcome}>{literals.welcome}</Text>
          </View>
          <View style={Globalcss.enterAccount}>
            <Text style={Globalcss.welcometext}>{literals.accounthere}</Text>
          </View>
        </View>

        <View style={Globalcss.emailrnumber}>
          <TouchableOpacity
            onPress={focusedEmail}
            style={[
              Globalcss.inputContainerReg,
              isFocusedEmail ? Globalcss.intemail : null,
            ]}
          >
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
              onFocus={focusedEmail}
              onBlur={() => {
                validateEmail();
                blurredEmail();
              }}
              inputContainerhome
            />
          </TouchableOpacity>
        </View>

        {emailError ? (
          <Text style={Globalcss.errorss}>{emailError}</Text>
        ) : null}

        <View style={Globalcss.emailrnumber}>
          <TouchableOpacity
            onPress={focusedPassword}
            style={[
              Globalcss.inputContainerReg,
              isFocusedPassword ? Globalcss.intemail : null,
            ]}
          >
            <SvgXml
              xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4235 9.4478V7.3008C16.4235 4.7878 14.3855 2.7498 11.8725 2.7498C9.35949 2.7388 7.31349 4.7668 7.30249 7.2808V7.3008V9.4478" stroke="#2E3E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6832 21.2496H8.04224C5.94824 21.2496 4.25024 19.5526 4.25024 17.4576V13.1686C4.25024 11.0736 5.94824 9.3766 8.04224 9.3766H15.6832C17.7772 9.3766 19.4752 11.0736 19.4752 13.1686V17.4576C19.4752 19.5526 17.7772 21.2496 15.6832 21.2496Z" stroke="#2E3E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.863 14.2027V16.4237" stroke="#2E3E5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`}
              width={24}
              height={24}
              fill="none"
            />
            <TextInput
              style={Globalcss.inputs}
              placeholder="Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={password}
              onChangeText={validatePassword}
              onFocus= {() => {
                handleFieldClick();
                focusedPassword();
              }}
              onBlur={() => {
                validatePassword();
                blurredPassword();
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <SvgXml
                xml={`
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.8911 11.9994 8.8911C13.7454 8.8911 15.1614 10.3061 15.1614 12.0531Z" stroke="#9FA5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.4889 15.806 4.7509 11.998 4.7509H12.002C8.194 4.7509 4.711 7.4889 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#9FA5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                `}
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        {isFieldClicked && ( 
      
  <View style={Globalcss.errorserr}>
  <Text style={Globalcss.errorMessages}>
    Your Password must contain:
  </Text>
<View style={Globalcss.errorMessageContainer}>
   <View style={Globalcss.check}>
      <Icon
        name={minLengthMet ? 'check-circle' : 'check-circle'} 
        size={20}
        color={minLengthMet ? 'rgba(31, 204, 121, 1)' : 'rgba(159, 165, 192, 1)'} 
      />

      <Text style={{ color: minLengthMet?'rgba(61, 84,129,1)':'rgba(159, 165, 192, 1)', ...Globalcss.errorMessage}}>
        At least 6 characters
      </Text>
    </View>
  </View>
  <View style={Globalcss.errorMessageContainer}>
    <View style={Globalcss.check}>
      <Icon
        name={hasNumber?'check-circle':'check-circle'}
        size={20}
        color={hasNumber ?'rgba(31, 204, 121, 1)':'rgba(159, 165, 192, 1)'}
      />
      <Text style={{color:hasNumber?'rgba(46, 62, 92, 1)':'rgba(159, 165, 192, 1)',...Globalcss.errorMessage }}>
        Contains a number
      </Text>
    </View>
  </View>
</View>
      )}
         {error && (
          <Text
            style={{
              color: "rgba(159, 165, 192, 1)",
              marginTop: 15,
              marginLeft: 40,
            }}
          >
            {error}
          </Text>
        )}
        <View style={Globalcss.signUpbtn}>
        <TouchableOpacity
          onPress={handleSignup}
          style={Globalcss.getStartedLoginbtn}
        >
          <View >
            <Text style={Globalcss.Buttonee}>{literals.SignUp}</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </FontsFam>
  );
};

export default RegisterPage;