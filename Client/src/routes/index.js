import React from 'react';
import Home from '../screens/Home';
import Homenews from "../screens/homeNews";
import Detail from "../screens/Details"
import Sauvegarde from "../screens/Sauvegarde"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const route = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Homenews' component={Homenews} options={{ headerShown: false }} />
      <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
      <Stack.Screen name='Sauvegarde' component={Sauvegarde} />
     
    </Stack.Navigator>
  )
}

export default route
