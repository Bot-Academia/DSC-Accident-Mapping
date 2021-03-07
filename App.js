import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView,
} from 'react-native';
import { Accordion, Block, Button } from 'galio-framework';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';

export default function App() {
  const [info, setInfo] = useState();

  const getInfo = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('info');
      console.log(jsonValue);
      setInfo(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <LoginPage />
  );
}
