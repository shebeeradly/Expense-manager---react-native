import React, { useState, useRef } from 'react';
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList, TextInput
} from 'react-native';
import { CatogeryCard, GradientText, Seperator } from '../components';
import moment from 'moment';
import { Colors, Fonts } from '../constants';
import Display from '../utils/Display';
import Addexp from '../assets/images/addexp.svg';

const category =
  ["School", "Grocery", "Milk", "Supermarket", "Beverages", "Fish", "Medicine", "Clothes"]

const AddExpens = () => {

  const [salary, setSalary] = useState(0);
  const [expense, setExpense] = useState(0);
  const [activeC, setActiveC] = useState("School")

  const inputRef = useRef(null);
  const setRefValue = v => {
    const clean = v.replace(/[^0-9]/g, '');
    inputRef.current.value = clean;
    inputRef.current.setNativeProps({ text: clean });
  };


  return (
    <View style={styles.container}>
      <StatusBar translucent
        backgroundColor={Colors.DEFAULT_WHITE} />
      <Seperator height={StatusBar.currentHeight} />
      <Seperator height={15} />
      <GradientText style={styles.textStyle}>Add Expense</GradientText>
      <Seperator height={10} />

      <View style={styles.account}>
        <Addexp style={styles.accountContainer}
          height={Display.setHeight(40)} width={Display.setWidth(100)} />
        <Seperator height={10} />
        <View style={styles.alignContainer} >
          <Text style={styles.salaryText}>Salary : {salary}</Text>
          <Text style={styles.dateText}>{moment().format('MMMM')}</Text>
        </View>
        <Seperator height={10} />
        <View style={styles.mainAmount}>
          <Text style={styles.mainAmountTxt}>{expense}</Text>
          <Seperator width={20} />
          <Text style={styles.inrText}>INR</Text>
        </View>
      </View>
      
      <Seperator height={10} />
      <View style={styles.flatContainer}>
      <Seperator height={10} />
        <FlatList
          data={category}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <Seperator height={10} />}
          numColumns={category.length / 2}
          renderItem={({ item, index }) => (<CatogeryCard
            CatogeryName={item}
            active={item === activeC ? true : false}
            onPress={(CatogeryName) => setActiveC(CatogeryName)} />
          )}
        />
      </View>
      <Seperator height={17} />

      <View style={styles.adCatogContainer}>
        <TouchableOpacity style={styles.adCatogTouch}>
          <Text style={styles.adCatogTxt}>Delete Catogery</Text>
        </TouchableOpacity>
        <Seperator width={15} />
        <TouchableOpacity style={styles.adCatogTouch2}>
          <Text style={styles.adCatogTxt}>Add New Catogery</Text>
        </TouchableOpacity>
      </View>
      <Seperator height={17} />

      <View style={styles.cashContainer}>
        <Text style={styles.paidTxt}>Paid Via</Text>
        <Seperator width={10} />
        <TouchableOpacity
          style={{ ...styles.cashTouch, backgroundColor: '#7EDE7C' }}>
          <Text style={styles.cashTxt}>Cash</Text>
        </TouchableOpacity>
        <Seperator width={17} />
        <TouchableOpacity
          style={{ ...styles.cashTouch, backgroundColor: '#DEB6FF' }}>
          <Text style={styles.cashTxt}>Card</Text>
        </TouchableOpacity>
        <Seperator width={17} />
        <TouchableOpacity
          style={{ ...styles.cashTouch, backgroundColor: '#EFB97B' }}>
          <Text style={styles.cashTxt}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        ref={inputRef}
        keyboardType='numeric'
        onChangeText={setExpense}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 20
  },
  accountContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  alignContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  salaryText: {
    color: '#DEB6FF',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4
  },
  dateText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 17,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 17 * 1.4
  },
  account: {
    marginHorizontal: 20,
  },
  mainAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  mainAmountTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 50,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 37
  },
  inrText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  flatContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  adCatogContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  adCatogTouch: {
    backgroundColor: '#DEB6FF',
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 2
  },
  adCatogTouch2: {
    backgroundColor: '#BA90FF',
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 2
  },
  adCatogTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13,
    color: Colors.DEFAULT_WHITE,
  },
  cashContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cashTouch: {
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 3
  },
  cashTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    fontSize: 14
  },
  paidTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 12,
    lineHeight: 12 * 1.4
  }
});

export default AddExpens;