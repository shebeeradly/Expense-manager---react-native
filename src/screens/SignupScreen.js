import React, { useState } from 'react';
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity,
  TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Signup from '../assets/images/Signup.svg';
import UserSign from '../assets/images/userSign.svg';
import Seperator from '../components/Seperator';
import { Colors, Fonts } from '../constants';
import { AuthenticationService } from '../services';
import Display from '../utils/Display';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = () => {
    let user = {
      name,
      email,
      password,
      confirmPassword,
    }
    console.log(user)
    AuthenticationService.register(user).then(response => {
      console.log(response);
    })
    // navigation.navigate('Screen1')
  };

  return (

    <View style={styles.container}>

      <StatusBar barStyle='dark-content'
        translucent backgroundColor="transparent" />

      <View style={styles.splashcontainer}>
        <Signup style={styles.splashcolor} />
        <ScrollView style={styles.main}>
          <Seperator height={150} />
          <UserSign style={styles.userSign} />

          <Seperator height={67} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Name'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput}
                onChangeText={(text) => setName(text)} />
            </View>
          </LinearGradient>

          <Seperator height={17} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Mail Id'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput}
                onChangeText={(text) => setEmail(text)} />
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
                  style={styles.txtInput}
                  onChangeText={(text) => setPassword(text)} />
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
                  style={styles.txtInput}
                  onChangeText={(text) => setConfirmPassword(text)} />
              </View>
            </LinearGradient>
          </KeyboardAvoidingView>

          <Seperator height={45} />

          <TouchableOpacity
            onPress={() => register()}>
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
   
  },
  txtInput: {
    width: Display.setWidth(70),
    textAlign: 'center',
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
  userSign: {
    alignSelf: 'center',
  }

});

export default LoginScreen;