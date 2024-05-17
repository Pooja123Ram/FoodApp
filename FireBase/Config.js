import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
  apiKey: "AIzaSyCWnpU-f6J0X5AoWcctROwqz4agGxI5nHI",
  authDomain: "foodapp-5bd31.firebaseapp.com",
  databaseURL: "https://foodapp-5bd31-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodapp-5bd31",
  storageBucket: "foodapp-5bd31.appspot.com",
  messagingSenderId: "40759791548",
  appId: "1:40759791548:web:ad73480613a55dbe3ba5b9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);