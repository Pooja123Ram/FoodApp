import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './recipespage/Home';
import Scan from './recipespage/Scan';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notification from './recipespage/Notification';
import Profile from './recipespage/Profile';
import UploadStep1 from './uploadpage/UploadStep1';
import UploadStep2 from './uploadpage/UploadStep2';
import Capturer from './uploadpage/Capturer';
import Uploadsuccess from './uploadpage/Uploadsuccess';

function UploadStackScreen() {
  const UploadStack = createStackNavigator();

  return (
    <UploadStack.Navigator>
      <UploadStack.Screen
        name="UploadStep1"
        component={UploadStep1}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="UploadStep2"
        component={UploadStep2}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="Uploadsuccess"
        component={Uploadsuccess}
        options={{ headerShown: false }}
      />
      <UploadStack.Screen
        name="Capturer"
        component={Capturer}
        options={{ headerShown: false }}
      />
    </UploadStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Bottom_nav = () => {
  const route = useRoute();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1FCC79',
          tabBarInactiveTintColor: '#9FA5C0',
          tabBarStyle: { display: 'flex' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} style={styles.scanIcon1} />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="pencil" color={color} size={size} style={styles.scanIcon1} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate('UploadStep1');
            },
          })}
        />
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" color={color} size={size} style={styles.scanIcon} />
            ),
          }}
        />
 <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" color={color} size={size} style={styles.scanIcon1} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} style={styles.scanIcon1} />
            ),
          }}
        />
      </Tab.Navigator>
      {route.name === 'Home' && (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingTop: '3%' }}>
          <Image source={require('./assets/indicator.png')} style={globalStyles.imageIndicator} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scanIcon: {
    backgroundColor: '#1FCC79',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 40,
    textAlign: 'center',
    paddingTop: 18,
    color: '#fff',
  },
});

export default Bottom_nav;
