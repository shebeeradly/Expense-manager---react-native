import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Seperator from '../components/Seperator';
import { Colors, Fonts } from '../constants';
import Splashcolor from '../assets/images/splashcolor.svg';
import Expenselogo from '../assets/images/expenselogo.svg';
import UserSet from '../assets/images/userSet.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingScreen = ({ navigation }) => {

  const [email, setEmail] = useState('bairuhaTech@gmail.com');

  return (
    <View style={styles.container}>
      
      <View style={styles.splashcontainer}>
        <Splashcolor style={styles.splashcolor} />
      </View>
      <StatusBar translucent
        backgroundColor="transparent"
        barStyle='light-content' />
      <Seperator height={StatusBar.currentHeight} />
      <View style={styles.expenselogo}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color={Colors.DEFAULT_WHITE}
          onPress={() => navigation.goBack()}
        />
        <Expenselogo height={37} width={37} />
      </View>
      <Seperator height={60} />
      <TouchableOpacity
        style={styles.userset}>
        <UserSet height={100} width={100} />
      </TouchableOpacity>
      <Seperator height={15} />
      <Text style={styles.itemTxt}>{email}</Text>
      <Seperator height={70} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Get Premium</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Bank Sync</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Records</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Statistics</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Planned Payments</Text>
      </TouchableOpacity>
      <Seperator height={30} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Budgets</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Debts</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Goals</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Shopping List</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Warrenty</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Currency Rate</Text>
      </TouchableOpacity>
      <Seperator height={30} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Invite Friends</Text>
      </TouchableOpacity>
      <Seperator height={13} />
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.smallBox} />
        <Text style={styles.mailTxt}>Help</Text>
      </TouchableOpacity>
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
  expenselogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    top: 15,
    right: 10,
  },
  userset: {
    alignItems: 'center'
  },
  mailTxt: {
    color: Colors.DEFAULT_WHITE,
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13,
    lineHeight: 13 * 1.4,
  },
  smallBox: {
    height: 13,
    width: 13,
    borderRadius: 4,
    backgroundColor: "#C8F2FF",
    marginHorizontal: 10

  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  itemTxt: {
    color: Colors.DEFAULT_WHITE,
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
});

export default SettingScreen;