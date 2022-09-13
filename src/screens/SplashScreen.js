import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Splashcolor from '../assets/images/splashcolor.svg';
import Expenselogo from '../assets/images/expenselogo.svg';
import Google from '../assets/images/Google.svg';
import Facebook from '../assets/images/Facebook.svg';
import Display from '../utils/Display';
import Seperator from '../components/Seperator';
import { Colors, Fonts } from '../constants';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.splashcontainer}>
        <Splashcolor style={styles.splashcolor} />

        <Seperator height={70} />
        <TouchableOpacity
        onPress={() => navigation.navigate('Signup')} >
          <Expenselogo height={Display.setHeight(55)}
           width={Display.setWidth(55)} />
        </TouchableOpacity>

        <Seperator height={30} />
        <View style={styles.logos}>
          <Google height={30} width={30} />
          <Seperator width={30} />
          <Facebook height={30} width={30} />
        </View>
        <Seperator height={25} />
        <View>
          <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
           style={styles.signContainer}>
            <Text style={styles.signText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <Seperator height={25} />
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')} >
              <Text style={styles.accountText}>Already have an account?</Text>
              <Text style={styles.logText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: -1,
  },
  logos: {
    flexDirection: 'row',
  },
  signContainer: {
    height: Display.setHeight(7),
    width: Display.setWidth(80),
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountText: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  logText: {
    color: Colors.DEFAULT_WHITE,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  signText: {
    fontFamily: Fonts.POPPINS_EXTRA_BOLD,
    color: '#9007FC'
  }
});

export default SplashScreen;