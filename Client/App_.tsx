// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import Router from './src/routes';


const  App=()=>{
  return (
    <NavigationContainer>
    <Router/>
  </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  text:{
    fontSize:40,

  }
})
export default App
