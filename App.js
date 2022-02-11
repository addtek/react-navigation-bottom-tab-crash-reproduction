import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {TabStack} from "./TabNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
