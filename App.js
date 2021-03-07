import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Accordion, Block } from 'galio-framework';


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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Block style={{ height: 200 }}>
        <Accordion dataArray={data} />
      </Block>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: "center",
    justifyContent: "center"
  },
});
