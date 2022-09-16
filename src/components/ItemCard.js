import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../constants';
import { Display } from '../utils';
import Seperator from './Seperator';

const ItemCard = ({items , amount}) => {
    

    return (
        <View>
            <Seperator height={10} />
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
        </View>
    )
};

const styles = StyleSheet.create({
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
        width: Display.setWidth(30),
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
});

export default ItemCard;