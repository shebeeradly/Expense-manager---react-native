import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../assets/images/Login.svg';
import Mail from '../assets/images/Mail.svg';
import Seperator from '../components/Seperator';
import { Colors, Fonts } from '../constants';
import Display from '../utils/Display';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content'
        translucent backgroundColor="transparent" />
      <View style={styles.splashcontainer}>
        <Login style={styles.splashcolor} />

        <Seperator height={100} />
        <Mail height={Display.setHeight(17)}
          width={Display.setWidth(23)} />
        <Text style={styles.welText}>Welcome back!</Text>

        <Seperator height={100} />

        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
          style={styles.emailInput}>
          <View style={styles.inputContainer}>
            <TextInput placeholder='Enter Mail Id'
              placeholderTextColor={Colors.DARK_FIVE}
              style={styles.txtInput} />
          </View>
        </LinearGradient>

        <Seperator height={20} />

        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
          style={styles.emailInput}>
          <View style={styles.inputContainer}>
            <TextInput placeholder='Enter Password'
              placeholderTextColor={Colors.DARK_FIVE}
              secureTextEntry={true}
              style={styles.txtInput} />
          </View>
        </LinearGradient>
        <Seperator height={20} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Screen1')}>
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.logButton}>
            <Text style={styles.logBtnTxt}>LOG IN</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Seperator height={20} />
        <TouchableOpacity>
          <Text style={styles.forgTouchTxt}>Forgot Password?</Text>
        </TouchableOpacity>

        <Seperator height={100} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')} >
          <Text style={styles.accountText}>Don't have an account?</Text>
          <Text style={styles.logText}>SIGN UP</Text>
        </TouchableOpacity>

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
  },
  emailInput: {
    backgroundColor: Colors.SECONDARY_GREEN,
    marginHorizontal: 20,
    height: Display.setHeight(7),
    width: Display.setWidth(77),
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: Display.setHeight(6.5),
    width: Display.setWidth(75.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtInput: {
    width: Display.setWidth(75),
    textAlign: 'center'
  },
  logButton: {
    backgroundColor: Colors.SECONDARY_GREEN,
    marginHorizontal: 20,
    height: Display.setHeight(7),
    width: Display.setWidth(77),
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logBtnTxt: {
    color: Colors.SECONDARY_WHITE,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  forgTouchTxt: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DARK_FIVE,
    fontSize: 13
  },
  accountText: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.DARK_FIVE,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  logText: {
    color: Colors.DARK_FIVE,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: Fonts.POPPINS_MEDIUM
  },

});

export default LoginScreen;