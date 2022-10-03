import React, { useState } from 'react';
import {
    View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList,
} from 'react-native';
import { CatogeryCard, Seperator } from '../components';
import moment from 'moment';
import { Colors, Fonts } from '../constants';
import Display from '../utils/Display';
import Addexp from '../assets/images/addexp.svg';
import Keybords from '../components/Keybords';

const category =
    ["School", "Grocery", "Milk", "Supermarket", "Beverages", "Fish", "Medicine", "Clothes"]

const Adexp = ({ navigation }) => {

    const [salary, setSalary] = useState(0);
    const [expense, setExpense] = useState(0);
    const [activeC, setActiveC] = useState("School")


    return (
        <View style={styles.container}>
            <StatusBar translucent
                barStyle='dark-content'
                backgroundColor={Colors.DEFAULT_WHITE} />
            <Seperator height={StatusBar.currentHeight} />
            <Seperator height={20} />
            <Text style={styles.textStyle}>Add Expense</Text>
            <Seperator height={10} />
            <View style={styles.account}>
                <Addexp style={styles.accountContainer}
                    height={Display.setHeight(40)} width={Display.setWidth(100)} />
                <Seperator height={20} />
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


            <View style={styles.position}>
                <Seperator height={222} />
                <View style={styles.flatContainer}>
                    <Seperator height={20} />
                    <FlatList
                        data={category}
                        keyExtractor={(item) => item}
                        ItemSeparatorComponent={() => <Seperator height={13} />}
                        numColumns={category.length / 2}
                        renderItem={({ item, index }) => (<CatogeryCard
                            CatogeryName={item}
                            active={item === activeC ? true : false}
                            onPress={setActiveC} />
                        )}
                    />
                </View>
                <Seperator height={20} />

                <View style={styles.adCatogContainer}>
                    <TouchableOpacity style={styles.adCatogTouch}>
                        <Text style={styles.adCatogTxt}>Delete Catogery</Text>
                    </TouchableOpacity>
                    <Seperator width={15} />
                    <TouchableOpacity style={styles.adCatogTouch2}>
                        <Text style={styles.adCatogTxt}>Add New Catogery</Text>
                    </TouchableOpacity>
                </View>
                <Seperator height={20} />

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
                <Seperator height={25} />

                <Keybords onPress={(model) => setExpense(model.getKeys().join(''))} />
            </View>
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
        fontSize: 20,
        color: '#9007FC'
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
        justifyContent: 'center',
        width: Display.setWidth(80),
        height: Display.setHeight(10)
    },
    mainAmountTxt: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 50,
        color: Colors.DEFAULT_WHITE,
        marginLeft: 27
    },
    inrText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 14,
        fontFamily: Fonts.POPPINS_MEDIUM,
        position: 'absolute',
        right: 5,
        bottom: 5
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
    },
    finalContaier: {
        flexDirection: 'row',
        marginHorizontal: 20,
        top: -30
    },
    closeTouch: {
        backgroundColor: '#FDCCCC',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    finalAddTouch: {
        backgroundColor: '#9AFBA9',
        paddingHorizontal: 50,
        borderRadius: 10,
        paddingVertical: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    finalTxt: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DARK_ONE
    },
    position: {
        position: 'absolute'
    }
});

export default Adexp;