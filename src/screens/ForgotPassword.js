import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../assets/images/Login.svg';
import Mail from '../assets/images/Mail.svg';
import Seperator from '../components/Seperator';
import { Colors, Fonts, Images } from '../constants';
import Display from '../utils/Display';
import { AuthenticationService } from '../services';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            break;
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
            break;
    }
}

const ForgotPassword = ({navigation}) => {

    const [emailState, setEmailState] = useState('default');
    const [existErrorMessage, setExistErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const reset = () => {
        setLoading(true)
    };

    const checkUserExist = async (type, value) => {
        if (value?.length > 0) {
            AuthenticationService.checkUserExist(type, value).then(response => {
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
                <Seperator height={StatusBar.currentHeight} />

                <View style={styles.headerContainer}>
                    <Ionicons
                        name="chevron-back-outline"
                        size={30}
                        color='#9007FC'
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerTitle}>Forgot Password</Text>
                </View>

                <Seperator height={100} />

                <Text style={styles.welText}>Forgote password ?</Text>
                <Text style={styles.forgTouchTxt}>Please Enter your Email so we can help you
                    Recover your Password
                </Text>


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
                                checkUserExist('email', text)} />
                    </View>
                </LinearGradient>
                <Text style={styles.warningTxt}>{existErrorMessage}</Text>
                <Seperator height={5} />

                <TouchableOpacity
                    onPress={() => reset()}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9007FC', '#4081FF']}
                        style={styles.logButton}>
                        {loading ? (
                            <LottieView source={Images.LOADINGY} autoPlay />
                        ) : (
                            <Text style={styles.logBtnTxt}>Reset Password</Text>
                        )
                        }
                    </LinearGradient>
                </TouchableOpacity>


                <Seperator height={100} />
                <View style={styles.mailPosintion}>
                    <Mail height={Display.setHeight(17)}
                        width={Display.setWidth(23)} />
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
    },
    welText: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: '#9007FC', 
        fontSize: 23,
        left: -30
    },
    mailPosintion: {
        alignItems: 'center'
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
    txtInput: {
        width: Display.setWidth(75),
        textAlign: 'center'
    },
    inputContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        height: Display.setHeight(6.5),
        width: Display.setWidth(75.5),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DARK_FIVE,
        fontSize: 13,
        marginHorizontal: 38
    },
    headerTitle: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 17 * 1.4,
        width: Display.setWidth(77),
        textAlign: 'center',
        color: '#4081FF',
        left: 50
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
});

export default ForgotPassword;