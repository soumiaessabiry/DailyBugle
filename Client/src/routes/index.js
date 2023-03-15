import React from 'react';
import Home from '../screens/Home';
import Homenews from "../screens/homeNews";
import Detail from "../screens/Details"
import Sauvegarde from "../screens/Sauvegarde"
import Navbar from '../components/navBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const route = () => {
  return (
    <Stack.Navigator initialRouteName="Homenews">
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Homenews' component={Homenews} options={{ headerShown: false }} />
      <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
      <Stack.Screen name='Sauvegarde' component={Sauvegarde} options={{ headerShown: false }} />
      <Stack.Screen name='Navbar' component={Navbar}  options={{ headerShown: false }}/>
     
    </Stack.Navigator>
  )
}

export default route
