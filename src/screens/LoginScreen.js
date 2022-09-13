import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../assets/images/Login.svg';
import Mail from '../assets/images/Mail.svg';
import Seperator from '../components/Seperator';
import { Fonts } from '../constants';
import Display from '../utils/Display';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content'
        translucent backgroundColor="transparent" />
      <View style={styles.splashcontainer}>
        <Login style={styles.splashcolor} />

        <Seperator height={70} />
        <Mail height={Display.setHeight(17)}
          width={Display.setWidth(25)} />
        <Text style={styles.welText}>Welcome back!</Text>

        <Seperator height={70} />
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            LOG IN
          </Text>
        </LinearGradient>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  splashcolor: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  splashcontainer: {
    alignItems: 'center',
  },
  welText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: '#9007FC',
    fontSize: 20,
    textAlign: 'center'
  }

});

export default LoginScreen;