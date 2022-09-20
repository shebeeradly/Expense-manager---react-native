import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddExpens, Adexp, DetailScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} 
      initialRouteName="HomeScreen">
      <Stack.Screen name="Detail" component={DetailScreen}  />
      <Stack.Screen name="AddExpens" component={AddExpens}  />
      <Stack.Screen name="Adexp" component={Adexp} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};


export default Home;