import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Seperator from '../components/Seperator';
import { Colors, Fonts } from '../constants';
import Display from '../utils/Display';
import Atm from '../assets/images/atm.svg';
import Wallet from '../assets/images/wallet.svg';
import Amount from '../assets/images/amount.svg';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>

      <StatusBar translucent
        backgroundColor={Colors.DEFAULT_WHITE} />
      <Seperator height={StatusBar.currentHeight} />
      <View style={styles.firstContainer}>
        <TouchableOpacity style={styles.dotContainer}>

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.dotBox}>
          </LinearGradient>


          <Text style={styles.expText}>EXPENSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExpens')} >
          <Text style={styles.accText}>ACCOUNTS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
      <View>
      <Amount height={Display.setHeight(37)} width={Display.setWidth(90)} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotBox: {
    width: 15,
    height: 15,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginRight: 10,
    marginLeft: 20
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  expText: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: '#9007FC',
    fontSize: 17,
    lineHeight: 17 * 1.4,
  },
  accText: {
    color: '#DEB6FF',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 17,
    marginRight: 30,
    lineHeight: 17 * 1.4,
  },
  account: {
    marginHorizontal: 20
  }
});

export default HomeScreen;