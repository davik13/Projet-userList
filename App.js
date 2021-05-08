import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './Navigation/Router';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
