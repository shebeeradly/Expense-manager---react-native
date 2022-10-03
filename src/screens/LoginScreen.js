import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../assets/images/Login.svg';
import Mail from '../assets/images/Mail.svg';
import Seperator from '../components/Seperator';
import { Colors, Fonts, Images } from '../constants';
import Display from '../utils/Display';
import { AuthenticationService, StorageService } from '../services';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralAction } from '../actions';

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
  }
}

const LoginScreen = ({ navigation }) => {

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [existErrorMessage, setExistErrorMessage] = useState('');
  const [emailState, setEmailState] = useState('default');

  const dispatch = useDispatch();

  const firstInput = useRef();

  const login = async () => {
    setLoading(true);
    let user = {
      email,
      password,
    };
    AuthenticationService.login(user).then(response => {
      setLoading(false);

      if (response?.status) {
        StorageService.setToken(response?.data).then(() => {
          dispatch(GeneralAction.setToken(response?.data));
        });
      } else {
        setErrorMessage(response?.message);
      }
      // StorageService.setToken(response?.data).then(() => {
      //   dispatch(GeneralAction.setToken(response?.data));
      // });

      // StorageService.getFirstTimeUse().then(() => {
      //   dispatch(GeneralAction.setFirstTimeUse());
      // });
      // if (response?.status === true) {
      //   navigation.navigate('Screen1')
      // }
      // if (!response?.status) {
      //   setErrorMessage(response?.message)
      // } else {
      //   setErrorMessage('')
      // }
    })
  }

  const checkUserExist = async (type, value) => {
    if (value?.length > 0) {
      await AuthenticationService.checkUserExist(type, value).then(response => {
        if (!response?.status) {
          type === 'email' && existErrorMessage
            ? setExistErrorMessage('') : null;
          type === 'email' ? setEmailState('valid') : null;

        } else {
          type === 'email' ? setExistErrorMessage("Email not found") : null;
          type === 'email' ? setEmailState('invalid') : null;
        }
      })
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content'
        translucent backgroundColor="transparent" />
      <View style={styles.splashcontainer}>
        <Login style={styles.splashcolor} />

        <ScrollView
          showsVerticalScrollIndicator={false}>
          <Seperator height={100} />
          <View style={styles.mailPosintion}>
            <Mail height={Display.setHeight(17)}
              width={Display.setWidth(23)} />
          </View>
          <Text style={styles.welText}>Welcome back!</Text>
          <Seperator height={100} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={inputStyle(emailState)}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Enter Mail Id'
                placeholderTextColor={Colors.DARK_FIVE}
                style={styles.txtInput}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                onEndEditing={({ nativeEvent: { text } }) =>
                  checkUserExist('email', text)
                  && firstInput.current.focus() } />
            </View>
          </LinearGradient>
          <Text style={styles.warningTxt}>{existErrorMessage}</Text>
          <Seperator height={5} />

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.emailInput}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Enter Password'
                placeholderTextColor={Colors.DARK_FIVE}
                secureTextEntry={true}
                style={styles.txtInput}
                ref={firstInput}
                onChangeText={(text) => setPassword(text)} />
            </View>
          </LinearGradient>
          <Text style={styles.warningTxt}>{errorMessage}</Text>
          <Seperator height={5} />

          <TouchableOpacity
            onPress={() => login()}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
              style={styles.logButton}>
              {loading ? (
                <LottieView source={Images.LOADINGY} autoPlay />
              ) : (
                <Text style={styles.logBtnTxt}>LOG IN</Text>
              )
              }
            </LinearGradient>
          </TouchableOpacity>

          <Seperator height={20} />
          <TouchableOpacity
          onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.forgTouchTxt}>Forgot Password?</Text>
          </TouchableOpacity>

          <Seperator height={100} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')} >
            <Text style={styles.accountText}>Don't have an account?</Text>
            <Text style={styles.logText}>SIGN UP</Text>
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
  warningTxt: {
    fontSize: 10,
    marginHorizontal: 21,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_RED,
    lineHeight: 10 * 1.4,
    marginTop: 5
  },
  mailPosintion: {
    alignItems: 'center'
  }

});

export default LoginScreen;