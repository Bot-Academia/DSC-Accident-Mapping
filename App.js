import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Accordion, Block } from 'galio-framework';
import LoginPage from "./Pages/Login"


export default function App() {
  const data = [
    { title: "First Chapter", content: "Lorem ipsum dolor sit amet", 
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      } 
   },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ];
  
  return (
      <LoginPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
