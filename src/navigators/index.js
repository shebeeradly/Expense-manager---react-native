import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, SignupScreen, LoginScreen, ForgotPassword, } from '../screens';
import Screen1 from './Screen1';
import { useSelector, useDispatch } from 'react-redux';
import { GeneralAction } from '../actions';

const Stack = createNativeStackNavigator();

const Navigators = () => {

  const {
    isAppLoading, token, isFirstTimeUse
  } = useSelector(state => state?.generalState);
  const dispatch = useDispatch();

  useEffect(() => {
   setTimeout(() => {
    dispatch(GeneralAction.appStart());
   },2000)
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {isAppLoading ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forgot" component={ForgotPassword} />
          </>
        ) :
          !token || token === '' || token === null ? (
            <>
              {/* { isFirstTimeUse && (
                <Stack.Screen name="Signup" component={SignupScreen} />
              )} */}
              
              <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forgot" component={ForgotPassword} />
            </>
          ) : (
            <Stack.Screen name="Screen1" component={Screen1} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigators;