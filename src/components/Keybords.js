
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Keyboard from 'react-native-keyboard';
import { Colors } from '../constants';

let model = {
    
    _keys: [],

    _listeners: [],

    addKey(key) {
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
            this.setState({text: model.getKeys().join('')});
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
                <View >
                    <Text style={styles.text}>{this.state.text}</Text>
                </View>    
                <Keyboard 
                    keyboardType="decimal-pad"
                    onClear={this._handleClear.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                />
            </View>
        );
    }
}
let styles = StyleSheet.create({
    text: {
        marginTop: 10,
        textAlign: 'center'
    },
    container: {
        flex: 1,
    }
});

export default Keybords;