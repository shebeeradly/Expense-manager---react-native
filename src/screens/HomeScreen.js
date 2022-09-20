import React, { useState } from 'react';
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, SafeAreaView
} from 'react-native';
import { Colors, Fonts } from '../constants';
import Display from '../utils/Display';
import Atm from '../assets/images/atm.svg';
import Wallet from '../assets/images/wallet.svg';
import Addexpns from '../assets/images/addexpns.svg';
import Amount from '../assets/images/amount.svg';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { Seperator } from '../components';

const HomeScreen = ({ navigation }) => {

  const [salary, setSalary] = useState(0);
  const [expense, setExpense] = useState(0);
  const [today, setToday] = useState(0);
  const [items, setItems] = useState("School");
  const [items1, setItems1] = useState("Travellig");
  const [items2, setItems2] = useState("Trips");
  const [items3, setItems3] = useState("Grocery Items");
  const [items4, setItems4] = useState("Milk");
  const [amount, setAmount] = useState(0);

  return (

    <View style={styles.container}>

      <StatusBar translucent
        backgroundColor={Colors.DEFAULT_WHITE} />
      <Seperator height={StatusBar.currentHeight} />
      <Seperator height={10} />
      <View style={styles.firstContainer}>
        <TouchableOpacity style={styles.dotContainer}>

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
            style={styles.dotBox}>
          </LinearGradient>

          <Text style={styles.expText}>EXPENSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExpens')}>
          <Text style={styles.accText}>ACCOUNTS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>

        <Amount style={styles.accountContainer}
          height={Display.setHeight(40)} width={Display.setWidth(90)} />
        <Seperator height={30} />
        <View style={styles.alignContainer} >
          <Text style={styles.salaryText}>Salary : {salary}</Text>
          <Text style={styles.dateText}>{moment().format('MMMM')}</Text>
        </View>
        <Seperator height={30} />

        <Text style={styles.monthText}>This Month Expense</Text>
        <View style={styles.mainAmount}>
          <Text style={styles.mainAmountTxt}>{expense}</Text>
          <Seperator width={20} />
          <Text style={styles.inrText}>INR</Text>
        </View>
        <Seperator height={30} />

        <Text style={styles.todayText}>Today Expense: {today} INR</Text>
      </View>
      <Seperator height={30} />

      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.spaceContainer}>
            <View style={styles.itemDirection}>
              <View style={styles.smallBox} />
              <Seperator width={10} />
              <Text style={styles.itemTxt}>{items}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountTxt}>{amount}</Text>
            </View>
          </View>
        </View>

        <Seperator height={10} />
        <View style={styles.itemContainer1}>
          <View style={styles.spaceContainer}>
            <View style={styles.itemDirection}>
              <View style={styles.smallBox1} />
              <Seperator width={10} />
              <Text style={styles.itemTxt}>{items1}</Text>
            </View>
            <View style={styles.amountContainer1}>
              <Text style={styles.amountTxt1}>{amount}</Text>
            </View>
          </View>
        </View>

        <Seperator height={10} />
        <View style={styles.itemContainer2}>
          <View style={styles.spaceContainer}>
            <View style={styles.itemDirection}>
              <View style={styles.smallBox2} />
              <Seperator width={10} />
              <Text style={styles.itemTxt}>{items2}</Text>
            </View>
            <View style={styles.amountContainer2}>
              <Text style={styles.amountTxt2}>{amount}</Text>
            </View>
          </View>
        </View>

        <Seperator height={10} />
        <View style={styles.itemContainer3}>
          <View style={styles.spaceContainer}>
            <View style={styles.itemDirection}>
              <View style={styles.smallBox3} />
              <Seperator width={10} />
              <Text style={styles.itemTxt}>{items3}</Text>
            </View>
            <View style={styles.amountContainer3}>
              <Text style={styles.amountTxt3}>{amount}</Text>
            </View>
          </View>
        </View>

        <Seperator height={10} />
        <View style={styles.itemContainer4}>
          <View style={styles.spaceContainer}>
            <View style={styles.itemDirection}>
              <View style={styles.smallBox4} />
              <Seperator width={10} />
              <Text style={styles.itemTxt}>{items4}</Text>
            </View>
            <View style={styles.amountContainer4}>
              <Text style={styles.amountTxt4}>{amount}</Text>
            </View>
          </View>
        </View>

        <Seperator height={10} />
        <View style={styles.itemContainer2}>
          <View style={styles.spaceContainer}>
            <View style={styles.itemDirection}>
              <View style={styles.smallBox2} />
              <Seperator width={10} />
              <Text style={styles.itemTxt}>{items2}</Text>
            </View>
            <View style={styles.amountContainer2}>
              <Text style={styles.amountTxt2}>{amount}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Seperator height={10} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')} >
        <Text style={styles.detailTxt}>Detailed view of expense</Text>
      </TouchableOpacity>
      <Seperator height={10} />

      <View style={styles.finalContainer}>
        <View style={styles.finalDirection}>
          <TouchableOpacity style={{ top: 33 }}>
            <Wallet />
            <Text style={styles.cardTxt}>My Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Adexp')} >
            <Addexpns />
            <Text style={styles.finalTxt}>Add Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ top: 33 }}>
            <Atm />
            <Text style={styles.cardTxt}>My ATM</Text>
          </TouchableOpacity>
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
    position: 'absolute',
    top: -15,
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
  todayText: {
    color: '#DEB6FF',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    textAlign: 'center'
  },
  smallBox: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: "#4081FF"
  },
  itemDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    marginHorizontal: 20,
    height: Display.setHeight(5),
    width: Display.setWidth(90),
    borderRadius: 5,
    backgroundColor: "#C8F2FF",
    justifyContent: 'center',
  },
  spaceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 7,
    alignItems: 'center'
  },
  itemTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4
  },
  amountContainer: {
    height: Display.setHeight(5),
    width: Display.setWidth(27),
    backgroundColor: '#A9F5FF',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  amountTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 18,
    color: '#E30613',
    lineHeight: 18 * 1.4
  },
  detailTxt: {
    color: '#8888BB',
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    textAlign: 'center'
  },
  finalContainer: {
    height: Display.setHeight(18),
    width: Display.setWidth(90),
    borderRadius: 10,
    backgroundColor: '#F0F0FF',
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  finalDirection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  finalTxt: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DARK_ONE,
    textAlign: 'center',
    fontSize: 13
  },
  cardTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 13
  },
  itemContainer1: {
    marginHorizontal: 20,
    height: Display.setHeight(5),
    width: Display.setWidth(90),
    borderRadius: 5,
    backgroundColor: "#E0FFE0",
    justifyContent: 'center',
  },
  smallBox1: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: "#7EDE7C"
  },
  amountContainer1: {
    height: Display.setHeight(5),
    width: Display.setWidth(27),
    backgroundColor: '#D0FFD0',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  amountTxt1: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 18,
    color: '#BF0603',
    lineHeight: 18 * 1.4
  },
  itemContainer2: {
    marginHorizontal: 20,
    height: Display.setHeight(5),
    width: Display.setWidth(90),
    borderRadius: 5,
    backgroundColor: "#D0FFFF",
    justifyContent: 'center',
  },
  smallBox2: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: "#62B7B2"
  },
  amountContainer2: {
    height: Display.setHeight(5),
    width: Display.setWidth(27),
    backgroundColor: '#D0F0F0',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  amountTxt2: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 18,
    color: '#8F0603',
    lineHeight: 18 * 1.4
  },
  itemContainer3: {
    marginHorizontal: 20,
    height: Display.setHeight(5),
    width: Display.setWidth(90),
    borderRadius: 5,
    backgroundColor: "#FFF0F0",
    justifyContent: 'center',
  },
  smallBox3: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: "#EFB97B"
  },
  amountContainer3: {
    height: Display.setHeight(5),
    width: Display.setWidth(27),
    backgroundColor: '#FFE0E0',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  amountTxt3: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 18,
    color: '#7F0603',
    lineHeight: 18 * 1.4
  },
  itemContainer4: {
    marginHorizontal: 20,
    height: Display.setHeight(5),
    width: Display.setWidth(90),
    borderRadius: 5,
    backgroundColor: "#F0F0FF",
    justifyContent: 'center',
  },
  smallBox4: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: "#7AA7FF"
  },
  amountContainer4: {
    height: Display.setHeight(5),
    width: Display.setWidth(27),
    backgroundColor: '#E0E0FF',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  amountTxt4: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 18,
    color: '#4F0603',
    lineHeight: 18 * 1.4
  },
});

export default HomeScreen;