import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { 
    SplashScreen,SignupScreen, LoginScreen, SettingScreen, HomeScreen,
    AddExpens, DetailScreen, ShareScreen
 } from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddExpens" component={AddExpens} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator>
    );
  }

function Screen1() {
    return (
      <Tab.Navigator>
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
      </Tab.Navigator>
    );
  }
  

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Setting" component={SettingScreen} />
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigators;