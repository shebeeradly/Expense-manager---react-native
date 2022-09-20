import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, FlatList, StatusBar, TouchableOpacity
} from 'react-native';
import { ItemCard, Seperator } from '../components';
import moment from 'moment';
import Camount from '../assets/images/camount.svg';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, General } from '../constants';
import Display from '../utils/Display';

const DetailScreen = ({ navigation }) => {

  const [salary, setSalary] = useState(0);
  const [expense, setExpense] = useState(0);

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
        <TouchableOpacity >
          <Text style={styles.accText}>ACCOUNTS</Text>
        </TouchableOpacity>
      </View>
      <Seperator height={20} />
      <View style={styles.account}>
        <Seperator height={10} />
        <Camount style={styles.accountContainer} />

        <View style={styles.alignContainer} >
          <Text style={styles.salaryText}>Salary : {salary}</Text>
          <Text style={styles.dateText}>{moment().format('MMMM')}</Text>
        </View>



        <View style={styles.mainAmount}>
          <Text style={styles.mainAmountTxt}>{expense}</Text>
          <Seperator width={20} />
          <Text style={styles.inrText}>INR</Text>
        </View>

      </View>
      <Seperator height={20} />
      <View style={styles.listHeaderContainer}>
        <Seperator width={70} />
        <Text style={styles.listHeaderTxt}>Items</Text>
        <Seperator width={70} />
        <View style={styles.listDateContainer}>
          <Text style={styles.listHeaderTxt}>Date</Text>
        </View>
        <Seperator width={10} />
        <Text style={styles.listHeaderTxt}>Amount</Text>
      </View>
      <Seperator height={3} />
      <FlatList
        data={General.ITEM_CONTENTS}
        keyExtractor={(item, index) => {
          return  index.toString();
         }}
        renderItem={({ item }) => <ItemCard {...item} />}
      />

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
    marginHorizontal: 20,
  },
  accountContainer: {
    height: Display.setHeight(30),
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  salaryText: {
    color: '#DEB6FF',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4
  },
  alignContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  dateText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 17,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 17 * 1.4
  },
  monthText: {
    color: '#DEB6FF',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    textAlign: 'center'
  },
  mainAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  mainAmountTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 60,
    color: Colors.DEFAULT_WHITE,
    lineHeight: 60 * 1.4,
    marginLeft: 37
  },
  inrText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#9007FC',
    height: 40,
    alignItems: 'center'
  },
  listHeaderTxt: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  listDateContainer: {
    backgroundColor: '#AB83FF',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 30
  }
});

export default DetailScreen;