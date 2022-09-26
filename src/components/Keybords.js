import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Keyboard from 'react-native-keyboard';
import Close from '../assets/images/close.svg';
import { Colors, Fonts, Images } from '../constants';
import Seperator from './Seperator';

let model = {

    _keys: [],

    _listeners: [],

    addKey(key) {
        // this._keys = [];
        this._keys.push(key);
        this._notify();
    },

    delKey() {
        this._keys.pop();
        this._notify();
    },

    clearAll() {
        this._keys = [];
        this._notify();
    },

    getKeys() {
        return this._keys;
    },

    onChange(listener) {
        if (typeof listener === 'function') {
            this._listeners.push(listener);
        }
    },

    _notify() {
        this._listeners.forEach((listner) => {
            listner(this);
        });
    }
};


class Keybords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        model.onChange((model) => {
            this.setState({ text: model.getKeys().join('') });
        });
    }

    componentDidUpdate() {
        model.onChange((model) => {
            this.props.onPress(model)
        });
    }
    
    _handleClear() {
        model.clearAll();
    }

    _handleDelete() {
        model.delKey();
    }

    _handleKeyPress(key) {
        model.addKey(key);
    }

    render() {
        return (
            <View style={styles.container}>

                <Keyboard
                    keyboardType="decimal-pad"
                    onClear={this._handleClear.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                />
                <Seperator height={50} />
                <View style={styles.finalContaier}>
                    <TouchableOpacity
                        style={styles.closeTouch}
                        onPress={() => this.setState({ text: model.clearAll() })}>
                        <Close height={40} width={40} />
                    </TouchableOpacity>
                    <Seperator width={20} />
                    <TouchableOpacity style={styles.finalAddTouch}>
                        <Image source={Images.TIC} width={15} height={15} />
                        <Seperator width={17} />
                        <Text style={styles.finalTxt}>Add Expense</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default Keybords;