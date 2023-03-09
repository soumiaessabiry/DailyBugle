import React from 'react';
import Home from '../screens/Home';
import Homenews from "../screens/homeNews";
import Detail from "../screens/Details"
import Sauvegarde from "../screens/Sauvegarde"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const route = () => {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Homenews' component={Homenews} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Sauvegarde' component={Sauvegarde} />
     
    </Stack.Navigator>
  )
}

export default route
