import React from 'react';
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity,
  TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../assets/images/Login.svg';
import Profile from '../assets/images/Profile.svg';
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
        <ScrollView style={styles.main}>
          <Seperator height={150} />

          <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
              style={styles.ProfileContainer}>
              <Profile  height={100}  width={100} />
            </LinearGradient>

          <Seperator height={67} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Name'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput} />
            </View>
          </LinearGradient>

          <Seperator height={17} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Mail Id'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput} />
            </View>
          </LinearGradient>

          <Seperator height={17} />
          <KeyboardAvoidingView>
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
            <Seperator height={17} />

            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
              style={styles.emailInput}>
              <View style={styles.inputContainer}>
                <TextInput placeholder='Confirm Password'
                  placeholderTextColor={Colors.DARK_FIVE}
                  secureTextEntry={true}
                  style={styles.txtInput} />
              </View>
            </LinearGradient>
          </KeyboardAvoidingView>

          <Seperator height={45} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Screen1')}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
              style={styles.logButton}>
              <Text style={styles.logBtnTxt}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Seperator height={30} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')} >
            <Text style={styles.accountText}>Already have an account?</Text>
            <Text style={styles.logText}>LOG IN</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  ProfileContainer: {
    backgroundColor: '#9007FC',
    borderRadius: 50,
    marginHorizontal: 110   
  }

});

export default LoginScreen;