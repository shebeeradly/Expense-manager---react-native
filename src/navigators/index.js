import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, SignupScreen, LoginScreen, } from '../screens';
import Screen1 from './Screen1';
import { connect } from 'react-redux'

const Stack = createNativeStackNavigator();

const Navigators = ({ token }) => {
  console.log(token)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {
          !token ? (
            <>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          ) : (
            <Stack.Screen name="Screen1" component={Screen1} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const mapStateToProps = (state) => {
  return {
    token: state.generalState.token
  }
};

export default connect(mapStateToProps)(Navigators);