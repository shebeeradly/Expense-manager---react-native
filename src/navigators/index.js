import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SplashScreen, SignupScreen, LoginScreen, SettingScreen,ShareScreen
} from '../screens';
import Home from './Home';
import Homes from '../assets/images/Home.svg';
import Icosettings from '../assets/images/icosettings.svg';
import Icoshare from '../assets/images/icoshare.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Screen1() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
      <Tab.Screen name="Setting" component={SettingScreen} 
      options={{tabBarShowLabel: false , tabBarIcon: ({focused, size}) =>(
        <Icosettings width={30} height={30} />
       )}} />
      <Tab.Screen name="Home" component={Home}
      options={{tabBarShowLabel: false , tabBarIcon: ({focused, size}) =>(
        <Homes width={30} height={30} />
       )}} />
      <Tab.Screen name="Share" component={ShareScreen}
       options={{tabBarShowLabel: false , tabBarIcon: ({focused, size}) =>(
        <Icoshare width={30} height={30} />
       )}} />
    </Tab.Navigator>
  );
}

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />       
        <Stack.Screen name="Screen1" component={Screen1} />      
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigators;