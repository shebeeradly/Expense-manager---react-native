import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddExpens = () => {
  return (
    <View style={styles.container}>
      <Text>Add expense Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AddExpens;