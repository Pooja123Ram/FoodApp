import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FireBase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Globalcss } from "./Globalcss";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SvgXml } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import FontsFam from "../recipespage/FontsFam";
import { literals } from "../Literal";


const HomeLoginpage = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false); 
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);



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

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSignup = () => {
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up successfully:", user);
        navigation.navigate("Home");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setError("Invalid email or password.");
        } else {
          setError("Enter Correct email & Password ");
        }
      });
  };

  function focusedEmail() {
    setIsFocusedEmail(!isFocusedEmail);
};
const blurredEmail = () => {
    setIsFocusedEmail(false);
};

function focusedPassword() {
    setIsFocusedPassword(!isFocusedPassword);
};
const blurredPassword = () => {
    setIsFocusedPassword(false);
};

  return (
    <FontsFam>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <StatusBar style="auto" />

        <ScrollView contentContainerStyle={Globalcss.container}>
          <View style={Globalcss.header}></View>
          <View style={Globalcss.welcomeContainer}>
            <View style={Globalcss.welcomText}>
              <Text style={Globalcss.welcome}>{literals.register}</Text>
            </View>
            <View style={Globalcss.enterAccount}>
              <Text style={Globalcss.welcometext}>
                {literals.registersecond}
              </Text>
            </View>
          </View>

          <View style={Globalcss.emailrnumber}>
        <TouchableOpacity
                            onPress={focusedEmail}
                            style={[
                                Globalcss.inputContainerReg, isFocusedEmail ? Globalcss.intemail : null ]}
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

              onBlur= {() =>{
                validateEmail();
                blurredEmail();
              }}
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
                              Globalcss.inputContainerReg, isFocusedPassword ? Globalcss.intemail : null 
                            ]}>
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
              onChangeText={setPassword}
              onFocus={focusedPassword}
              onBlur= {() =>{
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
        {error ? <Text style={Globalcss.error}>{error}</Text> : null}
        {passwordError ? (
          <Text style={Globalcss.error}>{passwordError}</Text>
        ) : null}

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("RestPassword")}
            >
              <Text style={Globalcss.forget}>{literals.forgot}</Text>
            </TouchableOpacity>
          </View>
          <View style={Globalcss.ButtoneeLogin}> 
          <TouchableOpacity
            onPress={handleSignup}
            style={Globalcss.getStartedLogin}
          >
            <View >
              <Text style={Globalcss.Buttonee}>{literals.Login}</Text>
            </View>
          </TouchableOpacity>
          </View>
          <View style={Globalcss.contine}>
            <Text style={Globalcss.continetext}>{literals.continue}</Text>
          </View>
          <TouchableOpacity style={Globalcss.getStartedGoogle} >
            <View style={Globalcss.goolebtn}>
              {/* <FontAwesomeIcon icon={['fab', 'google']} size={30} color="#900" /> */}
              <Icon style={Globalcss.googleicon} size={17} name="google" color="#fff" />
              {/* <Icon name="google" size={30} color="#900" /> */}
              <Text style={Globalcss.loginTextss}>{literals.Google}</Text>
            </View>
          </TouchableOpacity>
          <View style={Globalcss.account}>
            <Text style={Globalcss.continetextes}>
              {literals.account}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterPage")}
            >
              <Text style={Globalcss.loginButtonText}> { literals.Sign}</Text>
            </TouchableOpacity> 
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </FontsFam>
  );
};

export default HomeLoginpage;