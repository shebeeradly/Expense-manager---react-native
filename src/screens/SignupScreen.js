import React, { useState } from 'react';
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity,
  TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Signup from '../assets/images/Signup.svg';
import UserSign from '../assets/images/userSign.svg';
import Seperator from '../components/Seperator';
import { Colors, Fonts, Images } from '../constants';
import { AuthenticationService } from '../services';
import Display from '../utils/Display';
import LottieView from 'lottie-react-native';

const inputStyle = state => {
  switch (state) {
    case 'valid':
      return {
        ...styles.emailInput,
        borderWidth: 3,
        borderColor: Colors.SECONDARY_GREEN,
        borderBottomEndRadius: 13,
        borderBottomStartRadius: 13,
        borderTopEndRadius: 13,
        borderTopStartRadius: 13
      };
      break;
    case 'invalid':
      return {
        ...styles.emailInput,
        borderWidth: 3,
        borderColor: Colors.SECONDARY_RED,
        borderBottomEndRadius: 13,
        borderBottomStartRadius: 13,
        borderTopEndRadius: 13,
        borderTopStartRadius: 13
      };
    default:
      return styles.emailInput;
      break;
  }
}

const SignupScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [existErrorMessage, setExistErrorMessage] = useState('');
  const [emailState, setEmailState] = useState('default');
  const [passwordState, setPasswordState] = useState('default');

  const register = () => {
    let user = {
      name,
      email,
      password,
      confirmPassword,
    }

    if (user.password === user.confirmPassword) {
      setPasswordState('valid')
    } else {
      setPasswordState('invalid')
    }

    setLoading(true)
    AuthenticationService.register(user).then(response => {
      setLoading(false)
      if (response?.status === true) {
        navigation.navigate('Screen1')
      }
      if (!response?.status) {
        setErrorMessage(response?.message)
      } else {
        setErrorMessage('')
      }
    })
    // navigation.navigate('Screen1')
  };

  const checkUserExist = async (type, value) => {
    if (value?.length > 0) {
      if (value?.includes('@'&& '.')) {
        AuthenticationService.checkUserExist(type, value).then(response => {
          if (response?.status) {
            type === 'email' && existErrorMessage
              ? setExistErrorMessage('') : null;
            type === 'email' ? setEmailState('valid') : null;

          } else {
            type === 'email' ? setExistErrorMessage(response?.message) : null;
            type === 'email' ? setEmailState('invalid') : null;
          }
        })
      } else {
        type === 'email' ? setExistErrorMessage("Enter a valid Email") : null;
        type === 'email' ? setEmailState('invalid') : null;
      }
    }
  }

  return (

    <View style={styles.container}>

      <StatusBar barStyle='dark-content'
        translucent backgroundColor="transparent" />

      <View style={styles.splashcontainer}>
        <Signup style={styles.splashcolor} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.main}>
          <Seperator height={150} />
          <UserSign style={styles.userSign} />

          <Seperator height={55} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput underlineColorAndroid={Colors.DEFAULT_WHITE}
                placeholder='Name'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput}
                onChangeText={(text) => setName(text)} />
            </View>
          </LinearGradient>

          <Seperator height={20} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={inputStyle(emailState)}>
            <View style={styles.inputContainer}>
              <TextInput underlineColorAndroid={Colors.DEFAULT_WHITE}
                placeholder='Mail Id'
                keyboardType='email-address'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput}
                onChangeText={(text) => setEmail(text)}
                onEndEditing={({ nativeEvent: { text } }) =>
                  checkUserExist('email', text)} />
            </View>
          </LinearGradient>
          <Text style={styles.warningTxt}>{existErrorMessage}</Text>

          <Seperator height={4} />
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
            <Seperator height={20} />

            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
              style={inputStyle(passwordState)}>
              <View style={styles.inputContainer}>
                <TextInput placeholder='Confirm Password'
                  placeholderTextColor={Colors.DARK_FIVE}
                  secureTextEntry={true}
                  style={styles.txtInput}
                  onChangeText={(text) => setConfirmPassword(text)} />
              </View>
            </LinearGradient>
          </KeyboardAvoidingView>
          <Text style={styles.warningTxt}>{errorMessage}</Text>

          <Seperator height={40} />

          <TouchableOpacity
            onPress={() => register()}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
              style={styles.logButton}>
              {loading ? (
                <LottieView source={Images.LOADINGY} autoPlay />
              ) : (
                <Text style={styles.logBtnTxt}>SIGN UP</Text>
              )
              }
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
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: Display.setHeight(6.3),
    width: Display.setWidth(75.5),
    borderRadius: 10,
    justifyContent: 'center',
  },
  txtInput: {
    width: Display.setWidth(70),
    textAlign: 'center',
    height: Display.setHeight(7),
    fontFamily: Fonts.POPPINS_MEDIUM,
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
  },
  warningTxt: {
    fontSize: 10,
    marginHorizontal: 21,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_RED,
    lineHeight: 10 * 1.4,
    marginTop: 5
  },
  emailInputBorder: {
    marginHorizontal: 20,
    height: Display.setHeight(7),
    width: Display.setWidth(77),
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.DEFAULT_RED,
    borderBottomEndRadius: 13,
    borderBottomStartRadius: 13,
    borderTopEndRadius: 13,
    borderTopStartRadius: 13
  },

});

export default SignupScreen;