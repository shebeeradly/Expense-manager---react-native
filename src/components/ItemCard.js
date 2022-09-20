import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../constants';
import { Display } from '../utils';
import Seperator from './Seperator';

const ItemCard = ({ items, amount, date }) => {


  return (
    <View style={styles.container}>
      <Seperator height={7} />
      <View style={{...styles.itemContainer,              
        backgroundColor: items == "Milk" ? '#F0F0FF': 'null',
        backgroundColor: items == "Travelling" ? '#E0FFE0': 'null',
        backgroundColor: items == "Trip" ? '#D0FFFF': 'null',
        backgroundColor: items == "Grocery Items" ? '#FFF0F0': 'null',
        backgroundColor: items == "school" ? '#C8F2FF': 'null',
        }}>
        <View style={styles.spaceContainer}>
          <View style={styles.itemDirection}>
            <View style={{...styles.smallBox,            
              backgroundColor: items == "Milk" ? '#C8F2FF': 'null',
              backgroundColor: items == "school" ? '#4081FF': 'null',
              backgroundColor: items == "Travelling" ? "#9AFBA9" : "null",
              backgroundColor: items == "Trip" ? '#62B7B2': 'null',
              backgroundColor: items == "Grocery Items" ? "#EFB97B" : "null",
            }} />
            
            <Text style={styles.itemTxt}>{items}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateTxt}>{date}</Text>
          </View>
          <View amountContainer>
            <Text style={styles.amountTxt}>{amount}</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    height: Display.setHeight(4),
    backgroundColor: "#C8F2FF",
    justifyContent: 'center',
  },
  spaceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    width: Display.setWidth(40),
    position: 'absolute',
    right: -7
  },
  dateContainer: {
    height: Display.setHeight(4),
    width: Display.setWidth(30),
    backgroundColor: '#A9F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10
  },
  dateTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    color: '#666666',
    lineHeight: 14 * 1.4
  },
  smallBox: {
    height: 17,
    width: 17,
    borderRadius: 5,
    backgroundColor: "#4081FF",
    position: 'absolute',
    left: 10
  },
  itemDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Display.setWidth(50),
  },
  amountContainer: {
    height: Display.setHeight(4),
    width: Display.setWidth(10),
    backgroundColor: '#A9F5FF',
  },
  amountTxt: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 17,
    color: Colors.DARK_TWO,
    lineHeight: 17 * 1.4,
    left: 10
  }
});

export default ItemCard;